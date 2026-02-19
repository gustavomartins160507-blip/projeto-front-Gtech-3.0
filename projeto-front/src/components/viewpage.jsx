import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Card2 from "./produtoscard2"
import "../app.css"
import Propspage from "./propsviepage"
const Viewpage = ({props}) => {
    const { id } = useParams()
    const imagens= [
        {  id:1, filtro: "sapato social masculino", image: ["/src/imagens/tenis1.jpeg" , "/src/imagens/tenis1.1.webp","/src/imagens/tenis1.2.jpeg","/src/imagens/tenis1.3.webp","/src/imagens/tenis1.4.jpg","/src/imagens/tenis 1.5.webp"]},
        { id:2, filtro: "chuteira new balance", image: ["/src/imagens/tenis2.jpeg","/src/imagens/tenis2.1.jpg","/src/imagens/tenis2.2.jpeg","/src/imagens/tenis2.3.webp","/src/imagens/tenis2.4.jpeg","/src/imagens/tenis2.5.webp"] },
        { id:3, filtro: "tenis esportivo corrida", image: ["/src/imagens/tenis3.jpeg","/src/imagens/tenis3.1.jpg","/src/imagens/tenis3.2.jpeg","/src/imagens/tenis3.3.jpg","/src/imagens/tenis3.4.jpg","/src/imagens/tenis3.5.jpeg"] },
        { id:4, filtro: "tenis nike esportivo", image: ["/src/imagens/tenis4.jpeg","/src/imagens/tenis4.1.png","/src/imagens/tenis4.2.webp","/src/imagens/tenis4.3.jpg","/src/imagens/tenis4.4.jpg","/src/imagens/tenis4.5.png"] },
        { id:5, filtro: "nike air jordan", image: ["/src/imagens/tenis5.jpeg","/src/imagens/tenis5.1.jpeg","/src/imagens/tenis5.2.jpg","/src/imagens/tenis5.3.jpg","/src/imagens/tenis5.4.jpg","/src/imagens/tenis5.5.jpg"] },
        { id:6,filtro: "sapatenis masculino", image: ["/src/imagens/tenis6.jpeg","/src/imagens/tenis6.1.avif","/src/imagens/tenis6.2.jpg"] },
        { id:7,filtro: "converse all star", image: ["/src/imagens/tenis7.jpeg","/src/imagens/tenis7.1.jpg","/src/imagens/tenis7.2.jpg","/src/imagens/tenis7.3.webp"] },
        { id:8, filtro: "nike air max", image: ["/src/imagens/tenis8.jpeg","/src/imagens/tenis8.1.jpg","/src/imagens/tenis8.2.webp","/src/imagens/tenis8.3.webp"] },
    ]
    const imagem_selecionada = imagens.find(
        img => img.id === Number(id)
    )
    const [index, setindex] = useState(0)
    useEffect(() => {
        setindex(0)
    }, [id])

    const nextimage = () => {
        setindex((prev) =>
            prev === imagem_selecionada.image.length - 1 ? 0 : prev + 1
        )
    }
    const previmage = () => {
        setindex((prev) =>
            prev === 0 ? imagem_selecionada.image.length - 1 : prev - 1
        )
    }

    if (!imagem_selecionada) {
        return <h2>Produto não encontrado</h2>
    }

    return (
        <div className="galery-container">
            <div className="galery">
                <h2 className="imagem-selecionada-filtro">
                    {imagem_selecionada.filtro}
                </h2>

                <div className="slider">
                    <button onClick={previmage}>◀</button>

                    <img
                        src={imagem_selecionada.image[index]}
                        alt=""
                        className="galery"
                    />

                    <button onClick={nextimage}>▶</button>
                </div>

                <div className="miniaturas-container">
                    {imagem_selecionada.image.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt=""
                            className="imagem-fotos"
                            onClick={() => setindex(idx)}
                        />
                    ))}
                    <div className="props-container">
                        <Propspage name='teste'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewpage
