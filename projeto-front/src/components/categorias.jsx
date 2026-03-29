import { Link } from "react-router-dom"

const CATEGORIAS = [
  { nome: "Corrida", filtro: "tenis esportivo corrida" },
  { nome: "Casual", filtro: "nike air max" },
  { nome: "Futebol", filtro: "chuteira new balance" },
  { nome: "Social", filtro: "sapato social masculino" },
]

const Categorias = () => {
  return (
    <section className="simple-page">
      <h1 className="simple-page-title">Categorias</h1>
      <p className="simple-page-subtitle">Escolha uma categoria para ver produtos parecidos.</p>
      <div className="category-grid">
        {CATEGORIAS.map((categoria) => (
          <Link
            key={categoria.nome}
            to={`/produtos?filter=${encodeURIComponent(categoria.filtro)}`}
            className="category-card"
          >
            {categoria.nome}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Categorias