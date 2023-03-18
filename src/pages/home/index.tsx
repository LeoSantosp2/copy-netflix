import React from 'react';
import { TbWorld } from 'react-icons/tb';

import { Container, Header, Main } from './styled';

import logoNetflix from '../../images/logo-netflix.png';

export default function Home() {
    const border = () => {
        const div = document.querySelector('.options-linguage');
        const selec = document.getElementById('options-linguages');

        if (selec?.focus()) {
            div?.
        }
    };

    return (
        <Container>
            <Header>
                <img src={logoNetflix} alt="" />

                <div className="functions">
                    <div className="options-linguage">
                        <TbWorld size={20} />
                        <select name="options-linguages" id="options-linguages">
                            <option value="pt">Português</option>
                            <option value="en">Inglês</option>
                        </select>
                    </div>

                    <button>Entrar</button>
                </div>
            </Header>

            <Main>
                <h1>Filmes, séries e muito mais. Sem limites.</h1>
                <p>Assista onde quiser. Cancele quando quiser.</p>
                <p>Quer assistir? Informe seu email para criar ou reiniciar sua assinantura.</p>
                <div className="form">
                    <input type="email" className="email" placeholder="Email" />
                    <button>Vamos Lá {'>'}</button>
                </div>
            </Main>
        </Container>
    );
}
