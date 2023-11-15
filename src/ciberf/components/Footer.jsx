import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__contenido container'>
            <section className='footer__info'>
                <div className='footer__brand'>
                    <div className='logo'>
                        <img src="images/4-removebg-preview.png" alt="logo imagen" />
                    </div>
                    <div>
                        <Link className='footer__link'>Aviso Legal</Link>
                        <Link className='footer__link'>DMCA</Link>
                        <Link className='footer__link'>Ciberflix</Link>
                    </div>
                </div>
                <div className='footer__social'>
                    <a href=""><i className="fa-brands fa-twitter"></i></a>
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                </div>
            </section>
            <p className='footer__copyright'>© 2023 Ciberflix Peliculas Online, Todos los derechos reservados. Hay 2336 películas disponibles</p>
        </div>
    </div>
  )
}
