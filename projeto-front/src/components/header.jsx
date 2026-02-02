import Logo from "../imagens/Logo.png"
import "../App.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import icone from "../imagens/icone-carrinho.png"
const Header = () =>{
  const [search,setsearch] = useState("")
  const navigate = useNavigate()
  function handlesearch(e){
    if(e.key === "Enter" || e.type === "click"){
      if(!search.trim()) return
        navigate(`/products?search=${encodeURIComponent(search)}`)
    }
  }
    return(
      <header>
        <div className="header-top-row">
          <img src={Logo} alt="Logo" className="logo"/>
          <div id="pesquisar-div">
              <input type="text" placeholder="pesquisar" id="pesquisar" value={search} onChange={(e) => setsearch(e.target.value)} onKeyDown={handlesearch}/>
              <button onClick={handlesearch}>pesquisar</button>
          </div>
          <div className="botoes-direita">
              <a href="#" id="cadastrar"><button>cadastrar</button></a>
              <a href="#" id="entrar"><button>entrar</button></a>
              <button id="button-icone"><img src={icone} alt="icone carrinho de compras" id="icone"/></button>
          </div>
        </div>
        <div id="navegation">
            <a href="#" id="home" className="navegação">Home</a>
            <a href="http://localhost:5173/produtos" id="produtos" className="navegação">Produtos</a>
            <a href="http://localhost:5173/categorias" id="categorias" className="navegação">Categorias</a>
            <a href="http://localhost:5173/pedidos" id="pedidos" className="navegação">Meus pedidos</a>
        </div>
      </header>  
    )
}
export default Header