import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import {AppContext} from '../../context/AppContext';
import { usuarioMethods } from "../../helpers/usuarioMethods";


export const NavBar = () => {
  const [active, setActive] = useState(false);

  const {isAuth:{user:{nombre}}} = useContext(AppContext);

  const {cerrarSesion} = usuarioMethods();

  const onLogout = () =>{
    cerrarSesion();
  }
  const onActive = ({isActive}) =>{
    return isActive ? "header__link header__link--active" : "header__link";
  }
  return ( 
    <header className="header">
        <div className="header__container container">
        <div className="logo">
          <img src="images/4-removebg-preview.png" alt="logo imagen" />
        </div>
        <div className={`navegacion ${active ? "active" : ""}`}>
          <section className="header__primero">
              <nav className="links">
                <NavLink className={onActive} to="/" >Inicio</NavLink>
                <NavLink className={onActive} to="/peliculas">Películas</NavLink> 
              </nav>
          </section>

          <section className="header__segundo">
              <div className="header__auth">
                <input className="header__search" type="search" placeholder="Buscador.." />
                <NavLink className={onActive} to="/cuenta" >{nombre}</NavLink>
                <button className="header__link header__logout" onClick={onLogout}>Cerrar Sesión</button> 
              </div>
          </section>
          <i className="fa-solid fa-x" onClick={() => setActive(false)}></i>
        </div>
        <i className="fa-solid fa-bars" onClick={() => setActive(true)}></i>
        </div>
    </header>
  )
}
