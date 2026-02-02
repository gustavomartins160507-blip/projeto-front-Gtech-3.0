import {Link} from "react-router-dom"
const Informations = ({title,informations}) =>{
    return(
        <>
        <div className="informations">
            <h3>{title}</h3>
        </div>
        <ul>
            {informations.map((info,index) =>(
                <li key={index}>
                    <Link to={info.index}/>
                    {info.text}
                </li>
            ))}
        </ul>
        </>
    )
}
export default Informations