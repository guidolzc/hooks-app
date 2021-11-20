import React from 'react'
import '../02-useEffect/effects.css'
import { useFetch } from '../../hooks/useFetch';
import { useCouter } from '../../hooks/useCouter';


export const MultipleCustomHooks = () => {

    const {counter , increment} =useCouter(1)

    const {loading, data}  = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0];
    // console.log(author,quote);
    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>
            { 
            loading
             ? 
                (
            <div className="alert alert-info text-center">
                Loading...</div>
                )
            :
                (
                    
            <blockquote className="blockquote text-right">
                <p className="mb-0">{quote}Hola mundo</p>
                <br></br>
                <footer className="blockquote-footer">{author}Guido</footer>
                </blockquote> 
            )
           }
            <button 
            onClick= {increment}
            className="btn btn-primary"> 
            Siguiente
            </button>


        </div>
    )
}
