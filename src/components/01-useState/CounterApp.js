import React, { useState } from 'react'
import './Counter.css'



export const CounterApp = () => {

    // al hook tambien se le puede pasar varias informaciones de formulario..
    const [state, setState] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
        counter4:40,
    
    })

    // destructuro el hooks 
    const { counter1 , counter2 } = state;
    return (
        <>
        <h1>Counter1 {counter1}</h1>
        <h1>Counter2 {counter2}</h1>
       
            <hr/>
            <butto className= "btn btn-primary"
            // copio el state y lo paso luego.. y modifico  +1
            onClick= {()=>{setState ({
                ...state,
                counter1 : counter1 + 1 
                    })
                
                }}>
            
                        +1
                 </butto>
        </>
    )
}
