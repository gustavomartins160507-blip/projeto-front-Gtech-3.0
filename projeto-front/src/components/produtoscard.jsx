import "../app.css"
import { useNavigate } from "react-router-dom"
const Card = (props) =>{
    const lista =[{
        name:'produto 1',
        image:"src/imagens/tenis1.jpeg",
        price:200,
        discount:149.9
    },
    {
        name:'Produto 2',
        image:"src/imagens/tenis2.jpeg",
        price:350,
        discount:279.9
    },
    {
        name:'Produto 3',
        image:"src/imagens/tenis3.jpeg",
        price:450,
        discount:349.9
    },
    {
        name:'Produto 4',
        image:"src/imagens/tenis4.jpeg",
        price:280,
        discount:199.9
    },
    {
        name:'Produto 5',
        image:"src/imagens/tenis5.jpeg",
        price:520,
        discount:399.9
    },
    {
        name:'Produto 6',
        image:"src/imagens/tenis6.jpeg",
        price:380,
        discount:299.9
    },
    {
        name:'Produto 7',
        image:"src/imagens/tenis7.jpeg",
        price:420,
        discount:329.9
    },
    {
        name:'Produto 8',
        image:"src/imagens/tenis8.jpeg",
        price:310,
        discount:249.9
    }]
    const navigate = useNavigate()
    let lista_image = []
    let lista_name = []
    let lista_price = []
    let lista_discount = []
    for(let i=0;i<lista.length;i++){
        lista_image.push(lista[i].image)
        lista_name.push(lista[i].name)
        lista_price.push(lista[i].price)
        lista_discount.push(lista[i].discount)
    }
    return(
        <>
        <div className="div-card" id="card-1">
            <div className="div-card-imagem">
                <img src={lista_image[0]} alt="" className="tenis-imagem"/>
                <h1>teste</h1>
            </div>
        <h2><a href="#" onClick={()=>navigate("/produtos?filter=sapato%20social%20masculino")}>{props.name}</a></h2>
        <p><del>R$ {lista_price[0]}</del></p>
        <p className="desconto">R$ {lista_discount[0]}</p>
        </div>
        <div className="div-card" id="card-2">
            <div className="div-card-imagem">
                <img src={lista_image[1]} alt=""  className="tenis-imagem"/>
                <h1>teste</h1>
            </div>
        <h2><a href="#" onClick={()=>navigate("/produtos?filter=chuteira%20new%balance")}>{props.name2}</a></h2>
        <p><del>R$ {lista_price[1]}</del></p>
        <p className="desconto">R$ {lista_discount[1]}</p>
        </div>
        <div className="div-card" id="card-3">
            <div className="div-card-imagem">
                <img src={lista_image[2]} alt=""  className="tenis-imagem"/>
                <h1>teste</h1>
            </div>
        <h2><a href="#" onClick={()=>navigate("/produtos?filter=tenis%20esportivo%20corrida")}>{props.name3}</a></h2>
        <p><del>R$ {lista_price[2]}</del></p>
        <p className="desconto">R$ {lista_discount[2]}</p>
        </div>
        <div className="div-card" id="card-4">
            <div className="div-card-imagem">
                <img src={lista_image[3]} alt=""  className="tenis-imagem"/>
                <h1>teste</h1>
            </div>
        <h2><a href="#" onClick={()=>navigate("/produtos?filter=tenis%2nike%20=esportivo")}>{props.name4}</a></h2>
        <p><del>R$ {lista_price[3]}</del></p>
        <p className="desconto">R$ {lista_discount[3]}</p>
        </div>
        <div className="div-card" id="card-5">
            <div className="div-card-imagem">
                <img src={lista_image[4]} alt=""  className="tenis-imagem"/>
                <h1>teste</h1>
            </div>
        <h2><a href="#" onClick={()=>navigate("/produtos?filter=nike%20airjordan%20")}>{props.name5}</a></h2>
        <p><del>R$ {lista_price[4]}</del></p>
        <p className="desconto">R$ {lista_discount[4]}</p>
        </div>
        <div className="div-card" id="card-6">
            <div className="div-card-imagem">
                <img src={lista_image[5]} alt=""  className="tenis-imagem"/>
                <h1>teste</h1>
            </div>
        <h2><a href="#" onClick={()=>navigate("/produtos?filter=%20sapatenis%20masculino")}>{props.name6}</a></h2>
        <p><del>R$ {lista_price[5]}</del></p>
        <p className="desconto">R$ {lista_discount[5]}</p>
        </div>
        <div className="div-card" id="card-7">
            <div className="div-card-imagem">
                <img src={lista_image[6]} alt=""  className="tenis-imagem"/>
                <h1>teste</h1> 
            </div>
        <h2><a href="#" onClick={()=>navigate("/produtos?filter=converse%20all%20star")}>{props.name7}</a></h2>
        <p><del>R$ {lista_price[6]}</del></p>
        <p className="desconto">R$ {lista_discount[6]}</p>
        </div>
        <div className="div-card" id="card-8">
            <div className="div-card-imagem">
                <img src={lista_image[7]} alt=""  className="tenis-imagem"/>
                <h1>teste</h1>
            </div>
        <h2><a href="#" onClick={()=>navigate("/produtos?filter=nike%20air%20max")}>{props.name8}</a></h2>
        <p><del>R$ {lista_price[7]}</del></p>
        <p className="desconto">R$ {lista_discount[7]}</p>
        </div>
        </>
    )
}
export default Card