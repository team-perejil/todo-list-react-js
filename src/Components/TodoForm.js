import { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ onAddItem }) => {
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ title: item });
    e.target.reset();
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
          maxLength={85}
        ></input>
      </div>
      <button type="submit">Agregar ítem</button>
    </form>
  );
};

export default TodoForm;
