import React, { useMemo, useState } from 'react'
import '../02-useEffect/effects.css'
import { useCouter } from '../../hooks/useCouter';
import { ProcesoPesado } from '../../helpers/ProcesoPesado';

export const MemoHooks = () => {

    const {counter, increment} =useCouter(10);
    const [show, setShow] = useState(true);

   
    const memoProcesoPesado = useMemo(() => ProcesoPesado(counter), [counter])

    return (
        <div>
            <h1>MemoHooks</h1>
            <h3>Counter <small>{counter}</small></h3>
            <hr />

           
            <p>{memoProcesoPesado}</p>
            <button
            className="btn btn-primary"
            onClick={increment}
            > +1
            </button>
            <button  
            className="btn btn-primary ml-3"
            onClick={()=>{
               setShow(!show);
 
            }}
            >
                Show /Hide{JSON.stringify(show)}
            </button>
        </div>
    )
}
