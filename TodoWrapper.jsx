import CreateToDo from "./CreateToDo"
import DisplayTodo from "./DisplayTodo"
import style from "./TodoWrapper.module.css"
import { useState } from "react"


const TodoWrapper = () => {
  const[todo,setTodo]=useState("");
  const[allTodos,setAllTodos]=useState([]); //[{},{}]

  const handleTodo=(e)=>{
    setTodo(e.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    //creating new todo object
    let newTodo={
      id:Date.now(),
      text:todo,
    };

    console.log(newTodo);
    setAllTodos([...allTodos,newTodo]);  //storing all todos
    setTodo(""); //clearing input field
  }

  const handleDelete=(todo)=>{
    console.log("Deleted todo"+todo);

    let filterTodo=allTodos.filter((ele)=>{
      return ele.id!==todo.id
    });
    setAllTodos(filterTodo);
  }


  const handleUpdate=(todo)=>{
    console.log("Updated todo"+todo);

  let UpdateTodo=allTodos.find((ele)=>{
      return ele.id===todo.id
    });
    setTodo(UpdateTodo.text);
    handleDelete(todo);
  }


  return (
    <div id={style.TodoWrapper} className="grid grid-row-2  gap-4">
    <CreateToDo 
    todo={todo} 
    handleTodo={handleTodo} 
    handleSubmit={handleSubmit}/>
    <DisplayTodo allTodos={allTodos} 
    handleDelete={handleDelete} handleUpdate={handleUpdate}/>
    </div>
  );
};

export default TodoWrapper