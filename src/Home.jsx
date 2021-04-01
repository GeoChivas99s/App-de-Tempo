
import React, { Component } from 'react';
import Esquerda from './Componentes/Esquerda/Esquerda';
import Direita from './Componentes/Direita/Direita';
import name from './App.css';


class Home extends Component {
    render() {
        return (
            <main className="principal">
                <Esquerda/>
                <Direita/>
            </main>
        );
    }
}

export default Home;