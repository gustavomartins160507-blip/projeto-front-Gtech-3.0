import "../app.css"
import { useParams } from "react-router-dom"
const Propspage = () =>{
    const {id} = useParams()
    const listaviewpage =[{
        id:1,
        name:'Sapato social masculino',
        image:"src/imagens/tenis1.jpeg",
        price:200,
        discount:149.9,
        off: "25%"
    },
    {   id:2,
        name:'Chuteira New balance',
        image:"src/imagens/tenis2.jpeg",
        price:350,
        discount:279.9,
        off: "20%"
    },
    {   id:3,
        name:'Tênis Esportivo corrida',
        image:"src/imagens/tenis3.jpeg",
        price:450,
        discount:349.9,
        off: "22%"
    },
    {   id:4,
        name:'Tênis nike esportivo',
        image:"src/imagens/tenis4.jpeg",
        price:280,
        discount:199.9,
        off: "29%"
    },
    {   id:5,
        name:'Sapatênis masculino',
        image:"src/imagens/tenis5.jpeg",
        price:520,
        discount:399.9,
        off: "23%"
    },
    {   id:6,
        name:'Converse All start Off white',
        image:"src/imagens/tenis6.jpeg",
        price:380,
        discount:299.9,
        off: "21%"
    },
    {   id:7,
        name:'Nike air max',
        image:"src/imagens/tenis7.jpeg",
        price:420,
        discount:329.9,
        off: "21%"
    },
    {   id:8,
        image:"src/imagens/tenis8.jpeg",
        price:310,
        discount:249.9,
        off: "19%",
        name: 'SupeRep GO Nike',
        src: 'src/imagens/tenis9.jpeg',
        price: 780,
        off: 25,
        discount: 585
      },
      {id:9,
        name: 'nike air force preto',
        src: 'src/imagens/tenis10.jpeg',
        price: 650,
        off: 30,
        discount: 455
      },
      { id:10,
        name: 'Karhu sneaker',
        src: 'src/imagens/tenis11.jpeg',
        price: 899,
        off: 15,
        discount: 764
      },
      { id:11,
        name: 'Nike Air jordan vermelho',
        src: 'src/imagens/tenis12.jpeg',
        price: 720,
        off: 40,
        discount: 432
      },
      { id:12,
        name: 'nike air force preto',
        src: 'src/imagens/tenis13.jpeg',
        price: 540,
        off: 20,
        discount: 432
      },
      { id:13,
        name: 'nike air force preto',
        src: 'src/imagens/tenis14.jpeg',
        price: 810,
        off: 35,
        discount: 526
      }
    ]
    const produto = listaviewpage.find((item) => item.id === Number(id))
    if(!produto){
        return <h2>Produto nao encontrado</h2>
    }
    return(
        <ul className="ul-container">
            <li> 
                Produto: {produto.name}
            </li>
            <li>
                <del>{produto.price} R$</del>
            </li>
            <li>
                {produto.discount}R$
            </li>
            <li>
                <button id="Button-comprar">Comprar</button>
            </li>
        </ul>
    )
}
export default Propspage