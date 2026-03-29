import Logo from "../imagens/Logo.png"
import "../App.css"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import icone from "../imagens/icone-carrinho.png"
import { useCart } from "../context/CartContext"
const Header = () =>{
  const [search,setsearch] = useState("")
  const navigate = useNavigate()
  const { cartCount } = useCart()
  function handlesearch(e){
    if(e.key === "Enter" || e.type === "click"){
      if(!search.trim()) return
        navigate(`/produtos?filter=${encodeURIComponent(search)}`)
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
              <Link to="/pedidos" id="button-icone">
                <img src={icone} alt="icone carrinho de compras" id="icone"/>
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </Link>
          </div>
        </div>
        <div id="navegation">
            <Link to="/" id="home" className="navegação">Home</Link>
            <Link to="/produtos" id="produtos" className="navegação">Produtos</Link>
            <Link to="/categorias" id="categorias" className="navegação">Categorias</Link>
            <Link to="/pedidos" id="pedidos" className="navegação">Meus pedidos</Link>
        </div>
      </header>  
    )
}
export default Header