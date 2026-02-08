import "../app.css"
const Gallery = ({ nome }) => {
    const imagens = [
        { filtro: "sapato social masculino", image: ["src/imagens/tenis1.jpeg" , "src/imagens/tenis1.1"]},
        { filtro: "chuteira new balance", image: "src/imagens/tenis2.jpeg" },
        { filtro: "tenis esportivo corrida", image: "src/imagens/tenis3.jpeg" },
        { filtro: "tenis nike esportivo", image: "src/imagens/tenis4.jpeg" },
        { filtro: "nike air jordan", image: "src/imagens/tenis5.jpeg" },
        { filtro: "sapatenis masculino", image: "src/imagens/tenis6.jpeg" },
        { filtro: "converse all star", image: "src/imagens/tenis7.jpeg" },
        { filtro: "nike air max", image: "src/imagens/tenis8.jpeg" },
    ]
    const imagem_selecionada = nome ? imagens.find(img => img.filtro === nome) : null
    return (
        <>
            <div className="galery-container">
                <div className="galery">
                    {imagem_selecionada ? (
                        <>
                            <h2 id="imagem-selecionada-filtro">{imagem_selecionada.filtro}</h2>
                            <img src={imagem_selecionada.image} alt="" />
                        </>
                    ) : (
                        <p>nenhum produto selecionado</p>
                    )}
                </div>
            </div>
        </>
    )
}
export default Gallery