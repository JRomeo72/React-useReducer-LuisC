import { useReducer } from "react"

const type = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}

const reducer = (state, action) => {
    if( action.type == 'INCREMENT' ) {
        return state+1
    }
    if( action.type == 'DECREMENT' ) {
        return state-1
    }
    if(action.type == 'RESET') {
        return 0
    }
    return state
}


const Counter = () => {

    const [state, dispatch] = useReducer(reducer, 0)

  return (
    <div>
        <h3>Clicks: {state}</h3>
        <div className="buttons">
            <button onClick={() => dispatch( { type: type.INCREMENT } )}>
                +
            </button>
            <button onClick={() => dispatch( { type: type.DECREMENT } )}>
                -
            </button>
            <button onClick={() => dispatch( { type: type.RESET } )}>
                Reset
            </button>
        </div>
    </div>
  )
}

export default Counter