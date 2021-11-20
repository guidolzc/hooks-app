
import React from 'react'
import { TodoListItem } from './TodoListItem';

export const TodoList = ({todo, handleToggle,handleDelete}) => {
    return (
        
               <ul className="list-group list-group-flush">
              {
                  todo.map((todo,i) => (
                     <TodoListItem
                     key={todo.id}
                     todo ={todo}
                     index = {i}
                     handleToggle= {handleToggle}
                     handleDelete= {handleDelete}
                     
                     />
                  ))
              }
            </ul>
        
    )
}
