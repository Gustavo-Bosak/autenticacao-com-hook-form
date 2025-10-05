import { Outlet, useLocation } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { useEffect } from "react";

function App() {
  const location = useLocation()
  const acessoPrivado = location.pathname != '/login' && location.pathname != '/cadastro';

  useEffect(()=>{
    switch (location.pathname) {
      case '/':
        document.title = `FIAP Funcionários - Home`
        break
      case '/login':
        document.title = `FIAP Funcionários - Login`
        break
      case '/cadastro':
        document.title = `FIAP Funcionários - Criar conta`
        break
      default:
        document.title = `FIAP Funcionários`
    }

  },[location.pathname])

  return (
    <div className={`flex flex-col items-center min-h-[100vh]`}>
      {acessoPrivado && <Header/>}
      <Outlet/>
      {acessoPrivado && <Footer/>}
    </div>
  )
}

export default App