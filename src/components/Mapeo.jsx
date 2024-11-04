import React, { Fragment } from 'react'

const Mapeo = () => {
    const Inicializarequipos = [
        "Barcelona", "Real Betis", "Atletico de Madrid", "Real Sociedad"
     ]
     const [equipos, setEquipos] = React.useState(Inicializarequipos)
     const autos = [
        {id:1, marca:"Mazda",      tipo:"Mazda 3"},
        {id:2, marca:"Ford",       tipo:"Fusion"},
        {id:3, marca:"Honda",      tipo:"Civic"},
        {id:4, marca:"Volkswagen", tipo:"Jetta"}
     ]
  return (
    <Fragment>
        <h4>Mapear Equipos "Array"</h4>
        <ol>
            {
                equipos.map((equipo, index) => (
                    <li key={index}>{equipo}</li>
                ) )
            }
        </ol>
        <h4>Mapear Objetos "Objetos"</h4>
        <ul>
            {
                autos.map((auto) => (
                    <li key={auto.id}>{auto.id}.-{auto.marca}: {auto.tipo}</li>
                ))
            }
        </ul>
    </Fragment>
  )
}

export default Mapeo
