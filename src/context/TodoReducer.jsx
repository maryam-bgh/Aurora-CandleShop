export const TodoReducer = (state, action) => {
    switch (action.type) {
        case"ADD_TASK" :
        return {
            ...state,
            todos : [
                ...state.todos, {
                    id: Date.now(),
                    text: action.payload,
                    completed : false,
                }
            ]
        }
        case "DELETE_TASK" : 
        return {
            ...state,
            todos: state.todos.filter((t) => t.id !== action.payload)
        }

        case "SET_EDITING_ID": 
        return {
            ...state,
            editingId : action.payload
        }
        case "EDIT_TODO":
            return {
                ...state,
                todos: state.todos.map((t) => t.id === state.editingId ? {...t, text : action.payload } : t),
                editingId : null
            }
        case " SET_FILTER" : 
        return {
            ...state,
            todos: action.payload
        }  
        case "TOGGLE_COMPLETE":
            return{
                ...state,
                todos : state.todos.map((t) => t.id === action.payload ? {...t, completed : !action.payload } : t)
            }
        default : state  
    }
}