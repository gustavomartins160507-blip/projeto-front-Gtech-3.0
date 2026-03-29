import { useMemo } from "react"
import { useCart } from "../context/CartContext"

const Pedidos = () => {
  const { items } = useCart()

  const total = useMemo(
    () => items.reduce((acc, item) => acc + (item.discount || item.price || 0) * (item.quantity || 1), 0),
    [items]
  )

  return (
    <section className="simple-page">
      <h1 className="simple-page-title">Meus pedidos</h1>
      {items.length === 0 ? (
        <p className="simple-page-subtitle">Seu carrinho ainda esta vazio.</p>
      ) : (
        <>
          <div className="orders-list">
            {items.map((item) => (
              <article className="order-card" key={String(item.id ?? item.name)}>
                <img src={item.image} alt={item.name} className="order-image" />
                <div>
                  <h3>{item.name}</h3>
                  <p>Quantidade: {item.quantity || 1}</p>
                  <p>Preco: R$ {(item.discount || item.price || 0).toFixed(2)}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="orders-total">Total: R$ {total.toFixed(2)}</p>
        </>
      )}
    </section>
  )
}

export default Pedidos