import "../app.css"
import { Link } from "react-router-dom"
import AddToCartButton from "./AddToCartButton"
import { ID_POR_FILTRO } from "../constants/produtosCart"

const Card = (props) => {
  const lista = [
    {
      name: "produto 1",
      image: "src/imagens/tenis1.jpeg",
      price: 200,
      discount: 149.9,
      off: "25%",
    },
    {
      name: "Produto 2",
      image: "src/imagens/tenis2.jpeg",
      price: 350,
      discount: 279.9,
      off: "20%",
    },
    {
      name: "Produto 3",
      image: "src/imagens/tenis3.jpeg",
      price: 450,
      discount: 349.9,
      off: "22%",
    },
    {
      name: "Produto 4",
      image: "src/imagens/tenis4.jpeg",
      price: 280,
      discount: 199.9,
      off: "29%",
    },
    {
      name: "Produto 5",
      image: "src/imagens/tenis5.jpeg",
      price: 520,
      discount: 399.9,
      off: "23%",
    },
    {
      name: "Produto 6",
      image: "src/imagens/tenis6.jpeg",
      price: 380,
      discount: 299.9,
      off: "21%",
    },
    {
      name: "Produto 7",
      image: "src/imagens/tenis7.jpeg",
      price: 420,
      discount: 329.9,
      off: "21%",
    },
    {
      name: "Produto 8",
      image: "src/imagens/tenis8.jpeg",
      price: 310,
      discount: 249.9,
      off: "19%",
    },
  ]

  const ordem = props.order === "menor" ? "menor" : "maior"
  const nomes = [
    props.name,
    props.name2,
    props.name3,
    props.name4,
    props.name5,
    props.name6,
    props.name7,
    props.name8,
  ]
  const filtros = [
    "sapato social masculino",
    "chuteira new balance",
    "tenis esportivo corrida",
    "tenis nike esportivo",
    "nike air jordan",
    "sapatenis masculino",
    "converse all star",
    "nike air max",
  ]

  const listaOrdenada = [...lista]
    .map((item, i) => ({ ...item, name: nomes[i], filtro: filtros[i] }))
    .sort((a, b) =>
      ordem === "menor" ? a.price - b.price : b.price - a.price
    )

  return (
    <>
      {listaOrdenada.map((item, i) => {
        const pid = ID_POR_FILTRO[item.filtro]
        return (
          <div className="div-card product-card" id={`card-${i + 1}`} key={item.filtro}>
            <div className="div-card-imagem">
              <img src={item.image} alt="" className="tenis-imagem" />
            </div>
            <h2>
              <Link to={`/produtos?filter=${encodeURIComponent(item.filtro)}`}>
                {item.name}
              </Link>
            </h2>
            <p>
              <del>R$ {item.price}</del>
            </p>
            <p className="desconto">
              R$ {item.discount}
              <span className="span"> no pix</span>
            </p>
            <p className="off"> -{item.off} OFF</p>
            <AddToCartButton
              product={{
                id: pid,
                name: item.name,
                image: item.image,
                price: item.price,
                discount: item.discount,
              }}
            />
          </div>
        )
      })}
    </>
  )
}
export default Card
