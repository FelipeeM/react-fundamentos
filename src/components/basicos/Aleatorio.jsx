
//math.random
import React from "react";

export default (props) => {

    const { min, max } = props

    let random = parseInt(Math.random() * (max - min) + min)

    return (
        <>
            <h2>Numero Aleatório</h2>
            <h3>O numero aleatorio é <strong>{random}</strong></h3>
        </>
    )
}


