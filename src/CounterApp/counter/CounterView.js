import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { increment, decrement, reset, incrementByFive } from './CounterSlice'; // Import actions

const CounterView = () => {
    const count = useSelector((state) => state.counter.count); // Correct useSelector
    const dispatch = useDispatch(); // Initialize dispatch



    return (
        <div>
            <h1>Counter View</h1>
            <h2>{count}</h2>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(incrementByFive(5))}>Increment 5</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default CounterView;
