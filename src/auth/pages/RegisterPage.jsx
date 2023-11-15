import { Link,useNavigate } from "react-router-dom"
import "../../styles/Auth.css"
import { AuthTemplate } from "../template/AuthTemplate"
import { useForm } from "../../hooks/useForm"
import { usuarioMethods } from "../../helpers/usuarioMethods"
import { AppContext } from "../../context/AppContext"
import { useContext } from "react"

export const RegisterPage = () => {


  const {isAuth} = useContext(AppContext);
  const {registrarUsuario} = usuarioMethods();
  
  const {nombre,correo,password,password2,onChangeForm,form} = useForm({
      nombre: "",
      correo: "",
      rol: 1,
      password: "",
      password2:"",
  });

  const navigate = useNavigate();

  const onRegister = (e) =>{
    e.preventDefault();
    if([nombre.trim(),correo.trim(),password.trim(),password2.trim()].some(c => c == "")){
      alert("Todos los campos deben estar llenos");
      return;
    }
    if(password.trim() !== password2.trim()){
      alert("Las contraseñas no coinciden");
      return;
    }
    
    registrarUsuario(form);
    
    return navigate("/auth/login");
  }
  
  return (
    <AuthTemplate title="Registre una cuenta">
      <form action="" className="form" onSubmit={onRegister}>
      <div className="form__field">
          <label htmlFor="usuario" className="form__label">Usuario</label>
          <input id="usuario" className="form__input" name="nombre"  type="text" value={nombre} onChange={onChangeForm}/>
        </div>
        <div className="form__field">
          <label htmlFor="correo" className="form__label">Correo</label>
          <input id="correo" className="form__input" name="correo" type="email" value={correo} onChange={onChangeForm} />
        </div>
        <div className="form__field">
          <label htmlFor="password" className="form__label">Contraseña</label>
          <input id="password" className="form__input" name="password" type="password" value={password} onChange={onChangeForm} />
        </div>
        <div className="form__field">
          <label htmlFor="password2" className="form__label">Repita la contraseña</label>
          <input id="password2" className="form__input" name="password2" type="password" value={password2} onChange={onChangeForm} />
        </div>
        <input type="submit" value="Enviar" className="form__submit"/>
        <p>¿Ya tiene una cuenta? <Link to="/auth/">Inicie sesión</Link></p>
      </form>
    </AuthTemplate>
  )
}
