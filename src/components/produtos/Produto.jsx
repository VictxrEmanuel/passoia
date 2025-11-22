import "./style.scss"

function Produto(){
    return(
        <section className="produtos" id="produto">
            <h2 >Looks e Dicas de Maquiagem</h2>
            <figure>
                <img src="labios.png" alt="mulher passando gloss nos labios" />
                <img src="olhos.png" alt="olho verde com sombras e delineado feito" />
                <img src="rosto.png" alt="mulher passando base no rosto" />
                <img src="tendencia.png" alt="mulher com um pote de blush do lado do rosto" />
            </figure>
        </section>
    )
}

export default Produto;