import React from 'react'

const Todo = (props) => {
    const {todos, dispatch} = props
    return (
        <div>
           {todos.map((todo,id)=>
            <p style={{textDecoration:todo.completed ? 'line-through' : 'none'}}
               key={todo.id}
               onClick={()=>dispatch({type:'toggle-todo', id})} 
            >
                {todo.item}
            </p>
           
           
           )}
           
            
        </div>
    )
}

export default Todo
