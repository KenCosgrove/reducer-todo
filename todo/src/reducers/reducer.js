export const initialState = {
    todos: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }]
}

export const reducer = (state, action) => {
    switch(action.type){
        case 'add-todo':
            return {
                todos: [...state.todos, {item:action.text, completed: false, id: Date.now()}]
            }
        case 'toggle-todo':
            return{
                todos: state.todos.map((todo, id)=> id===action.id ? {...todo, completed:!todo.completed} : todo)
            }
        case 'clear-todo':
            return{
                todos:state.todos.filter(todo=>!todo.completed)
            }
        default:
            return state        
    }
}