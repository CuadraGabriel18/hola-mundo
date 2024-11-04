import React, { Fragment } from "react";

const Eventos = () => {
    const eventoclick = () =>{
        alert("Diste Click")
    }
    return (
        <Fragment>
            <h3>
            Evento Click
        </h3>
        <button className="btn btn-primary" onClick={ ()=>eventoclick() }>Pulsame</button>
        </Fragment>
    )
}
export default Eventos

