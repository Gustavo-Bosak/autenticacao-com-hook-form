import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error/index.tsx'
import Login from './routes/Login/index.tsx'
import Cadastro from './routes/Cadastro/index.tsx'
import Home from './routes/Home/index.tsx'

const router = createBrowserRouter([{
  element: <App/>,
  errorElement: <Error/>,
  path: '/',
  children: [
    {
      element: <Login/>,
      path: ''
    },
    {
      element: <Cadastro/>,
      path: '/cadastro'
    },
    {
      element: <Home/>,
      path: '/home'
    }
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
