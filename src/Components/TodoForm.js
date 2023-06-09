import { useEffect, useState } from "react";
import "./TodoForm.css";
import { addItems } from "../API/API";

const TodoForm = ({ onAddItem }) => {
  const [item, setItem] = useState("");

  const [errors, setErrors] = useState([]);

  // useEffect(() => {
  //   alert(errors);
  // }, [errors]);

  const handleChange = (e) => {
    setItem(e.target.value);
    console.log("dbg1: ", e);
  };

  const handleErrors = (mensaje) => {
    setErrors((prev) => {
      return [...prev, mensaje];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if (item.length === 0) {
      const mensaje =
        "El valor del input está vacío. Por favor ingresa un valor válido.";
      handleErrors(mensaje);
    }
    if (item.length > 25) {
      const mensaje =
        "El valor del input es mayor que 25. Por favor ingresa un valor válido.";
      handleErrors(mensaje);
    }
    if (errors.length) return;
    onAddItem({ title: item, createdAt: Date.now() });
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="item-input">
        <label htmlFor="item">Escribe tu ítem</label>
        <input type="text" value={item} onChange={handleChange}></input>
      </div>
      <button type="submit">Agregar ítem</button>
      {errors.map((error) => {
        return <p>{error}</p>;
      })}
    </form>
  );
};

export default TodoForm;
