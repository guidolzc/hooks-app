import  { useState } from 'react'

// si me mandan algo sera initialState sino sera 10 
export const useCouter = (initialState=10) => {

    const [counter, SetCounter] = useState(initialState);// 10

    const increment = ()=>{
        SetCounter (counter +1)
    }
    const decrement = ()=>{
        SetCounter (counter -1)
    }
    // const increment = (factor = 1)=>{
    //     SetCounter (counter + factor)
    // }
    // const decrement = (factor = 1)=>{
    //     SetCounter (counter -factor)
    // }

    // hago llamar al inicial para el reset
    const reset = ()=>{
        SetCounter (initialState)
    }


    return {
        increment,
        decrement,
        counter,
        reset

    }
}
