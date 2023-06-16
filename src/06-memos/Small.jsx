import React from "react";

export const Small = React.memo( ( { value }) => {

  console.log("He vuelto a dibujarme");

  return (
    <small>{ value }</small>
  )
})

