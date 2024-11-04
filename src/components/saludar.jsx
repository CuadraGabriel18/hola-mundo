import React, { Fragment } from "react";

const Saludar = () => {
    const nombre = "Gabriel Hernandez Cuadra";
    let anioNacimiento = 2002
    let edad = 2024 - anioNacimiento;
    return (
        <Fragment>
            <h3>Mi primer componente en REACT</h3> 
            <h3>Creado por {nombre} </h3>
            <h4>Mi edad es de: {edad} años </h4>
        </Fragment>
    )
}
export default Saludar