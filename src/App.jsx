import React from "react"

import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import ListaProdutos from './components/repeticao/ListaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'


import Aleatorio from './components/basicos/Aleatorio'
import Mega from './components/mega/Mega'

//arrow function
export default _ =>
    <div className='App'>
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#13 Desafio Mega" color="#008B8B">
               <Mega/>
            </Card>
            <Card titulo="#12 Contador" color="#424242">
               <Contador numeroInicial={10}/>
            </Card>
            <Card titulo="#11 Componente Controlado (Input)" color="#E45F56">
               <Input/>
            </Card>
            <Card titulo="#10 Comunicação Indireta" color="#8BAD39">
               <IndiretaPai/>
            </Card>
            <Card titulo="#9 Comunicação Direta" color="#59323C">
               <DiretaPai/>
            </Card>
            <Card titulo="#8 Renderização Condicional" color="#982395">
                <ParOuImpar numero={21}/>
                <UsuarioInfo usuario={{nome: "Fernando"}}/>
                <UsuarioInfo usuario={{nome: "Fernando"}}/>
                <UsuarioInfo/>
            </Card>
            <Card titulo="#7 Desafio Repetição" color="#3A9AD9">
                <ListaProdutos/>
            </Card>
            <Card titulo="#6 Repetição" color="#FF4C65">
                <ListaAlunos/>
            </Card>
            <Card titulo="#5 Componente com filhos" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro"  />
                    <FamiliaMembro nome="Ana"  />
                    <FamiliaMembro nome="Gustavo"  />
                </Familia>
            </Card>
            <Card titulo="#4 Desafio Aleatório" color="#FA6900">
                <Aleatorio
                    min={1}
                    max={100} />
            </Card>
            <Card titulo="#3 Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card titulo="#2 Com Parametro" color="#E8B71A">
                <ComParametro
                    titulo="Segundo Componente"
                    subtitulo="Muito Legal!"
                    nota={10} />
            </Card>
            <Card titulo="#1 Primeiro" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>


    </div>
