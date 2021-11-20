
import React, {memo}from 'react'

// memorisa la funcion y  si cambia cuando cambia el valor
export const Small = memo(({value}) => {

    console.log('me volvi a llamar  :(');
    return (
      <small>{value}</small>
    )
})
