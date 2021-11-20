import React, { useLayoutEffect, useRef } from 'react'

import { useFetch } from '../../hooks/useFetch';
import { useCouter } from '../../hooks/useCouter';
import './layaout.css'

export const Layaout = () => {

    const {counter , increment} =useCouter(1)

    const { data}  = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote} = !!data && data[0];

    const pTag = useRef();

    // funcion me devuelve el tamaño de mi tamaño de cajas despues q se alla agregado algo
    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect())
     
    }, [quote])

    return (
        <div>
            <h1>Layaout EFFECT</h1>
            <hr/>
         
            <blockquote className="blockquote text-right">
                <p 
                className="mb-0"
                ref= { pTag}
                >
                 {quote}
                </p>
                <br></br>
              
                </blockquote> 
           
            <button 
            onClick= {increment}
            className="btn btn-primary"> 
            Siguiente
            </button>


        </div>
    )
}
