import React from "react";
import alunos from '../../data/alunos'

export default (props) => {
    const alunosLI = alunos.map((aluno,index) => {
        let data = alunos[index]
        return <li key={data.id}> {data.id} {data.nome} -> {data.nota}</li>
    })
    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {alunosLI}
            </ul>
        </div>
    )
}