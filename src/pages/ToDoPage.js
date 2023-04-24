import { useState } from "react";
import TodoForm from "../Components/TodoForm";

const ToDoPage = () => {
  const initialmockToDo = [
    { title: "myFirstToDo" },
    { title: "myFirstToDo" },
    { title: "myFirstToDo" },
  ];

  const [mockTodo, setMockTodo] = useState(initialmockToDo);

  const handlerAddItem = (newItem) => {
    setMockTodo([...mockTodo, newItem]);
  };

  return (
    <>
      <div>
        {mockTodo.map((toDo) => {
          return (
            <input
              className="toDo"
              type="text"
              defaultValue={toDo.title}
            ></input>
          );
        })}
      </div>
      <TodoForm onAddItem={handlerAddItem} />
    </>
  );
};

export default ToDoPage;

/* queremos añadir ítems al mockList
1) Basico: queremos un formulario con un input con un boton que le hagas un push al array --> OK
2) el objetivo es que cada input (cada todo) sea editable:
- en lugar de divs queremos que sean inputs --> OK
- a medida que voy escribiendo se vaya actualizando el mockToDos  */
