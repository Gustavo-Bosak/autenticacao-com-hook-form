import { useForm, type SubmitHandler } from 'react-hook-form'
import type { tipoFuncionario } from '../../types/tipoFuncionario'
import { useAuth } from '../../context/AuthContext'
import { useEffect, useState } from 'react'
import type { tipoSetor } from '../../types/tipoSetor'
import MensagemErro from '../../components/MensagemErro/MensagemErro'
import { ImEye, ImEyeBlocked } from 'react-icons/im'
import { Link } from 'react-router-dom'

function Cadastro () {
  const { login } = useAuth()
  const [setores, setSetores] = useState<tipoSetor[]>([])
  const [visivel, setVisivel] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors }
  } = useForm<tipoFuncionario>({ shouldUnregister: true })

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
        setError('rf', { type: 'manual', message: 'RF já cadastrado' })
      if (emailExistente)
        setError('email', { type: 'manual', message: 'Email já cadastrado' })
      if (cpfExistente)
        setError('cpf', { type: 'manual', message: 'CPF já cadastrado' })

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
      <section className='formulario'>
        <div className='card-titulo'>
          <h1>Criar conta</h1>
          <p>Boas vindas ao Portal do Funcionário.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='many-fields'>
          <fieldset>
            <div className='field-container'>
              <div className='form-field'>
                <label htmlFor='idNome'>Nome Completo</label>
                <input
                  type='text'
                  id='idNome'
                  {...register('nome', {
                    required: 'Campo obrigatório',
                    pattern: {
                      value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,}$/,
                      message: 'Apenas letras e no mínimo 3 caracteres'
                    }
                  })}
                />
                <MensagemErro error={errors.nome} />
              </div>
              <div className='form-field'>
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
            <div className='field-container'>
              <div className='form-field'>
                <label htmlFor='idCargo'>Cargo</label>
                <input
                  type='text'
                  id='idCargo'
                  {...register('cargo', {
                    required: 'Campo obrigatório',
                    pattern: {
                      value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,}$/,
                      message: 'Apenas letras e no mínimo 3 caracteres'
                    }
                  })}
                />
                <MensagemErro error={errors.cargo} />
              </div>
              <div className='form-field'>
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
            <div className='field-container'>
              <div className='form-field'>
                <label htmlFor='idCpf'>CPF</label>
                <input
                  type='text'
                  id='idCpf'
                  inputMode='numeric'
                  {...register('cpf', {
                    required: 'Campo obrigatório',
                    pattern: {
                      value: /^\d{11}$/,
                      message: 'Apenas números e no mínimo 11 caracteres'
                    }
                  })}
                />
                <MensagemErro error={errors.cpf} />
              </div>
              <div className='form-field'>
                <label htmlFor='idTelefone'>Telefone</label>
                <input
                  type='tel'
                  id='idTelefone'
                  inputMode='numeric'
                  {...register('telefone', {
                    required: 'Campo obrigatório',
                    pattern: {
                      value: /^\d{10,11}$/,
                      message: 'Apenas números e no mínimo 10 caracteres'
                    }
                  })}
                />
                <MensagemErro error={errors.telefone} />
              </div>
            </div>
            <div className='field-container'>
              <div className='form-field'>
                <label htmlFor='idEmail'>Email Corporativo</label>
                <input
                  type='email'
                  id='idEmail'
                  {...register('email', {
                    required: 'Campo obrigatório',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Formato de email inválido'
                    }
                  })}
                />
                <MensagemErro error={errors.email} />
              </div>
              <div className='form-field'>
                <label htmlFor='idConfirmarEmail'>Confirmar Email</label>
                <input
                  type='email'
                  id='idConfirmarEmail'
                  {...register('confirmarEmail', {
                    required: 'Campo obrigatório',
                    validate: valor => {
                      return valor === watchEmail || 'Emails não correspondem'
                    }
                  })}
                />
                <MensagemErro error={errors.confirmarEmail} />
              </div>
            </div>
            <div className='field-container'>
              <div className='form-field'>
                <label htmlFor='idSenha'>Senha</label>
                <div className='relative flex items-center'>
                  <input
                    type={visivel ? 'text' : 'password'}
                    id='idSenha'
                    {...register('senha', {
                      required: 'Campo obrigatório',
                      minLength: {
                        value: 6,
                        message: 'Informe no mínimo 6 caracteres'
                      }
                    })}
                  />
                  <p
                    onClick={() =>
                      visivel ? setVisivel(false) : setVisivel(true)
                    }
                    className='text-lg right-4 absolute text-fiap-cor cursor-pointer'
                  >
                    {visivel ? <ImEye /> : <ImEyeBlocked />}
                  </p>
                </div>
                <MensagemErro error={errors.senha} />
              </div>
              <div className='form-field'>
                <label htmlFor='idSenhaConfirmada'>Confirmar Senha</label>
                <div className='relative flex items-center'>
                  <input
                    type={visivel ? 'text' : 'password'}
                    id='idSenhaConfirmada'
                    {...register('confirmarSenha', {
                      required: 'Campo obrigatório',
                      validate: valor => {
                        return valor === watchSenha || 'Senhas não correspondem'
                      }
                    })}
                  />
                  <p className='text-lg right-4 absolute text-texto-secondario'>
                    {visivel ? <ImEye /> : <ImEyeBlocked />}
                  </p>
                </div>
                <MensagemErro error={errors.senha} />
              </div>
            </div>
            <div className='field-container'>
              <div className='form-field'>
                <label htmlFor='idSalario'>Salário</label>
                <input
                  type='text'
                  id='idSalario'
                  inputMode='numeric'
                  {...register('salario', {
                    required: 'Campo obrigatório',
                    validate: valor => {
                      const numero = parseFloat(String(valor).replace(',', '.'))
                      return numero >= 900 || 'Mínimo de R$ 900,00'
                    },
                    pattern: {
                      value: /^\d+([.,]\d{1,2})?$/,
                      message: 'Apenas números'
                    }
                  })}
                />
                <MensagemErro error={errors.salario} />
              </div>
              <div className='form-field'>
                <label htmlFor='idDataAdmissao'>Data de Admissão</label>
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

                      if (data > dataMaxima) return 'Datas máxima até hoje'
                      if (data < dataMinima) return 'Datas mínima 30 anos atrás'
                      return true
                    }
                  })}
                />
                <MensagemErro error={errors.dataAdmissao} />
              </div>
            </div>
            <p className='mb-4'>
              Ao cria um peril, você concorda com os{' '}
              <Link to='/' className='font-semibold'>
                Termos de Uso
              </Link>
              .
            </p>
          </fieldset>
          <button type='submit' className='botao'>
            Cadastrar Colaborador
          </button>
        </form>
        <p>
          Já tem um perfil?{' '}
          <Link to='/login' className='link'>
            Entrar
          </Link>
        </p>
      </section>
    </main>
  )
}

export default Cadastro
