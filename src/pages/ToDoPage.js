const ToDoPage = () => {
  return (
    <div>
      {mockToDo.map((toDo) => {
        return <div>{toDo.title}</div>;
      })}
    </div>
  );
};

const mockToDo = [
  { title: "myFirstToDo" },
  { title: "myFirstToDo" },
  { title: "myFirstToDo" },
];

export default ToDoPage;

/* queremos añadir ítems al mockList
1) Basico: queremos un formulario con un input con un boton que le hagas un push al array
2) el objetivo es que cada input (cada todo) sea editable:
- en lugar de divs queremos que sean inputs
- a medida que voy escribiendo se vaya actualizando el mockToDos  */
