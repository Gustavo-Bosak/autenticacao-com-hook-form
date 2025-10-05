import { useForm, type SubmitHandler } from 'react-hook-form'
import type { tipoFuncionario } from '../../types/tipoFuncionario'
import { useAuth } from '../../context/AuthContext'
import MensagemErro from '../../components/MensagemErro/MensagemErro'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ImEye, ImEyeBlocked } from 'react-icons/im'

function Login () {
  const { login } = useAuth()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<tipoFuncionario>()
  const [visivel, setVisivel] = useState<boolean>(false)

  const onSubmit: SubmitHandler<tipoFuncionario> = async data => {
    try {
      const response = await fetch('http://localhost:3001/funcionarios')
      const dataFuncionario = await response.json()

      const funcionarioRegistrado = dataFuncionario.find(
        (f: tipoFuncionario) => f.email === data.email
      )

      if (!funcionarioRegistrado) {
        setError('email', {
          type: 'manual',
          message: 'Não existe conta com esse email.'
        })
        return
      }

      if (funcionarioRegistrado.senha != data.senha) {
        setError('senha', { type: 'manual', message: 'Senha incorreta.' })
        return
      }

      login(data)
    } catch {
      console.error('Erro ao buscar dados de funcionários')
    }
  }

  return (
    <main className='main'>
      <section className='formulario'>
        <div className='card-titulo'>
          <h1>Entrar</h1>
          <p>Bem vindo de volta.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <div className='form-field'>
              <label htmlFor='idEmail'>Email</label>
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
          </fieldset>
          <button type='submit' className='botao'>
            Entrar
          </button>
        </form>
        <p>
          Não tem um perfil?{' '}
          <Link to='/cadastro' className='font-semibold text-fiap-cor'>
            Cadastrar
          </Link>
        </p>
      </section>
    </main>
  )
}

export default Login
