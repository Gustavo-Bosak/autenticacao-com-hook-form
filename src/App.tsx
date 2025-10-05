import { Outlet, useLocation } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {
  const location = useLocation()
  const acessoPrivado = location.pathname != '/login' && location.pathname != '/cadastro';

  return (
    <div>
      {acessoPrivado && <Header/>}
      <Outlet/>
      {acessoPrivado && <Footer/>}
    </div>
  )
}

export default App