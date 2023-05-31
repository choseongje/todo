import React, {useState} from "react";
import TodoField from './components/TodoField'
import TodoItem from './components/TodoItem'
import DoneItem from "./components/DoneItem";
import './App.css';
import { useRef } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const count = useRef(1);

  const addTodo = (todoName, doneStatus, tag) => {
    const newItem = {
      id: count.current,
      name: todoName,
      doneStatus,
      tag,
    };
    setTodoList((prevState) => {
      return [...prevState, newItem];
    })
    count.current = count.current + 1;
  }

  const getCompleted = (id) => {
    const idTodo = todoList.filter(todo => todo.id === id);
    if (idTodo.length === 0) return;

    const originalTodo = idTodo[0];
    const newTodo = {
      ...originalTodo,
      doneStatus: true,
    };

    const newList = todoList.filter(todo => todo.id !== id).concat(newTodo);

    setTodoList(newList);
  }

  const setTag = (id, tag) => {
    const newList = todoList.map((item)=>{
      if(item.id===id){
        const newItem = item;
        newItem.tag=tag;
        return newItem;
      }
      return item;
    })
    setTodoList(newList)
  }

  const removeDone = (id) =>{
    const newList = todoList.filter(todo => todo.id !== id);
    setTodoList(newList);
  }

  return (
    <div className="App">
      <TodoField addTodo={addTodo}/>
      {todoList.filter(todo => !todo.doneStatus).map((item) => {
        return (<TodoItem id={item.id} item={item} getCompleted={getCompleted} setTag={setTag}/>);
      })}
      {todoList.filter(todo => todo.doneStatus).map((item) => {
        return (<DoneItem id={item.id} item={item} removeDone={removeDone} setTag={setTag}/>);
      })}
      
    </div>
  );
}

export default App;
