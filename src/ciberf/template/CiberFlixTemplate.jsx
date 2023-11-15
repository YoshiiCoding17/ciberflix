import {  memo, useLayoutEffect } from 'react';
import { NavBar,Footer } from '../components'
import { peliculasMethods } from '../../helpers/peliculasMethods';

export const CiberFlixTemplate = memo(({children}) => {
  const {loadPeliculas} = peliculasMethods();
  
  useLayoutEffect(() => {
    loadPeliculas();
  }, [])

  return (
    <>
        <NavBar/>
            {children}
        <Footer/>
    </>
  )
})
