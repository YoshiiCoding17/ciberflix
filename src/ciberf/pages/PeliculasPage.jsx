import { CiberFlixTemplate } from "../template"
import "../../styles/PeliculaPage.css"

export const PeliculasPage = () => {
  return (
    <CiberFlixTemplate>
        <main className="pelis">
          <section className="container pelis__container">
          <h1 className="peliculas__titulo">Películas</h1>
            <div className="peliculas">

            </div>
          </section>
        </main>
    </CiberFlixTemplate>
    
  )
}
