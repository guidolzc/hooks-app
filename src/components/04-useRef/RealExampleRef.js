import React, { useState } from 'react'
import '../02-useEffect/effects.css'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
export const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>Ref</h1>
            <hr/>
            {/* // show esta en true lo va a mostrar caso contrario lo va ocultar */}
            {show  && <MultipleCustomHooks/>}
            <button
            className="btn btn-primary mt-5"
            onClick={()=>{
                setShow (!show);
            }}
            >
                show/Hide
            </button>
        </div>
    )
}
