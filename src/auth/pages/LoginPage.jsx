import { Link } from "react-router-dom"
import "../../styles/Auth.css"
import { AuthTemplate } from "../template/AuthTemplate"
import { useForm } from "../../hooks/useForm";
import { usuarioMethods } from "../../helpers/usuarioMethods";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";

export const LoginPage = () => {

  const { loginUsuario } = usuarioMethods();

  const {correo,password,onChangeForm,form} = useForm({
      correo: "",
      password: "",
  });

  
  
  const onLogin = (e) =>{
    e.preventDefault();

    if(correo.trim() == "" || password.trim() == ""){
      alert("Todos los campos deben estar llenos");
      return;
    }

    loginUsuario(form);
  }

  return (
    <AuthTemplate title="Inicia sesión">
      <form action="" className="form" onSubmit={onLogin}>
        <div className="form__field">
          <label htmlFor="correo" className="form__label">Correo</label>
          <input id="correo" className="form__input" name="correo" type="text" value={correo} onChange={onChangeForm}/>
        </div>
        <div className="form__field">
          <label htmlFor="password" className="form__label">Contraseña</label>
          <input id="password" className="form__input" name="password" type="password" value={password} onChange={onChangeForm}/>
        </div>
        <input type="submit" value="Enviar" className="form__submit"/>
        <p>¿No tiene una cuenta? <Link to="/auth/register">Regístrese</Link></p>
      </form>
    </AuthTemplate>
  )
}
