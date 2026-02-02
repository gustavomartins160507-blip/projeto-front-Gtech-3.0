import Logo from "../imagens/Logo.png"
import "../App.css"
import Informations from "./informations"
const Footer = () => {
  const info = {
    institucional:[
      {
        text: 'Sobre Drip Store',
        link: '/sobre' 
      }
    ],
    blog: [
      {
        text: 'veja aqui nosso blog',
         link: '/blog'
      }
    ],
    contato:[
      {
        text:'fale conosco',
        link:'/contato'
      }
    ]
  }
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <p id="descrição">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-cols">
            <div className="footer-col">
              <a href="">
                <Informations
                title='LOJA'
                informations={info.institucional}
                />
              </a>
            </div>
            <div className="footer-col"><a href="">
              <Informations
              title='BLOG'
              informations={info.blog}
              />
            </a></div>
            <div className="footer-col"><a href="">
              <Informations
              title='CONTATO'
              informations={info.contato}
              />
            </a></div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>@2024 digital store</p>
      </div>
    </footer>
  )
}

export default Footer
