import React, {  useEffect } from 'react'
import './effects.css'
import { useForm } from '../../hooks/useForm';


export const FormWithCustomHook = () => {

// llamo a funcional component USEFORM desde HOOKS y lo importo y me traigo HANDLEINPUTCHANGE
const [formValues, handleInputChangee] = useForm({
    name:'',
    email:'',
    password:'',
 
});

const {name, email,password}= formValues;

useEffect(() => {
    
    console.log('email cambio')
}, [email])


// para tomar mis datos D MI formulario apretando ENTER O GUARDAR
const handleSubmit =(e)=> {
    e.preventDefault();
    console.log(formValues)
}

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr/>
            <div className="form-group">
            <input 
            type="text" 
            name="name"
            className= "form-control"
            placeholder="Tu nombre"
            autoComplete="off"
            value={name}
            onChange= {handleInputChangee}
            />

            </div>
             <br></br>
            <div className="form-group">
            <input 
            type="text" 
            name="email"
            className= "form-control"
            placeholder="email@gmail.com"
            autoComplete="off"
            value={email}
            onChange= {handleInputChangee}
            />
            </div>
            <br></br>
            <div className="form-group">
            <input 
            type="password" 
            name="password"
            className= "form-control"
            placeholder="*****"
            autoComplete="off"
            value={password}
            onChange= {handleInputChangee}
            />
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
        </form>
    )
}
