import "../app.css"
import { Link } from "react-router-dom"
const Card = (props) =>{
    const lista =[{
        name:'produto 1',
        image:"src/imagens/tenis1.jpeg",
        price:200,
        discount:149.9,
        off: "25%"
    },
    {
        name:'Produto 2',
        image:"src/imagens/tenis2.jpeg",
        price:350,
        discount:279.9,
        off: "20%"
    },
    {
        name:'Produto 3',
        image:"src/imagens/tenis3.jpeg",
        price:450,
        discount:349.9,
        off: "22%"
    },
    {
        name:'Produto 4',
        image:"src/imagens/tenis4.jpeg",
        price:280,
        discount:199.9,
        off: "29%"
    },
    {
        name:'Produto 5',
        image:"src/imagens/tenis5.jpeg",
        price:520,
        discount:399.9,
        off: "23%"
    },
    {
        name:'Produto 6',
        image:"src/imagens/tenis6.jpeg",
        price:380,
        discount:299.9,
        off: "21%"
    },
    {
        name:'Produto 7',
        image:"src/imagens/tenis7.jpeg",
        price:420,
        discount:329.9,
        off: "21%"
    },
    {
        name:'Produto 8',
        image:"src/imagens/tenis8.jpeg",
        price:310,
        discount:249.9,
        off: "19%"
    }]
    let lista_off = []
    let lista_image = []
    let lista_name = []
    let lista_price = []
    let lista_discount = []
    for(let i=0;i<lista.length;i++){
        lista_image.push(lista[i].image)
        lista_name.push(lista[i].name)
        lista_price.push(lista[i].price)
        lista_discount.push(lista[i].discount)
        lista_off.push(lista[i].off)
    }
    return(
        <>
        <div className="div-card" id="card-1">
            <div className="div-card-imagem">
                <img src={lista_image[0]} alt="" className="tenis-imagem"/>
            </div>
        <h2><Link to={`/produtos?filter=${encodeURIComponent("sapato social masculino")}`}>{props.name}</Link></h2>
        <p><del>R$ {lista_price[0]}</del></p>
        <p className="desconto">R$ {lista_discount[0]}<span className="span"> no pix</span></p>
        <p className="off"> -{lista_off[0]} OFF</p>
        </div>
        <div className="div-card" id="card-2">
            <div className="div-card-imagem">
                <img src={lista_image[1]} alt=""  className="tenis-imagem"/>
            </div>
        <h2><Link to={`/produtos?filter=${encodeURIComponent("chuteira new balance")}`}>{props.name2}</Link></h2>
        <p><del>R$ {lista_price[1]}</del></p>
        <p className="desconto">R$ {lista_discount[1]}<span className="span"> no pix</span></p>
        <p className="off"> -{lista_off[1]} OFF</p>
        </div>
        <div className="div-card" id="card-3">
            <div className="div-card-imagem">
                <img src={lista_image[2]} alt=""  className="tenis-imagem"/>
                <h1>teste</h1>
            </div>
        <h2><Link to={`/produtos?filter=${encodeURIComponent("tenis esportivo corrida")}`}>{props.name3}</Link></h2>
        <p><del>R$ {lista_price[2]}</del></p>
        <p className="desconto">R$ {lista_discount[2]}<span className="span"> no pix</span></p>
        <p className="off"> -{lista_off[2]} OFF</p>
        </div>
        <div className="div-card" id="card-4">
            <div className="div-card-imagem">
                <img src={lista_image[3]} alt=""  className="tenis-imagem"/>
                <h1>teste</h1>
            </div>
        <h2><Link to={`/produtos?filter=${encodeURIComponent("tenis nike esportivo")}`}>{props.name4}</Link></h2>
        <p><del>R$ {lista_price[3]}</del></p>
        <p className="desconto">R$ {lista_discount[3]}<span className="span"> no pix</span></p>
        <p className="off"> -{lista_off[3]} OFF</p>
        </div>
        <div className="div-card" id="card-5">
            <div className="div-card-imagem">
                <img src={lista_image[4]} alt=""  className="tenis-imagem"/>
                <h1>teste</h1>
            </div>
        <h2><Link to={`/produtos?filter=${encodeURIComponent("nike air jordan")}`}>{props.name5}</Link></h2>
        <p><del>R$ {lista_price[4]}</del></p>
        <p className="desconto">R$ {lista_discount[4]}<span className="span"> no pix</span></p>
        <p className="off"> -{lista_off[4]} OFF</p>
        </div>
        <div className="div-card" id="card-6">
            <div className="div-card-imagem">
                <img src={lista_image[5]} alt=""  className="tenis-imagem"/>
                <h1>teste</h1>
            </div>
        <h2><Link to={`/produtos?filter=${encodeURIComponent("sapatenis masculino")}`}>{props.name6}</Link></h2>
        <p><del>R$ {lista_price[5]}</del></p>
        <p className="desconto">R$ {lista_discount[5]}<span className="span"> no pix</span></p>
        <p className="off"> -{lista_off[5]} OFF</p>
        </div>
        <div className="div-card" id="card-7">
            <div className="div-card-imagem">
                <img src={lista_image[6]} alt=""  className="tenis-imagem"/>
                <h1>teste</h1> 
            </div>
        <h2><Link to={`/produtos?filter=${encodeURIComponent("converse all star")}`}>{props.name7}</Link></h2>
        <p><del>R$ {lista_price[6]}</del></p>
        <p className="desconto">R$ {lista_discount[6]}<span className="span"> no pix</span></p>
        <p className="off"> -{lista_off[6]} OFF</p>
        </div>
        <div className="div-card" id="card-8">
            <div className="div-card-imagem">
                <img src={lista_image[7]} alt=""  className="tenis-imagem"/>
                <h1>teste</h1>
            </div>
        <h2><Link to={`/produtos?filter=${encodeURIComponent("nike air max")}`}>{props.name8}</Link></h2>
        <p><del>R$ {lista_price[7]}</del></p>
        <p className="desconto">R$ {lista_discount[7]}<span className="span"> no pix</span></p>
        <p className="off"> -{lista_off[7]} OFF</p>
        </div>
        </>
    )
}
export default Card