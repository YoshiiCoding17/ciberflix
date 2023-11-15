import { useState } from "react";
import { Link } from "react-router-dom";
import { peliculasMethods } from "../../helpers/peliculasMethods";

export const Hero = () => {
  const [actualPeli, setActualPeli] = useState(0);
  const {getPeliculasRankeadas} = peliculasMethods();

  const peliculasRankeadas = getPeliculasRankeadas();

  const siguientePeli = () =>{
    setActualPeli(actualPeli >= 4 ? 0 : actualPeli + 1)
  }
  const anteriorPeli = () =>{
    setActualPeli(actualPeli <= 0 ? 4 : actualPeli - 1)
  }
  
  return (
    <div className="hero">
      <picture>
        {/* <source srcset=".avif" type="image/avif"/>
              <source srcset=".webp" type="image/webp"/> */}
        <img className="hero__imagen" loading="lazy" src="images/rapidos y furiosos.jpg" alt="imagen hero" />
      </picture>
      <div className="hero__contenido container">
        {
          (peliculasRankeadas.length > 0) &&
          <>
            <h1 className="hero__titulo">{peliculasRankeadas[actualPeli].nombre}</h1>
            <p className="hero__fecha">{peliculasRankeadas[actualPeli].anio}</p>
            <p className="hero__sipnosis">{peliculasRankeadas[actualPeli].votos}</p>
            <p>
              <Link className="hero__link" to={`/pelicula/${peliculasRankeadas[actualPeli].id}`}>▷ Ver Película</Link>
            </p>
          </>
        }
        <div className="hero__buttons">
          <p className="hero__button" onClick={anteriorPeli}>Anterior</p>
          <p className="hero__button" onClick={siguientePeli}>Siguiente</p>
        </div>

      </div>
    </div>
  )
}
