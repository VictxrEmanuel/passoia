import "./style.scss"

function Footer(){
    return(
        <footer>
            <nav>
                <h4>Atendimento</h4>
                <ul>
                    <li>Fale conosco</li>
                    <li>Perguntas Frequentes</li>
                    <li>Meus pedidos</li>
                    <li>Nossas Lojas</li>
                </ul>
            </nav>
            <div className="pagamento">
                <h4>Formas de Pagamento</h4>
                <figure>
                    <img src="mastercard.png" alt="MasterCard Logo" />
                    <img src="visa.png" alt="Visa Logo" />
                    <img src="pix.png" alt="PIX Logo" />
                    <img src="boleto.png" alt="Boleto Logo" />
                </figure>
            </div>
            <div className="redes">
                <h4>Siga-nos nas Redes Sociais</h4>
                <figure>
                    <img src="instagram.png" alt="Logo Instagram" />
                    <img src="facebook.png" alt="Logo Facebook" />
                    <img src="youtube.png" alt="Logo Youtube" />
                    <img src="twitter.png" alt="Logo Twitter" />
                </figure>
            </div>
        </footer>
        
    )
}

export default Footer;