import React, { useEffect, useReducer } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer';
// import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';



const init = ()=>{
    // regresa todos en Arreglo sino trae un arreglo vacio
    return JSON.parse(localStorage.getItem('todo'))|| [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done:false,
    
    // }]; 
}
export const TodoApp = () => {
    //  todo [] =es todo lo que esta dentro del reducer devuelve en array
    // dispatch = es a donde paso mi funcion  action  para
    // todoReducer = es mi ADD eliminar agregar o actualizar to
    // inicialState = es mi Objeto

    const [todo, dispatch] = useReducer(todoReducer, [], init)
    
    // const [{description},handleInputChange,reset]=useForm({
    //     description: ''
    // });

    // console.log(description)
    console.log(todo)

    //UseEffect solo lee string se usa para grabar en el localstorage cambio y vuelve ejecutar 
    useEffect(() => {
        localStorage.setItem('todo',JSON.stringify(todo))
    },[todo]);
     

    // borrar
    const handleDelete = (todoId) => {
        console.log(todoId);

        const action = {
            type: 'delete',
            payload:todoId
        }

        dispatch(action);

    }
     const handleToggle = (todoId) => {
        dispatch ({
            type : 'toggle',
            payload:todoId
        }) 
     }
     const handleAddTodo = ( newTodo ) => {
        
        dispatch({
            type: 'add',
            payload: newTodo
        });

    }


    // agregar mi texto
    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     console.log('Nueva Tarea')

    //     // Aqui ya no agregara en espacio vacioss almenos q escriba mas de 1 
    //     if(description.trim().length<=1){
    //         return;
    //     }

    //     const newTodo = {
    //         id: new Date().getTime(),
    //         desc: description,
    //         done:false,
    //     }

    //     // agrego nuevo enviando mi NewTodo 
    //     const action = {
    //         type: 'add',
    //         payload :newTodo
    //     }
    //     // aqui paso mi valor a action a dispatch
    //     dispatch(action);
    //     reset();
    // }






    return (
        <div>
            <h1>TodoApp ({todo.length})</h1>
            <hr />
            <div className="row">
           
            
            <div className="col-7">
            <TodoList
                todo = {todo}
                handleDelete = {handleDelete}
                handleToggle = {handleToggle}
              

            />
            </div>
            <div className="col-5">
            <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />
                    

                {/* <h4>Agregar TODO</h4>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    name="description"
                    className="form-control"
                    placeholder="Aprender..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                    />
                <button  type="submit" 
                className="btn btn-outline-primary mt-1 btn-block "
                >
                    Agregar
                </button>

                </form> */}

            </div>
         
        </div>
        </div>
    )
}
