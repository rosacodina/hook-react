import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: "strider",
    email: "fernando@google.com"
  });

  const {username, email} = formState;

  const onInputChange = ( { target }) => {
    const { name, value } = target;
    setFormState({
      ...formState, 
      [ name ]: value
    });
  }

  useEffect( () => {
  });

  useEffect( () => {
  }, [formState] );

  useEffect( () => {
  }, [email] );


  return (
    <>

      <h1>Formulario simple</h1>
      <input 
        type="text"
        className="form-control mt-4"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }
      />

      <input 
        type="email"
        className="form-control mt-4"
        placeholder="fernando@google.com"
        name="email"
        value={ email }
        onChange={ onInputChange }
      />

      {
        (username === "strider2") && <Message />
      
      }

    </>
  )
}

