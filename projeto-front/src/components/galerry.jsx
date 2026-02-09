import "../app.css"
import { useState, useEffect } from "react"
const Gallery = ({ nome }) => {
    const imagens = [
        { filtro: "sapato social masculino", image: ["src/imagens/tenis1.jpeg" , "src/imagens/tenis1.1.webp","src/imagens/tenis1.2.jpeg","src/imagens/tenis1.3.webp","src/imagens/tenis1.4.jpg","src/imagens/tenis 1.5.webp"]},
        { filtro: "chuteira new balance", image: ["src/imagens/tenis2.jpeg","src/imagens/tenis2.1.jpg","src/imagens/tenis2.2.jpeg","src/imagens/tenis2.3.webp","src/imagens/tenis2.4.jpeg","src/imagens/tenis2.5.webp"] },
        { filtro: "tenis esportivo corrida", image: ["src/imagens/tenis3.jpeg"] },
        { filtro: "tenis nike esportivo", image: ["src/imagens/tenis4.jpeg"] },
        { filtro: "nike air jordan", image: ["src/imagens/tenis5.jpeg"] },
        { filtro: "sapatenis masculino", image: ["src/imagens/tenis6.jpeg"] },
        { filtro: "converse all star", image: ["src/imagens/tenis7.jpeg"] },
        { filtro: "nike air max", image: ["src/imagens/tenis8.jpeg"] },
    ]
    const imagem_selecionada = nome ? imagens.find(img => img.filtro === nome) : null
    const [index,setindex] = useState(0)
    useEffect(()=>{
        setindex(0)
    },[nome])
    const nextimage = () =>{
        setindex((prev) =>
            prev === imagem_selecionada.image.length -1 ? 0 : prev +1 )
    }
    const previmage = (prev) =>{
        setindex((prev) =>
            prev === 0 ? imagem_selecionada.image.length -1 :prev -1
        )
    }
    return (
        <div className="galery-container">
          <div className="galery">
            {imagem_selecionada ? (
              <>
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
                  {imagem_selecionada.image.map((img,idx) => (
                    <img key={idx} 
                    src={img} 
                    alt="" 
                    className="imagem-fotos" 
                    onClick={() => setindex(idx)}/>
                  ))}
                </div>
              </>
            ) : (
              <p>nenhum produto selecionado</p>
            )}
          </div>
        </div>
      )
    }
export default Gallery