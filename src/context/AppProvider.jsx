import {useMemo, useState } from "react"
import { AppContext } from "./AppContext"


export const AppProvider = ({children}) => {
    const [isAuth,setAuth] = useState({
      status:"not-logged",
      user:{

      },
      errorMessage: null,
    });

    const [pelicula, setPelicula] = useState({
      peliculas:[],
      active:{

      },
    });
    const [carritoCompras, setCarritoCompras] = useState([]);


    const actualizarPeliculas = (peliculasNuevas) =>{

        setPelicula({
          ...pelicula,
          peliculas: peliculasNuevas, 
        })

        return peliculasNuevas;
    }

    return (
      <AppContext.Provider value={{isAuth,setAuth,pelicula,actualizarPeliculas}}>
        {children}
      </AppContext.Provider>
    )
  }