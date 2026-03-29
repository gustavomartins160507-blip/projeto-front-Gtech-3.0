import Section from "./section"
import Footer from "./footer"
function Home(){
    return(
        <>
        <Section title={'Produtos em destaque'}link={{
            text:'Mostrar mais',
            href:'/produtos'
        }}/>
        <Footer />
        </>
    )
}
export default Home