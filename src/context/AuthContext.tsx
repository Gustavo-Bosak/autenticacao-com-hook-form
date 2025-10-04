import React, { createContext, useContext, useEffect, useState } from 'react'
import type { tipoContext } from '../types/tipoContext'
import type { tipoFuncionario } from '../types/tipoFuncionario'

const AuthContext = createContext<tipoContext | undefined>(undefined)

export function AuthProvider ({ children }: { children: React.ReactNode }) {
  const [funcionario, setFuncionario] = useState<tipoFuncionario | null>(null)
  useEffect(() => {
    const funcionarioSalvo = localStorage.getItem('funcionario')
    if (funcionarioSalvo) {
      setFuncionario(JSON.parse(funcionarioSalvo))
    }
  }, [])

  const login = (data: tipoFuncionario) => {
    setFuncionario(data)
    localStorage.setItem('funcionario', JSON.stringify(data))
  }

  const logout = () => {
    setFuncionario(null)
    localStorage.removeItem('funcionario')
  }

  return (
    <AuthContext.Provider value={{ funcionario, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): tipoContext => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth precisa estar dentro de um AuthProvider')
  }

  return context
}
