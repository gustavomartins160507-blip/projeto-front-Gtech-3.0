import "../app.css"
import { Link } from "react-router-dom"
import Listar from "./listaprodutos"

const Card2 = () => {

    let lista_image = []
    let lista_name = []
    let lista_price = []
    let lista_discount = []
    let lista_off = []
    for (let i = 0; i < Listar.length; i++) {
        lista_image.push(Listar[i].src)
        lista_name.push(Listar[i].name)
        lista_price.push(Listar[i].price)
        lista_discount.push(Listar[i].discount)
        lista_off.push(Listar[i].off)
    }

    return (
        <>
            <div className="div-card" id="card-9">
                <div className="div-card-imagem">
                    <img src={lista_image[0]} alt="" className="tenis-imagem" />
                </div>
                <h2>
                    <Link to={`/produtos?filter=${encodeURIComponent(lista_name[0])}`}>
                        {lista_name[0]}
                    </Link>
                </h2>
                <p><del>R$ {lista_price[0]}</del></p>
                <p className="desconto">
                    R$ {lista_discount[0]}<span className="span"> no pix</span>
                </p>
                <p className="off"> -{lista_off[0]}% OFF</p>
            </div>

            <div className="div-card" id="card-10">
                <div className="div-card-imagem">
                    <img src={lista_image[1]} alt="" className="tenis-imagem" />
                </div>
                <h2>
                    <Link to={`/produtos?filter=${encodeURIComponent(lista_name[1])}`}>
                        {lista_name[1]}
                    </Link>
                </h2>
                <p><del>R$ {lista_price[1]}</del></p>
                <p className="desconto">
                    R$ {lista_discount[1]}<span className="span"> no pix</span>
                </p>
                <p className="off"> -{lista_off[1]}% OFF</p>
            </div>

            <div className="div-card" id="card-11">
                <div className="div-card-imagem">
                    <img src={lista_image[2]} alt="" className="tenis-imagem" />
                </div>
                <h2>
                    <Link to={`/produtos?filter=${encodeURIComponent(lista_name[2])}`}>
                        {lista_name[2]}
                    </Link>
                </h2>
                <p><del>R$ {lista_price[2]}</del></p>
                <p className="desconto">
                    R$ {lista_discount[2]}<span className="span"> no pix</span>
                </p>
                <p className="off"> -{lista_off[2]}% OFF</p>
            </div>

            <div className="div-card" id="card-12">
                <div className="div-card-imagem">
                    <img src={lista_image[3]} alt="" className="tenis-imagem" />
                </div>
                <h2>
                    <Link to={`/produtos?filter=${encodeURIComponent(lista_name[3])}`}>
                        {lista_name[3]}
                    </Link>
                </h2>
                <p><del>R$ {lista_price[3]}</del></p>
                <p className="desconto">
                    R$ {lista_discount[3]}<span className="span"> no pix</span>
                </p>
                <p className="off"> -{lista_off[3]}% OFF</p>
            </div>

            <div className="div-card" id="card-13">
                <div className="div-card-imagem">
                    <img src={lista_image[4]} alt="" className="tenis-imagem" />
                </div>
                <h2>
                    <Link to={`/produtos?filter=${encodeURIComponent(lista_name[4])}`}>
                        {lista_name[4]}
                    </Link>
                </h2>
                <p><del>R$ {lista_price[4]}</del></p>
                <p className="desconto">
                    R$ {lista_discount[4]}<span className="span"> no pix</span>
                </p>
                <p className="off"> -{lista_off[4]}% OFF</p>
            </div>

            <div className="div-card" id="card-14">
                <div className="div-card-imagem">
                    <img src={lista_image[5]} alt="" className="tenis-imagem" />
                </div>
                <h2>
                    <Link to={`/produtos?filter=${encodeURIComponent(lista_name[5])}`}>
                        {lista_name[5]}
                    </Link>
                </h2>
                <p><del>R$ {lista_price[5]}</del></p>
                <p className="desconto">
                    R$ {lista_discount[5]}<span className="span"> no pix</span>
                </p>
                <p className="off"> -{lista_off[5]}% OFF</p>
            </div>
        </>
    )
}

export default Card2
