import { useState } from "react";
import "./style.scss"

import vermelho from "../../assets/vermelho.png"
import azul from "../../assets/azul.png"
import marrom from "../../assets/marrom.png"
import base from "../../assets/base.png"

import Batom from "../../assets/batomTampa.png"
import Batons from "../../assets/gloss.png"
import BatonsSemTampa from "../../assets/batom.png"
import Estrelas from "../../assets/estrelas.png"

import circAzul from "../../assets/Ellipse 4.png"
import circVermelho from "../../assets/Ellipse 5.png"
import circMarrom from "../../assets/Ellipse 6.png"
import circBase from "../../assets/Ellipse 7.png"

function Lancamentos(){
    const [cor,setCor] = useState(vermelho);

    return(
        <section className="Principal" id="lancamento">
            <h2>Aproveite os Lançamentos</h2>
            <div className="lançamentos">
                <div className="container-lançamentos">
                    <figure>
                        <img src={Batons} alt="Todos os tipos de batons" />
                        <img src={Batom} alt="Batons fechados com tampa" />
                        <img src={BatonsSemTampa} alt="batons sem tampas" />
                    </figure>
                </div>

                <img className="modelo" src={cor} alt="Teste do Batom" />

                <section className="vitrine">
                    <img src={Estrelas} alt="estrelas de avaliação" />
                    <h4>Matte Premium</h4>
                    <p>Cores Disponíveis</p>
                    <div className="cores">
                        <img src={circAzul} onMouseOver={() => setCor(azul)} alt="batom azul" />
                        <img src={circVermelho} onMouseOver={() => setCor(vermelho)} alt="batom vermelho" />
                        <img src={circMarrom} onMouseOver={() => setCor(marrom)} alt="batom marrom" />
                        <img src={circBase} onMouseOver={() => setCor(base)} alt="batom nude" />
                    </div>
                    <h4>Descrição</h4>
                    <p>
                        O Batom Matte possui uma fórmula inovadora desenvolvida para
                        entregar o máximo de cor na primeira aplicação com um deslize suave
                        e macio. Tem acabamento matte aveludado e manteiga de manga que
                        ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda
                        na hidratação dos lábios, textura fina e macia que não pesa nos
                        lábios.
                    </p>
                </section>
            </div>
            <h2 id="novidade">Novidades para você</h2>
        </section>

       
    )

}
export default Lancamentos;