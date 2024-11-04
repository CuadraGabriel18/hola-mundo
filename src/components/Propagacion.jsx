import React from 'react';

const Propagacion =()=> {
    const array1 = ["Perro", "Gato", "Tortuga"]
    const array2 = ["Hamster", "Loro", "Conejo", "Pez"]
    const mascotas = [...array1, ...array2]
    return (
        <>
        <h4>Array 1</h4>
        <ol>
            {
                array1.map((masc, key)=>(
                    <li key={key}>{masc}</li>
                ))
            }
        </ol>
        <h4>Array 2</h4>
        <ol>
            {
                array2.map((masc, key)=>(
                    <li key={key}>{masc}</li>
                ))
            }
        </ol>
        <h4>Array Unidos</h4>
        <ol>
            {
                mascotas.map((masc, key)=>(
                    <li key={key}>{masc}</li>
                ))
            }
        </ol>
        </>
    );
}

export default Propagacion;