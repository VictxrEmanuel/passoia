import { useEffect, useState } from "react"
import LogoPassoia from "../../assets/LogoPassoia.png"
import "./style.scss"


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        if (isOpen){
            document.body.style.overflow = "hidden";
        }else {
            document.body.style.overflow = "auto";

        }

        return () => {
            document.body.style.overflow = "auto";
        }
    } , [isOpen]
)

    return(
        <header>
            <img src={LogoPassoia} alt="Logo da Marca" />

            {isOpen && (
        <div className="navbar-overlay" onClick={toggleMenu}></div>
      )}

            <ul className={`navbar-links ${isOpen? "active" : ""}`}>
                <li> <a href="#produto">Looks </a> </li>
                <li> <a href="#lancamento"> Lançamentos </a></li>
                <li> <a href="#novidade"> Novidades</a></li>
            </ul>


            <div className={`hamburguer ${isOpen? "active" : ""}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>

            </div>
        </header>

        
    )
}

export default Header;