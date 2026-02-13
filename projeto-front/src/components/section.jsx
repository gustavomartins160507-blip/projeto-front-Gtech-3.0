import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "../app.css"
import Card from "./produtoscard"
const Section= ({children,title,link,titlealighn='left'}) =>{
    const navigate = useNavigate()
    return(
        <>
        <section className="section">
            <div className="header-section" style={{textAlign:titlealighn}}>
                <h3 id="title-section">{title}</h3>
                {link && (
                    <div style={{ width: '100%', textAlign: 'center', marginBottom:'40px',}}>
                        <button onClick={()=> navigate("/produtos")} id="section-button">
                            <Link to={link.href} className="section_link">
                                {link.text}
                            </Link>
                        </button>
                    </div>
                )}
            </div>
            <div className="section-content">
                <Card name='Sapato social masculino' name2='Chuteira New balance' name3='Tênis Esportivo corrida' name4='Tênis nike esportivo' name5='Nike air jordan 1' name6='Sapatênis masculino' name7='Converse All start Off white ' name8='Nike air max' />
            </div>
        </section>
        </>
    )
}
export default Section