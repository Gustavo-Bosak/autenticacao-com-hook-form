import { useForm, type SubmitHandler } from 'react-hook-form'
import type { tipoFuncionario } from '../../types/tipoFuncionario'
import { useAuth } from '../../context/AuthContext'
import { useEffect, useState } from 'react'
import type { tipoSetor } from '../../types/tipoSetor'
import MensagemErro from '../../components/MensagemErro/MensagemErro'

function Cadastro () {
  const { login } = useAuth()
  const [setores, setSetores] = useState<tipoSetor[]>([])

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors }
  } = useForm<tipoFuncionario>()

  const watchEmail = watch('email')
  const watchSenha = watch('senha')

  useEffect(() => {
    const fetchSetores = async () => {
      try {
        const responseSetor = await fetch('http://localhost:3001/setores')
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
      const responseFuncionario = await fetch(
        'http://localhost:3001/funcionarios'
      )
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
        await fetch('http://localhost:3001/funcionarios', {
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
                {...register('nome', {
                  required: 'Campo obrigatório',
                  pattern: {
                    value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,}$/,
                    message:
                      'Informe apenas letras e no mínimo 3 caracteres'
                  }
                })}
              />
              <MensagemErro error={errors.nome} />
            </div>
            <div>
              <label htmlFor='idRf'>RF (Registro do Funcionário)</label>
              <input
                type='text'
                id='idRf'
                {...register('rf', {
                  required: 'Campo obrigatório',
                  pattern: {
                    value: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9]+$/,
                    message: 'RF não reconhecido'
                  }
                })}
              />
              <MensagemErro error={errors.rf} />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor='idCargo'>Cargo</label>
              <input
                type='text'
                id='idCargo'
                {...register('cargo', {
                  required: 'Campo obrigatório',
                  pattern: {
                    value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,}$/,
                    message:
                      'Informe apenas letras e no mínimo 3 caracteres'
                  }
                })}
              />
              <MensagemErro error={errors.cargo} />
            </div>
            <div>
              <label htmlFor='idSetor'>Setor</label>
              <select
                id='idSetor'
                defaultValue=''
                {...register('setor', { required: 'Campo obrigatório' })}
              >
                <option value='' disabled>
                  Selecione um setor
                </option>
                {setores.map((setor, index) => (
                  <option key={index} value={setor.nome}>
                    {setor.nome}
                  </option>
                ))}
              </select>
              <MensagemErro error={errors.setor} />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor='idCpf'>CPF</label>
              <input
                type='text'
                id='idCpf'
                inputMode='numeric'
                {...register('cpf', {
                  required: 'Campo obrigatório',
                  pattern: {
                    value: /^\d{11}$/,
                    message: 'Informe apenas números e no mínimo 11 caracteres'
                  }
                })}
              />
              <MensagemErro error={errors.cpf} />
            </div>
            <div>
              <label htmlFor='idTelefone'>Telefone</label>
              <input
                type='tel'
                id='idTelefone'
                inputMode='numeric'
                {...register('telefone', {
                  required: 'Campo obrigatório',
                  pattern: {
                    value: /^\d{10,11}$/,
                    message: 'Informe apenas números e no mínimo 11 caracteres'
                  }
                })}
              />
              <MensagemErro error={errors.telefone} />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor='idEmail'>Email Corporativo</label>
              <input
                type='email'
                id='idEmail'
                {...register('email', {
                  required: 'Campo obrigatório',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Formato de email inválido'
                  },
                  validate: valor => {
                    return valor === watchEmail || 'Emails não correspondem'
                  }
                })}
              />
              <MensagemErro error={errors.email} />
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
                {...register('senha', {
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 6,
                    message: 'Informe no mínimo 6 caracteres'
                  },
                  validate: valor => {
                    return valor === watchSenha || 'Senhas não correspondem'
                  }
                })}
              />
              <MensagemErro error={errors.senha} />
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
                type='text'
                id='idSalario'
                inputMode='numeric'
                {...register('salario', {
                  required: 'Campo obrigatório',
                  validate: valor => {
                    const numero = parseFloat(String(valor).replace(',', '.'))
                    return numero >= 900 || 'Informe no mínimo R$ 900,00'
                  },
                  pattern: {
                    value: /^\d+([.,]\d{1,2})?$/,
                    message:
                      'Informe apenas números, com até duas casas decimais'
                  }
                })}
              />
              <MensagemErro error={errors.salario} />
            </div>
            <div>
              <label htmlFor='idDataAdmissao'>
                Data de Admissão{' '}
                <span className='text-red-500 font-bold'>*</span>
              </label>
              <input
                type='date'
                id='idDataAdmissao'
                {...register('dataAdmissao', {
                  required: 'Campo obrigatório',
                  validate: valor => {
                    const dataMaxima = new Date()
                    const data = new Date(valor)
                    const dataMinima = new Date()
                    dataMinima.setFullYear(dataMaxima.getFullYear() - 30)

                    if (data > dataMaxima) return 'Informe datas até o dia de hoje'
                    if (data < dataMinima)
                      return 'Informe datas a até 30 anos atrás'
                    return true
                  }
                })}
              />
              <MensagemErro error={errors.dataAdmissao} />
            </div>
          </div>
        </fieldset>
        <button type='submit'>Cadastrar Colaborador</button>
      </form>
    </main>
  )
}

export default Cadastro
