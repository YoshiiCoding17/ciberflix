
import { AppProvider } from "./context/AppProvider"
import { AppRouter } from "./router/AppRouter"
import "./styles/index.css"
import "./styles/normalize.css"


function App() {

  return (
    <AppProvider>
      <AppRouter/>
    </AppProvider>
  )
}

export default App
