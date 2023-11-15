import { useContext } from "react";
import { AppContext } from "../context/AppContext";






export const usuarioMethods = () => {

    const {isAuth,setAuth} = useContext(AppContext);

    const registrarUsuario = async(nuevoUsuario) =>{
        delete nuevoUsuario.password2
        console.log(JSON.stringify(nuevoUsuario));
        try{
            const resp = await fetch("http://localhost:8080/api/v1/usuario",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(nuevoUsuario),
            });
            const res = await resp.json();

            
        }catch(error){
            setAuth({
                ...isAuth,
                errorMessage: "Error al procesar la solicitud",
            })
        }
    }
    
    const loginUsuario = async(objUsuario) =>{
        try{
            const resp = await fetch("http://localhost:8080/api/v1/usuario/login",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(objUsuario),
            });
            const res = await resp.json();
            if(res.msj){
                setAuth({
                    ...isAuth,
                    errorMessage: res.msj,
                })
                return;
            }
            setAuth({
                    ...isAuth,
                    status:"logged",
                    user: res,
            })

            localStorage.setItem("user",JSON.stringify(res));
        }catch(error){
            setAuth({
            ...isAuth,
                errorMessage: "Error al procesar la solicitud",
            });
        }
    }

    const cerrarSesion = () =>{
        localStorage.clear();
        setAuth({
            status:"not-logged",
            user:{
                
            },
            errorMessage: null,
        })
    }
    
    return{
        registrarUsuario,
        loginUsuario,
        cerrarSesion,
    }
}




