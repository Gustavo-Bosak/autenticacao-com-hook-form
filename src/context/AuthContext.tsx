import React, { createContext, useContext, useState } from 'react'
import type { tipoContext } from '../types/tipoContext'
import type { tipoFuncionario } from '../types/tipoFuncionario'

const AuthContext = createContext<tipoContext | undefined>(undefined)

export function AuthProvider ({ children }: { children: React.ReactNode }) {
  const [funcionario, setFuncionario] = useState<tipoFuncionario | null>(null)
    const login = () => {
        setFuncionario(funcionario)
    }

    const logout = () => {
        setFuncionario(null)
    }

    return (
        <AuthContext.Provider value={{ funcionario, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): tipoContext => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth precisa estar dentro de um AuthProvider');
    }

    return context;
}