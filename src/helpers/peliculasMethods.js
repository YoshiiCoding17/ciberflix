import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const peliculasMethods = () => {

    const {pelicula,actualizarPeliculas} = useContext(AppContext);

    const loadPeliculas = async() =>{
        try{
            const resp = await fetch("http://localhost:8080/api/v1/pelicula");
            const res = await resp.json();
            actualizarPeliculas(res);
        }catch(error){
            console.log(error);
        }
    }

    const getPeliculasRankeadas = () =>{
        const { peliculas } = pelicula;
        if (peliculas.length > 0) {
            let pelisRankeadas = [...peliculas];
            pelisRankeadas = pelisRankeadas.sort((a, b) => b.votos - a.votos).slice(0, 5);
            return pelisRankeadas;
        }
        return [];
    }

    const getPeliculasPorCategoría = () =>{
        const {peliculas} = pelicula;

    }
    return{
        loadPeliculas,
        getPeliculasRankeadas,
        pelicula,
    }
}
