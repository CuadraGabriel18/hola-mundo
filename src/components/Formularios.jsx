import React, { useState } from 'react';

const Formularios = () => {
    const [Track, setTrack] = useState ('')
    const [Artista, setArtista] = useState ('')
    const [Genero, setGenero] = useState ('')
    const [list, setListaCanciones] = useState ([])
    
    const guardarTrack = (evt) => {
        evt.preventDefault()
        //Validando campos vacios
        if(!Track.trim()){
            alert('Debe ingresar nombre del Track')
            return
        }
        if(!Artista.trim()){
            alert('Debe ingresar nombre del Artista')
            return
        }
        if(!Genero.trim()){
            alert('Debe ingresar nombre del Genero')
            return
        }
        console.log(`Procesando Datos ... ${Track} :: ${Artista} :: ${Genero}`)
        //Unir datos a la lista de Cnaciones
        setListaCanciones([
            ...list,
            {cancion: Track, artist: Artista, gen: Genero}
        ]
        )
        //Limpiando Hooks y Campos
        setTrack('')
        setArtista('')
        setGenero('')
        evt.target.reset() // LImpia Campos
    }
    return (
        <>
        <div className="container">
            <h1>Registro De Canciones</h1>
            <form onSubmit={guardarTrack}>
                <input 
                   type="text" 
                   placeholder='Track'
                   className='form-control mb-3'
                   onChange={(evt) => setTrack(evt.target.value)}
                />
                 <input 
                   type="text" 
                   placeholder='Artista'
                   className='form-control mb-3'
                   onChange={(evt) => setArtista(evt.target.value)}
                />
                 <input 
                   type="text" 
                   placeholder='Género'
                   className='form-control mb-3'
                   onChange={(evt) => setGenero(evt.target.value)}
                />
                <button type='submit' className='btn btn-primary'>Agregar Canción</button>
            </form>
            <hr />
            <h3>Lista De Canciones</h3>
            <ol>
                { 
                list.map((cancion,index)=> (
                        <li key={index}>Cancion: {cancion.cancion} Artista: {cancion.artist} Genero: {cancion.gen}</li>
                    ))
                }
            </ol>
        </div>
        </>
    );
}

export default Formularios;