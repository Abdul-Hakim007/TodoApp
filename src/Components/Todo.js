import React from 'react'
import style from './Todo.module.css'

const Todo = (props) => {
    const {title,description} = props.todo;
    
    const {id}=props;
    const handleClick =(id)=>{
        props.onRemove(id);
    }
  return (

    <article className={style.todo}>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div>
            <button className={style.btn} onClick={()=>{handleClick(id)}}>
                <i className='fa fa-trash fa-2x'></i>
            </button>
        </div>
      
    </article>
  )
}

export default Todo
