import { Route, Routes } from "react-router-dom"
import Layout from "../components/layout"
import Produtos from "../components/produtos"
import Categorias from "../components/categorias"
import Pedidos from "../components/pedidos"
import Error from "../error/error404"
import Home from "../components/home"
import Viewpage from "../components/viewpage"
const Path = () =>{
    return(
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/produtos" element={<Produtos/>}/>
                <Route path="/teste" element={<p>pagina filtrada aqui</p>}/>
                <Route path="/categorias" element={<Categorias/>} />
                <Route path="/pedidos" element={<Pedidos/>} />
                <Route path="/produtos/:id" element={<Viewpage/>}/>
                <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    )
}
export default Path