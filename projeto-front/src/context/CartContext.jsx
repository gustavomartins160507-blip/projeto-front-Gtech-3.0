import { createContext, useCallback, useContext, useMemo, useState } from "react"

const CartContext = createContext(null)

function itemKey(p) {
  return String(p.id ?? p.name ?? "")
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addToCart = useCallback((product) => {
    const key = itemKey(product)
    if (!key) return
    setItems((prev) => {
      const idx = prev.findIndex((i) => itemKey(i) === key)
      if (idx >= 0) {
        const next = [...prev]
        next[idx] = {
          ...next[idx],
          quantity: (next[idx].quantity || 1) + 1,
        }
        return next
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }, [])

  const value = useMemo(
    () => ({
      items,
      addToCart,
      cartCount: items.reduce((n, i) => n + (i.quantity || 1), 0),
    }),
    [items, addToCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error("useCart deve ser usado dentro de CartProvider")
  }
  return ctx
}
