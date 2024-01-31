import { useState } from "react";

function Todo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo("");
  };
  const onClick= () => setToDos([]);
  const onDelete = (index) => {
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex)); 
  }
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <div key={index}>
            <li>
              {item}
            </li>
            <button onClick={() => onDelete(index)}>X</button>
          </div>
        ))}
      </ul>
      <button onClick={onClick}>reset</button>
    </div>
  );
}

export default Todo;