import { useReducer } from 'react'
import deleteIcon from '../assets/delete.svg'
import newIcon from '../assets/new.svg'
import editIcon from '../assets/edit.svg'

const initialTodo = [
	{ id: 1, title: "Todo #1" },
	{ id: 2, title: "Todo #2" },
	{ id: 3, title: "Todo #3" },
	{ id: 4, title: "Todo #4" },
	{ id: 5, title: "Todo #5" },
]

const type = {
    ADD: 'ADD',
    DELETE: 'DELETE',
    EDIT: 'EDIT'
}

const reducer = (state, action) => {
    switch (action.type) {
        case type.DELETE:
            return state.filter(todo => todo.id !== action.id)
        
    
        default:
            return state
    }
}

const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(reducer, initialTodo)
    
  return (
    <div className="todo">
        <h3>TodoApp</h3>
        <ul>
            {
                todos.map(todo => (

                <li key={todo.id}>
                    <div className="card">
                        <div className="id">
                            <h4>{todo.id}</h4>
                        </div>
                        <h3>{todo.title}</h3>
                        <div className='btns'>
                            <button onClick={() => dispatch( { type: type.ADD, id: todo.id } )}>
                                <img src={newIcon} alt="" />
                            </button>
                            <button onClick={() => dispatch( { type: type.ADD, id: todo.id } )}>
                                <img src={editIcon} alt="" />
                            </button>
                            <button onClick={() => dispatch( { type: type.DELETE, id: todo.id } )}>
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