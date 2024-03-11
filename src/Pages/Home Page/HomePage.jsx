import './HomePage.css'

function HomePage() {
    return(
        <>
            <div className="TitleRegion">
                <h1 className="TitleText">
                    ¡Bienvenido!
                </h1>
            </div>
            <div className="Content1">
                <h2 className='SubTitle1'>
                    Introducción
                </h2>
                <div className='SectionContainer1'>
                    <div className='FirstContentBody'>
                        <button>
                            Ver clubes
                        </button>
                        <p>
                            World Link Center es un sitio donde podrás conectar con gamers de todas partes del mundo.
                            Aquí te encontrarás grandes grupos de usuarios dedicados a todo tipo de juegos y actividades:
                            desde compartir obras de arte hechas en Minecraft hasta duras competencias en League of
                            Legends. ¡Únete!
                        </p>
                    </div>
                </div>
            </div>
            <div className="Content2">
                <h2 className='SubTitle2'>
                    Sé tu mismo
                </h2>
                <div className='SecondContentBody'>
                    <button>
                        Cambiar Perfil
                    </button>
                    <p>
                        ¡Destácate en la personalización de tu perfil! Díle al mundo quien eres y qué es lo
                        que amas de jugar videojuegos. Tus intereses te podrán conectar con jugadores en
                        todo el mundo.
                    </p>
                </div>
            </div>
        </>
    )
}

export default HomePage