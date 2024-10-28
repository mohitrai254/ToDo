/* eslint-disable react/prop-types */
import { useState } from "react";

function ToDo() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoList.includes(inputValue)) {
      const todoListFinal = [...todoList, inputValue];
      setTodoList(todoListFinal);
      setInputValue("");
    } else {
      alert("ToDo already exists");
    }
  };

  let list = todoList.map((value, index) => {
    return (
      <TodoListItems
        value={value}
        key={index}
        indexNumber={index}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    );
  });

  return (
    <div className="todo">
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Save</button>
      </form>
      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default ToDo;

function TodoListItems({ value, indexNumber, todoList, setTodoList }) {
  let [status, setStatus] = useState(false);
  const handleDelete = (e) => {
    e.stopPropagation();
    const todoListFinal = todoList.filter((v, i) => i != indexNumber);
    setTodoList(todoListFinal);
  };

  const checkStatus = () => {
    setStatus((prevStatus) => !prevStatus);
  };

  return (
    <li className={status ? "done" : ""} onClick={checkStatus}>
      {indexNumber + 1}. {value} <span onClick={handleDelete}>&times;</span>
    </li>
  );
}
