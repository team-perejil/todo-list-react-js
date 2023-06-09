import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { useRef, useState } from "react";
import "./ToDoPage.css";
import TodoForm from "../Components/TodoForm";
import { addItems, deteleItems, readItems } from "../API/API";

const ToDoPage = () => {
  console.log(readItems());
  /*   const initialmockToDo = [
    { title: "first to-do" },
    { title: "second to-do" },
    { title: "third to-do" },
  ]; */

  const initialmockToDo = readItems() || [];

  const [mockTodo, setMockTodo] = useState(initialmockToDo);

  const handlerAddItem = (newItem) => {
    const newItems = addItems(newItem);
    setMockTodo(newItems);
    /*     setMockTodo([...mockTodo, newItem]); */
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

  const handleDelete = (toDo) => {
    setMockTodo(deteleItems(toDo));
  };

  const textareaRef = useRef(null);

  const handleTextareaInput = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    <div className="page-container">
      <div className="toDo-list">
        {mockTodo.map((toDo, i) => {
          return (
            <div className="itemData" key={toDo.id}>
              <textarea
                className="toDo"
                type="text"
                ref={textareaRef}
                onInput={handleTextareaInput}
                defaultValue={toDo.title}
                onChange={(e) => handleChange(e, i)}
              />
              <section className="data">
                {new Date(toDo.createdAt || 0).toLocaleDateString("en-US")}
                <div>
                  <FaTimes
                    onClick={() => handleDelete(toDo.id)}
                    className="delIcon"
                  />
                </div>
              </section>
            </div>
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
