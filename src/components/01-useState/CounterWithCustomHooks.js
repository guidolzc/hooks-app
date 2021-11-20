import React from 'react'
import './Counter.css'
import { useCouter } from '../../hooks/useCouter';
export const CounterWithCustomHooks = () => {

    const {increment ,decrement, state,reset}=useCouter(100)


    return (
        <>
            <h1>Counter with hook {state}</h1>
            <hr/>
            {/* <butto onClick={increment} className = "btn btn-primary">+1</butto>

            <butto onClick={decrement} className= "btn btn-primary">-1</butto> */}
            <butto onClick={()=>increment(2)} className = "btn btn-primary">+1</butto>

            <butto onClick={()=>decrement(2)} className= "btn btn-primary">-1</butto>
            <butto onClick={reset} className= "btn btn-primary">Reset</butto>
        </>
    )
}
