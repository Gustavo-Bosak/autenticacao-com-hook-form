import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error/index.tsx'
import Login from './routes/Login/index.tsx'
import Cadastro from './routes/Cadastro/index.tsx'
import Home from './routes/Home/index.tsx'
import RotaPrivada from './context/RotaPrivada.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Error />,
    path: '/',
    children: [
      {
        element:
          <RotaPrivada privado={false}>
            <Login />
          </RotaPrivada>,
        path: ''
      },
      {
        element:
          <RotaPrivada privado={false}>
            <Cadastro />
          </RotaPrivada>,
        path: '/cadastro'
      },
      {
        element:
          <RotaPrivada privado>
            <Home />
          </RotaPrivada>,
        path: '/home'
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
