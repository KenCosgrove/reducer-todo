import React from 'react'

const TodoForm = (props) => {
    const {onSubmit, onChange, text, dispatch} = props
    return (
        <form onSubmit={onSubmit}>

            <input value={text} onChange={onChange} />
            <button>+</button>
            <button onClick={()=>dispatch({type:'clear-todo'})}>
                clear
            </button>
        </form>
    )
}

export default TodoForm
