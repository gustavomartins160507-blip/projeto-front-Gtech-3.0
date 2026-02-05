import Section from "./section"
function Home(){
    return(
        <>
        <Section title={'Produtos em destaque'}link={{
            text:'Mostrar mais',
            href:'/produtos'
        }}/>
        </>
    )
}
export default Home