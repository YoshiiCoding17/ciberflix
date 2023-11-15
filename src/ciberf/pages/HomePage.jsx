import { Hero,PeliculasSection} from '../components'
import { CiberFlixTemplate } from '../template'
import "../../styles/HomePage.css"


export const HomePage = () => {


  return (
    <CiberFlixTemplate>
      <Hero/>
      <PeliculasSection/>
    </CiberFlixTemplate>
  )
}
