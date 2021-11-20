export const todoReducer = (state =[], action) => {
    
    switch (action.type) {
        case 'add':
            
        //     break;
        return [...state,  action.payload];

        case 'delete':

            // regreso el arreglo que cumplan esa condicion //borrar el q sea diferente al que yo quiera borrar
            return state.filter(todo =>todo.id !== action.payload);



        case 'toggle':
        return state.map(todo => 
            (todo.id===action.payload)
            ?{...todo, done: !todo.done}
            : todo
             );   

                


        // case 'toggle-old':
        //     return state.map(todo =>{
        //         if(todo.id === action.payload){
        //             return {
        //                 ...todo,  
        //                 // != es la negacion cambia el apagado o encendido
        //                 done: !todo.done
        //             } 
        //         }else {
        //                 return todo;
        //             }
                
        //     })
        default:
            return state;
    }


}
