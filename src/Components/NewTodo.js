import React, { useState } from 'react'
import style from './newTodo.module.css'

const NewTodo = (props) => {
  const [todo,setTodo]=useState({title:"",desc:""});
  const {title,description}=todo;
  const handleChange =(event)=>{
    const name = event.target.name;
    setTodo ((oldTodo)=>{
return{
  ...oldTodo,[name]:event.target.value
}
    })
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({title:"",description:""});
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
            <label htmlFor='title'>Title: </label>
            <input type="text" id="title" name="title" value={title} onChange={handleChange}></input>
        </div>
        <div className={style["form-field"]}>
            <label htmlFor='desc'>Description: </label>
            <textarea type="text" id="desc" name="description" value={description} onChange={handleChange}></textarea>
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo
