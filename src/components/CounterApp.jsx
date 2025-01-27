import { UseCounter } from "../hooks/UseCounter"

export const CounterApp = () => {
    const {counter, increment, reset, decrement} = UseCounter(100)
    return (
        <>
            <h1>Counter: </h1>
            <h4> {counter} </h4>
            <button  className="btn btn-primary" onClick={() => increment (10)}> +1</button>
            <button  className="btn btn-danger" onClick={() => reset()}>Reset</button>
            <button  className="btn btn-primary" onClick={() => decrement(5,false)}>-1</button>
        </>
    )
}
