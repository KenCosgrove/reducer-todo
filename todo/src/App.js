import React, {useReducer, useState}  from 'react';
import './App.css';
import {initialState, reducer} from './reducers/reducer'
import TodoForm from './components/TodoForm'
import Todo from './components/Todo'

function App() {
const [state, dispatch] = useReducer(reducer, initialState)
const [text, setText] = useState()

const onSubmit = e => {
  e.preventDefault()
  dispatch({type:'add-todo', text})
  setText('')
}

const onChange = e => {
  setText(e.target.value)
}



  return (
    <div className="App">
     <TodoForm onSubmit={onSubmit} onChange={onChange} text={text} dispatch={dispatch}/>
     <Todo todos={state.todos} dispatch={dispatch}/>
    </div>
  );
}

export default App;
