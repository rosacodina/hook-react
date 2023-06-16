import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef = useRef();

  const onClick = () => {

    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>

      <input 
        ref={ inputRef }
        type="text"
        placeholder="Introduzca su nombre"
        className="form-control"
      />

      <button 
        className="btn btn-primary mt-2"
        onClick={ onClick }
      >
        Set focus
      </button>
    </>
  )
}


