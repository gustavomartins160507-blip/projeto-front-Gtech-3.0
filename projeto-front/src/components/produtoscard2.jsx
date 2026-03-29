import "../app.css"
import { Link } from "react-router-dom"
import Listar from "./listaprodutos"
import AddToCartButton from "./AddToCartButton"

const Card2 = ({ order }) => {
  const ordem = order === "menor" ? "menor" : "maior"
  const dados = [...Listar].sort((a, b) =>
    ordem === "menor" ? a.price - b.price : b.price - a.price
  )

  return (
    <>
      {dados.map((item, i) => (
        <div
          className="div-card product-card"
          id={`card-${9 + i}`}
          key={`${item.name}-${i}`}
        >
          <div className="div-card-imagem">
            <img src={item.src} alt="" className="tenis-imagem" />
          </div>
          <h2>
            <Link to={`/produtos?filter=${encodeURIComponent(item.name)}`}>
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
          <p className="off"> -{item.off}% OFF</p>
          <AddToCartButton
            product={{
              id: `extra-${item.name}-${i}`,
              name: item.name,
              image: item.src,
              price: item.price,
              discount: item.discount,
            }}
          />
        </div>
      ))}
    </>
  )
}

export default Card2
