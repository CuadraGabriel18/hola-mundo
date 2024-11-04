import React, { Fragment, useState } from 'react'

const Estados = () => {
  let texto = "Mensaje Por Defecto!"
  //Creando Nuestro Hook
  const [mensaje, setMensaje] = useState(texto)
  const estadoClick = () =>{
      if(mensaje != texto){
          setMensaje (texto)
      }else{
          setMensaje ("Has Cambiado El Estado Del Texto!")
      }
  }

return (
  <Fragment>
      <h2>{mensaje}</h2>
      <button onClick={()=>estadoClick ()}>Cambiar Mensaje</button>
  </Fragment>
)
}

export default Estados

