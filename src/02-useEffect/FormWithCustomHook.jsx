import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {


  const { formState, onInputChange, username, email, password, onResetForm } = useForm({
    username: "",
    email: "",
    password: ""
  })

  //const { username, email, password } = formState;

  return (
    <>

      <h1>Formulario con custom hook</h1>
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
        className="form-control mt-2"
        placeholder="fernando@google.com"
        name="email"
        value={ email }
        onChange={ onInputChange }
      />

      <input 
        type="password"
        className="form-control mt-4"
        placeholder="contraseña"
        name="password"
        value={ password }
        onChange={ onInputChange }
      />

      <button 
        className="btn btn-primary mt-3"
        onClick={ onResetForm }
      >Borrar</button>

    </>
  )
}

