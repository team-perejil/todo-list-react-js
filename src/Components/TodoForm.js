import { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ onAddItem }) => {
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
    console.log("dbg1: ", e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.length === 0) {
      alert(
        "El valor del input está vacío. Por favor ingresa un valor válido."
      );
      return;
    }
    if (item.length > 10) {
      alert("El valor del imput no puede superar los 10 caracteres");
      return;
    } else {
      onAddItem({ title: item, createdAt: Date.now() });
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="item">Escribe tu ítem</label>
        <input
          type="text"
          className="item-input"
          value={item}
          onChange={handleChange}
        ></input>
      </div>
      <button type="submit">Agregar ítem</button>
    </form>
  );
};

export default TodoForm;
