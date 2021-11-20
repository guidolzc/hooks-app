const initialState = [{
    id:1,
    todo:'comprar pan',
    done: false

}];

 const todoReducer = (state= initialState, action) => {
    if(action?.type==='agregar'){
        return [...state, action.payload]
    }


    return state;
}
let todos = todoReducer();
 
const newTodo = {
    id:2,
    todo:'comprar leche',
    done: false
}

// esta ACTION LE MANDO MI REDUCER = ACTION
const agregarTodoAction = {
    type:'agregar',
    payload:newTodo
}
// aqui le doy el valor a initialState , ACTION 
todos = todoReducer(todos,agregarTodoAction);

console.log(todos);

