import React, { useState } from "react";
import './Mega.css'

export default props => {
    function checkNumbers(random, numbers, index) {
        for (let key in numbers) {
            if (random == numbers[key] && +key !== index) {
                numbers[index] = parseInt(Math.random() * (61 - 1) + 1)
                checkNumbers(numbers[index], numbers, index)
            }
        }
    }

    function genaretedNumbers(total) {
        let numbers = []
        let random = 0
        for (let i = 0; i < total; i++) {
            random = parseInt(Math.random() * (60 - 1) + 1)
            if (i == 0) {
                numbers[i] = random
            } else {
                numbers[i] = random
            }
            checkNumbers(random, numbers, i)
        }
        return numbers
    }
    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)


    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(" ")}</h3>
            <div>
                <label >Qntd de números: </label>
                <input
                    min='6'
                    max='15'
                    type="number"
                    value={qtde}
                    onChange={e => {
                        setQtde(+e.target.value)
                        setNumeros(genaretedNumbers(+e.target.value))
                    }}
                />
            </div>
            <button onClick={_ => setNumeros(genaretedNumbers(qtde))}>Gerar Numeros</button>
        </div>
    )

}