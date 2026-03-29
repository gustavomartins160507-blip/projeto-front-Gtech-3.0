import { useState } from "react"
import { useCart } from "../context/CartContext"

export default function AddToCartButton({ product, className = "" }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)
  const handleClick = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <button
      type="button"
      className={`btn-add-cart ${className}`.trim()}
      onClick={handleClick}
    >
      <i className="bi bi-cart-plus" aria-hidden="true" />
      <span>{added ? "Adicionado!" : "Adicionar ao carrinho"}</span>
    </button>
  )
}
