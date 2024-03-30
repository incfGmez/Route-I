export const Home = ()=>{
    return(
        <div className="container-home">
            <section className="saludo-home">
                <h1>Bienvenido a <span>Happy Cake</span></h1>
                <p>El lugar de los pasteles felices!</p>
            </section>
            {/*Icono o Imagen de una torta*/}
            <img src="/src/assets/img/Wedding_Cakes_Clipart_Transparent_PNG_Hd__Wedding_Cake_Icon_Design_Illustration__Wedding_Icons__Cake_Icons__Wedding_Cake_PNG_Image_For_Free_Download-removebg-preview.png" alt="Torta" />
        </div>
    )
}