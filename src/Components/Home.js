import React, { useState } from 'react'
import Todos from './Todos'
import style from './Home.module.css'
import NewTodo from './NewTodo'
import {v4 as uuidv4} from 'uuid'



function Home() {
  
const [todos,setTodos]=useState([]);
const addTodo =(todo)=>{
// console.log(todo)
setTodos((previousTodo)=>{
  return[...previousTodo,{id: uuidv4(), todo}]
})
};

const handleRemoveTodo =(id)=>{
  setTodos((previousTodo)=>{
    const filteredTodo = previousTodo.filter((todo)=> todo.id != id);
    return filteredTodo;
  })
}

  return (
    <div className={style.container}>
   <NewTodo onAddTodo={addTodo}/>
      <Todos todos={todos} onRemove ={handleRemoveTodo}/>
      
    </div>
  )
}

export default Home
