import { useState } from "react";
import "./ToDoPage.css";
import TodoForm from "../Components/TodoForm";
import { readItems } from "../API/API";

const ToDoPage = () => {
  console.log(readItems());
  const initialmockToDo = [
    { title: "myFirstToDo" },
    { title: "myFirstToDo" },
    { title: "myFirstToDo" },
  ];

  const [mockTodo, setMockTodo] = useState(initialmockToDo);

  const handlerAddItem = (newItem) => {
    setMockTodo([...mockTodo, newItem]);
  };

  const handleChange = (e, i) => {
    const { value } = e.target;
    console.log("dbg2", value);
    /*     mockTodo[i].title */
    setMockTodo((prev) => {
      const newToDo = { ...prev[i], title: value };
      prev.splice(i, 1, newToDo);
      return prev;
    });
    console.log("dbg3", mockTodo);
  };

  return (
    <div className="page-container">
      <div className="toDo-list">
        {mockTodo.map((toDo, i) => {
          return (
            <>
              <div className="itemData">
                <input
                  className="toDo"
                  type="text"
                  defaultValue={toDo.title}
                  onChange={(e) => handleChange(e, i)}
                ></input>
                <section className="data">
                  {new Date(toDo.createdAt || 0).toLocaleDateString("en-US")}
                </section>
              </div>
            </>
          );
        })}
      </div>
      <TodoForm onAddItem={handlerAddItem} />
    </div>
  );
};

export default ToDoPage;

/* queremos añadir ítems al mockList
1) Basico: queremos un formulario con un input con un boton que le hagas un push al array --> OK
2) el objetivo es que cada input (cada todo) sea editable:
- en lugar de divs queremos que sean inputs --> OK
- a medida que voy escribiendo se vaya actualizando el mockToDos  */

/* Deberes2:
- añadir la fecha dentro del div (hacer un div con cada toDo (input)) --> OK
- en el input, verificar que no sea 0 y que no sea mas de 10 --> OK
- display del mensaje de error (con la condición de la linea 64) --> OK
BONUS COMPLICADO:
- implementar que el input sea dinamico con el texto (se expanda y se contraiga). Explorar el textArea (los diferentes atributos) y con useRef y useEffect
*/
