import { useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import {CiberFlixRoutes} from "../ciberf/routes/CiberFlixRoutes";
import { useEffect } from "react";
import { usuarioMethods } from "../helpers/usuarioMethods";
import { peliculasMethods } from "../helpers/peliculasMethods";

export const AppRouter = () => {
    const {isAuth,setAuth} = useContext(AppContext);

    const {cerrarSesion} = usuarioMethods();

    useEffect(() => {
      checkLocalStorage();
    },[])
    

    const checkLocalStorage = () => {
  
      const user = JSON.parse(localStorage.getItem("user"));
      if(!user){
          return cerrarSesion();
      }
      setAuth({
          ...isAuth,
          status:"logged",
          user:user,
      })
    }

  return (
    <Routes>
        {
          (isAuth.status === "logged")
          ? 
          (
            <>
              <Route path="/*" element={<CiberFlixRoutes/>}/>
            </>
          )
          :
          (
            <>
              <Route path="/auth/*" element={<AuthRoutes />}/>  
            </>
          )

        }
        <Route path="/*" element={<Navigate to="/auth/login"/>}/>
        
    </Routes>
  )
}
