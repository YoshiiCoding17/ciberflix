import { Navigate, Route, Routes } from "react-router-dom"
import { AccountPage, HomePage, PeliculaPage, PeliculasPage } from "../pages"


export const CiberFlixRoutes = () => {
  
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="peliculas" element={<PeliculasPage/>} />
        <Route path="pelicula/:id" element={<PeliculaPage/>} />
        <Route path="cuenta" element={<AccountPage/>} />
        <Route path="/*" element={<Navigate to="/"/>} />
    </Routes>
  )
}
