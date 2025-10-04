import { useForm, type SubmitHandler } from 'react-hook-form'
import type { tipoFuncionario } from '../../types/tipoFuncionario'
import { useAuth } from '../../context/AuthContext'
import { useEffect, useState } from 'react'

function Cadastro () {
  const { login } = useAuth()
  const [setores, setSetores] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    setError
    // formState: { errors }
  } = useForm<tipoFuncionario>()

  useEffect(() => {
    const fetchSetores = async () => {
      try {
        const responseSetor = await fetch('/')
        const dataSetor = await responseSetor.json()
        setSetores(dataSetor)
      } catch {
        console.error('Erro ao buscar dados de setores')
      }
    }
    
    fetchSetores()
  }, [])

  const onSubmit: SubmitHandler<tipoFuncionario> = async data => {
    try {
      const responseFuncionario = await fetch('/')
      const dataFuncionario = await responseFuncionario.json()

      const rfExistente = dataFuncionario.some(
        (f: tipoFuncionario) => f.rf === data.rf
      )
      const emailExistente = dataFuncionario.some(
        (f: tipoFuncionario) => f.email === data.email
      )
      const cpfExistente = dataFuncionario.some(
        (f: tipoFuncionario) => f.cpf === data.cpf
      )

      if (rfExistente)
        setError('rf', { type: 'manual', message: 'RF já cadastrado.' })
      if (emailExistente)
        setError('email', { type: 'manual', message: 'Email já cadastrado.' })
      if (cpfExistente)
        setError('cpf', { type: 'manual', message: 'CPF já cadastrado.' })

      if (!rfExistente && !emailExistente && !cpfExistente) {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })

        login(data)
      }
    } catch {
      console.error('Erro ao buscar dados de funcionários')
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <div>
            <div>
              <label htmlFor='idNome'>Nome Completo</label>
              <input
                type='text'
                id='idNome'
                {...register('nome', { required: true })}
              />
              {/* <p>{errors.nome?.type === 'erro1' && 'Mensagem do primeiro erro'}</p> */}
            </div>
            <div>
              <label htmlFor='idRf'>RF (Registro do Funcionário)</label>
              <input
                type='text'
                id='idRf'
                {...register('rf', { required: true })}
              />
              {/* <p>{errors.rf?.type === 'erro1' && 'Mensagem do primeiro erro'}</p> */}
            </div>
          </div>
          <div>
            <div>
              <label htmlFor='idCargo'>Cargo</label>
              <input
                type='text'
                id='idCargo'
                {...register('cargo', { required: true })}
              />
              {/* <p>{errors.cargo?.type === 'erro1' && 'Mensagem do primeiro erro'}</p> */}
            </div>
            <div>
              <label htmlFor='idSetor'>Setor</label>

              <select id='idSetor' required {...register('setor')}>
                <option value='' disabled>
                  Selecione um setor
                </option>

                {setores.map(setor => (
                  <option key={setor} value={setor}>
                    {setor}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor='idCpf'>CPF</label>
              <input
                type='text'
                id='idCpf'
                {...register('cpf', { required: true })}
              />
              {/* <p>{errors.cpf?.type === 'erro1' && 'Mensagem do primeiro erro'}</p> */}
            </div>
            <div>
              <label htmlFor='idTelefone'>Telefone</label>
              <input
                type='tel'
                id='idTelefone'
                {...register('telefone', { required: true })}
              />
              {/* <p>{errors.telefone?.type === 'erro1' && 'Mensagem do primeiro erro'}</p> */}
            </div>
          </div>
          <div>
            <div>
              <label htmlFor='idEmail'>Email Corporativo</label>
              <input
                type='email'
                id='idEmail'
                {...register('email', { required: true })}
              />
              {/* <p>{errors.email?.type === 'erro1' && 'Mensagem do primeiro erro'}</p> */}
            </div>
            <div>
              <label htmlFor='idConfirmarEmail'>Confirmar Email</label>
              <input type='email' id='idConfirmarEmail' required />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor='idSenha'>Senha</label>
              <input
                type='password'
                id='idSenha'
                {...register('senha', { required: true })}
              />
              {/* <p>{errors.senha?.type === 'erro1' && 'Mensagem do primeiro erro'}</p> */}
            </div>
            <div>
              <label htmlFor='idSenhaConfirmada'>
                Confirmar Senha{' '}
                <span className='text-red-500 font-bold'>*</span>
              </label>
              <input type='password' id='idSenhaConfirmada' required />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor='idSalario'>Salário</label>
              <input
                type='number'
                id='idSalario'
                {...register('salario', { required: true })}
              />
              {/* <p>{errors.salario?.type === 'erro1' && 'Mensagem do primeiro erro'}</p> */}
            </div>
            <div>
              <label htmlFor='idDataAdmissao'>
                Data de Admissão{' '}
                <span className='text-red-500 font-bold'>*</span>
              </label>
              <input
                type='date'
                id='idDataAdmissao'
                {...register('dataAdmissao', { required: true })}
              />
              {/* <p>{errors.dataAdmissao?.type === 'erro1' && 'Mensagem do primeiro erro'}</p> */}
            </div>
          </div>
        </fieldset>
        <button type='submit'>Cadastrar Colaborador</button>
      </form>
    </main>
  )
}

export default Cadastro
