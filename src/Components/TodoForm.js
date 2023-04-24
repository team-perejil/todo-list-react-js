import { useState } from "react";

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
          id="item"
          name="item"
          value={item}
          onChange={handleChange}
        ></input>
      </div>
      <button type="submit">Agregar item</button>
    </form>
  );
};

export default TodoForm;
