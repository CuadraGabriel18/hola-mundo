import React, { Fragment, useState } from 'react'

const SumaResta = () => {
    let texto = "Suma y Resta De un Numero"
    let num = 0
    const [sumita, setNumero] = useState(num)
    const SumaOnclick = () =>{
      setNumero(sumita + 1)
    }

    const RestaOnclick = () =>{
      setNumero(sumita - 1)
    }
  return (
    <Fragment>
        <h1>{texto}</h1>
        <h2>{sumita}</h2>
        <button onClick={()=>SumaOnclick ()}>Suma</button>
        <button onClick={()=>RestaOnclick ()}>Resta</button>

    </Fragment>
  )
}

export default SumaResta
