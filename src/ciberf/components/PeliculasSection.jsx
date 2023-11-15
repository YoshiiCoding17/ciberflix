import { useState } from "react"
import { Pelicula } from "./Pelicula";


export const PeliculasSection = () => {
    const [currentTab, setcurrentTab] = useState("ultimas");
    
    const onTab = ({target:{dataset}}) =>{
        setcurrentTab(dataset.name);
    }
  return (
    <main className="peliculas">
        <div className="peliculas__contenedor container">
            <section className="peliculas__pelis">
                <div className="peliculas__header">
                    <h2 className="peliculas__titulo">Películas Online</h2>
                    <div className="peliculas__control">
                        <a className={currentTab === "ultimas" ? "peliculas__control-link peliculas__control-link--active" : "peliculas__control-link"  } data-name="ultimas" onClick={onTab}>Últimas</a>
                        <a className={currentTab === "estrenos" ? "peliculas__control-link peliculas__control-link--active" : "peliculas__control-link"  }  data-name="estrenos" onClick={onTab}>Estrenos</a>
                        <a className={currentTab === "vistos" ? "peliculas__control-link peliculas__control-link--active" : "peliculas__control-link"  } data-name="vistos" onClick={onTab}> Mas vistos</a>
                    </div>
                </div>
                <div className="peliculas__contenido">
                    <Pelicula/>
                </div>
            </section>
            <aside>
            
            </aside>
        </div>
        
    </main>
  )
}
