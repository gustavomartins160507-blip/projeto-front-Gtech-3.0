import "../app.css"
import Gallery from "./galerry"
import { useSearchParams } from "react-router-dom"
import Card2 from "./produtoscard2"
import { useState } from "react"
import Listar from "./listaprodutos"
import Card from "./produtoscard"
const Produtos = () => {
        const [SearchParams] = useSearchParams()
        const filter = SearchParams.get("filter")
    return (
        <>
        {
                filter ? (
                        <Gallery nome={filter} radius={"10px"}/>
                ):(
                        <div className="produtos-layout">
                        <aside className="produtos-sidebar">
                          <div className="order-box">
                            <h3>Filtrar por</h3>
                            <select>
                              <option>Selecione</option>
                              <option>Menor preço</option>
                              <option>Maior preço</option>
                            </select>
                          </div>
                        </aside>
                        <main className="produtos-content">
                          <h2 className="produtos-title">
                          </h2>
                          <div className="produtos-grid">
                            <div className="produto-card">
                            <Card2/>
                            <Card name='Sapato social masculino' name2='Chuteira New balance' name3='Tênis Esportivo corrida' name4='Tênis nike esportivo' name5='Nike air jordan 1' name6='Sapatênis masculino' name7='Converse All start Off white ' name8='Nike air max'/>
                            </div>
                          </div>
                        </main>
                        </div>
                )
        }
        </>
    )
}
export default Produtos