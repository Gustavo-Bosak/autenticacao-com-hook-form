import React, { createContext, useContext, useState } from 'react'
import type { tipoContext } from '../types/tipoContext'
import type { tipoFuncionario } from '../types/tipoFuncionario'

const AuthContext = createContext<tipoContext | undefined>(undefined)

export function AuthProvider ({ children }: { children: React.ReactNode }) {
    const objFuncionario: tipoFuncionario = {
    rf: '123456',
    nome: 'Felipe Ferrete',
    email: 'felipe@email.com',
    senha: '**',
    cargo: 'Desenvolvedor Backend',
    setor: 'TI',
    cpf: '123.456.789-00',
    telefone: '(11) 98765-4321',
    salario: 4400,
    dataAdmissao: '01/03/2024'
  }

  const [funcionario, setFuncionario] = useState<tipoFuncionario | null>(objFuncionario)
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