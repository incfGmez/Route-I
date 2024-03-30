export const Contacto = ()=>{
    return(
        <div className="contacto">
            <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
            <section className="container-formulario">
                <form action="#" className="form">
                    <p>Correo</p>
                    <input type="text" placeholder="name@example.com" className="input-correo"/>
                    <p>Descripcion</p>
                    <input type="text" className="input-descripcion"/>
                </form>
                <button className="btn-enviar">Enviar</button>
            </section>
        </div>
    )
}