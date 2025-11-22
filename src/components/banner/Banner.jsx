import "./style.scss"

function Banner({imagem, alt}){
    return(
        <section className="banner">
            <img src={imagem} alt={alt} />
        </section>
    )
}

export default Banner;