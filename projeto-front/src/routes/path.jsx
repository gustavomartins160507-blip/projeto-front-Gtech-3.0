import { Route, Routes } from "react-router-dom"
import Layout from "../components/layout"
import Produtos from "../components/produtos"
import Categorias from "../components/categorias"
import Pedidos from "../components/pedidos"
import Error from "../error/error404"
const Path = () =>{
    return(
        <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route path="/teste" element={<Layout><p>pagina filtrada aqui</p></Layout>}/>
            <Route path="/produtos" element={<Produtos/>} />
            <Route path="/categorias" element={<Categorias/>} />
            <Route path="/pedidos" element={<Pedidos/>} />
            <Route path="*" element={<Error/>}/>
        </Routes>
    )
}
export default Path