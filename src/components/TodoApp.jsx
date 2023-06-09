import { useReducer, useState } from 'react'
import deleteIcon from '../assets/delete.svg'
// import newIcon from '../assets/new.svg'
import editIcon from '../assets/edit.svg'

const initialTodo = []

const type = {
    ADD: 'ADD',
    DELETE: 'DELETE',
    EDIT: 'EDIT'
}

const reducer = (state, action) => {
    switch (action.type) {
        case type.DELETE:
            return state.filter(todo => todo.id !== action.payload)
        
        case type.ADD:
            return [ ...state, action.payload ]

        case type.EDIT: {
            const todoEdited = action.payload
            return state.map(todo => todo.id === todoEdited.id ? todoEdited : todo )
        }
        
    
        default:
            return state
    }
}

const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(reducer, initialTodo)
    const [ text, setText ] = useState("")

    const handleSubmit = (e) => {

        e.preventDefault()

        if(inputVerification()) {
            const newTodo = { id: Date.now(), title: text.trim() }
            dispatch( { type: type.ADD, payload: newTodo } )
            setText("")
        }

    }

    const handleEdit = (todo) => {

        if(inputVerification()) {
            dispatch( { type: type.EDIT, payload: { ...todo, title: text.trim() } } )
            setText("")
        }
    }

    const inputVerification = () => {
        // const inputText = text.trim()
        
        if(text.trim() !== "") {
            setText(text.trim())
            return true
        }

        setText("")
        return false
    }
    
    return (
        <div className="todo">
            <h3>TodoApp</h3>
            <form onSubmit={handleSubmit}>
                <input className='inputText' value={text} onChange={e => setText(e.target.value)} placeholder='New todo' />
                <button type="submit">Add</button>
            </form>
            <ul>
                {
                    todos.map(todo => (

                    <li key={todo.id}>
                        <div className="card">
                            <div className="id">
                                <h6>ID: {todo.id}</h6>
                            </div>
                            <h3>{todo.title}</h3>
                            <div className='btns'>
                                <button onClick={() => handleEdit(todo)}>
                                    <img src={editIcon} alt="" />
                                </button>
                                <button onClick={() => dispatch( { type: type.DELETE, payload: todo.id } )}>
                                    <img className='delete-icon' src={deleteIcon} alt="" />
                                </button>
                            </div>
                        </div>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoApp