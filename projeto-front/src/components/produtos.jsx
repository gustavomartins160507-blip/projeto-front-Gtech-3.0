import "../app.css"
import Gallery from "./galerry"
import { useSearchParams } from "react-router-dom"
const Produtos = () => {
        const [SearchParams] = useSearchParams()
        const filter = SearchParams.get("filter")
    return (
        <>
        {
                filter ? (
                        <Gallery nome={filter}/>
                ):(
                        <Gallery/>
                )
        }
        </>
    )
}
export default Produtos