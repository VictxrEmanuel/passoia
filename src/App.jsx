import Header from "./components/header/Header.jsx"
import Banner from "./components/banner/Banner.jsx"
import Footer from "./components/footer/Footer.jsx"
import Lancamentos from "./components/lancamentos/Lancamentos.jsx"
import Produto from "./components/produtos/Produto.jsx"

function App(){
  return(
    <>
    <Header />
    <Banner imagem="Banner.png" alt="Banner principal onde mostra um produto da loja" />
    <Produto  />
    <Lancamentos  />
    
    <Banner className="NovidadesImg" imagem="bannerLapis.png" alt="Banner onde mostra varios pinceis de maquiagem"></Banner>
    <Footer />
    </>
  )
}
export default App;