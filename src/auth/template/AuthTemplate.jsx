import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";


export const AuthTemplate = ({children,title}) => {
    const {isAuth,setAuth} = useContext(AppContext);


    useEffect(() => {
        if(isAuth.errorMessage){
            alert(isAuth.errorMessage);
            setAuth({
                ...isAuth,
                errorMessage: null,
            })
        }
        
      }, [isAuth.errorMessage]);

  return (
    <main className="auth">
        <div className="auth__container">
            <h1 className="auth__title">{title}</h1>
            {children}
        </div>
    </main>
)
}
