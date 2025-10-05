import { useAuth } from '../../context/AuthContext'
import { useEffect, useState } from 'react'
import type { tipoFuncionario } from '../../types/tipoFuncionario'

import imagemFuncionario from '../../assets/images/colaborador.png'

function Home () {
  const { funcionario } = useAuth()
  const [funcionarioResgatado, setFuncionarioResgatado] =
    useState<tipoFuncionario>()

  useEffect(() => {
    const fetchFuncionario = async () => {
      try {
        const response = await fetch('http://localhost:3001/funcionarios')
        const dataFuncionario = await response.json()

        const funcionarioRegistrado = dataFuncionario.find(
          (f: tipoFuncionario) => f.email === funcionario?.email
        )
        setFuncionarioResgatado(funcionarioRegistrado)
      } catch {
        console.error('Erro ao buscar dados dos funcionários')
      }
    }

    fetchFuncionario()
  }, [])

  return (
    <main className='main'>
      <div className='flex justify-between w-full h-full'>
        <section className='w-1/5 my-auto'>
          <img
            src={imagemFuncionario}
            alt='Imagem do funcionário'
            className='size-64 object-cover rounded-xl shadow-lg'
          />
        </section>
        <section className='flex flex-col justify-between w-3/4 h-full gap-4'>
          <div className='flex flex-col justify-between h-full'>
            <div className='card-titulo my-auto'>
              <h1>Olá, {funcionarioResgatado?.nome}</h1>
              <p>Seja bem-vinda(o) ao seu painel do funcionário</p>
            </div>
            <div>
              <p className='font-kumbh-sans font-extrabold uppercase mb-2'>Mural de informações</p>
              <div className='h-0.25 w-full bg-texto-primario'></div>
            </div>
          </div>
          <div className='flex gap-2'>
            <div className='card-descritivo'>
              <button>Editar</button>
              <h2>Dados Pessoais</h2>
              <ul>
                <li>
                  <h3>Telefone:</h3>
                  <p>{funcionarioResgatado?.telefone}</p>
                </li>
                <li>
                  <h3>RF:</h3>
                  <p>{funcionarioResgatado?.rf}</p>
                </li>
                <li>
                  <h3>Email:</h3>
                  <p>{funcionarioResgatado?.email}</p>
                </li>
                <li>
                  <h3>CPF:</h3>
                  <p>{funcionarioResgatado?.cpf}</p>
                </li>
              </ul>
            </div>
            <div className='card-descritivo'>
              <button>Editar</button>
              <h2>Dados Profissionais</h2>
              <ul>
                <li>
                  <h3>Cargo:</h3>
                  <p>{funcionarioResgatado?.cargo}</p>
                </li>
                <li>
                  <h3>Setor:</h3>
                  <p>{funcionarioResgatado?.setor}</p>
                </li>
                <li>
                  <h3>Salário:</h3>
                  <p>R$ {funcionarioResgatado?.salario}</p>
                </li>
                <li>
                  <h3>Data de admissão:</h3>
                  <p>{funcionarioResgatado?.dataAdmissao}</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
    /*
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 p-8">
      
      <div className="flex justify-center md:w-1/3">
        <img
          src="/assets/profile.png"
          alt="Imagem do Funcionário"
          className="w-64 h-64 object-cover rounded-xl shadow-lg"
        />
        <button onClick={()=>logout()}>Sair</button>
      </div>

      <div className="flex flex-col gap-4 md:w-2/3">
        <h2 className="text-xl font-medium texto-secundario">
          Olá, <span className="texto-destaque">{funcionario.nome}</span> 👋
        </h2>
        <h1 className="text-3xl font-bold texto-primario">
          Bem-vindo ao seu painel
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          
          <div className="card-info">
            <h3 className="text-lg font-semibold texto-destaque mb-2">
              📌 Dados Pessoais
            </h3>
            <p className="texto-primario">
              <span className="rotulo-info">Telefone:</span> {funcionario.telefone}
            </p>
            <p className="texto-primario">
              <span className="rotulo-info">CPF:</span> {funcionario.cpf}
            </p>
          </div>

          <div className="card-info">
            <h3 className="text-lg font-semibold texto-destaque mb-2">
              💼 Dados Profissionais
            </h3>
            <p className="texto-primario"><span className="rotulo-info">Cargo:</span> {funcionario.cargo}</p>
            <p className="texto-primario"><span className="rotulo-info">Setor:</span> {funcionario.setor}</p>
            <p className="texto-primario"><span className="rotulo-info">Email:</span> {funcionario.email}</p>
            <p className="texto-primario"><span className="rotulo-info">Salário:</span> R$ {funcionario.salario}</p>
            <p className="texto-primario"><span className="rotulo-info">Admissão:</span> {funcionario.dataAdmissao}</p>
            <p className="texto-primario"><span className="rotulo-info">Senha:</span> {funcionario.senha}</p>
          </div>

        </div>
      </div>
    </section>
    */
  )
}

export default Home
