import React from "react";

export default props => {
    const min = 50
    const max = 70
    const gerarIdade = () =>{
       return parseInt(Math.random()* (max - min)) + min
    }
    const gerarNed = () => Math.random() > 0.5
     
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                function (e) {
                    props.quandoClicar("João",gerarIdade(),gerarNed())
                }
            }
            >Fornecer Informações</button>          
        </div>
    )    
}