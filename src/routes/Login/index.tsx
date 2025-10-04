import { useForm, type SubmitHandler } from 'react-hook-form'
import type { tipoFuncionario } from '../../types/tipoFuncionario'
import { useAuth } from '../../context/AuthContext'
import MensagemErro from '../../components/MensagemErro/MensagemErro'

function Login () {
  const { login } = useAuth()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<tipoFuncionario>()

  const onSubmit: SubmitHandler<tipoFuncionario> = async data => {
    try {
      const response = await fetch('http://localhost:3001/funcionarios')
      const dataFuncionario = await response.json();

      const funcionarioRegistrado = dataFuncionario.find(
        (f: tipoFuncionario) => f.email === data.email
      )

      if (!funcionarioRegistrado) {
        setError('email', { type: 'manual', message: 'Não existe conta com esse email.' })
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
    <main className='flex min-h-screen items-center justify-center bg-black p-4 text-white'>
      <div className='w-full max-w-sm rounded-lg bg-black p-6 shadow-xl'>
        <h1 className='text-3xl font-bold text-white-900 mb-2'>Entrar</h1>
        <p className='text-white-600 mb-6'>
          Insira seus dados para acessar a plataforma.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-4'>
            <div>
              <label
                htmlFor='idEmail'
                className='block text-sm font-medium text-white-700 mb-1'
              >
                Email <span className='text-red-500 font-bold'>*</span>
              </label>
              <input
                type='email'
                id='idEmail'
                placeholder='seu.email@exemplo.com'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg'
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
            <div>
              <label
                htmlFor='idSenha'
                className='block text-sm font-medium text-white-700 mb-1'
              >
                Senha <span className='text-red-500 font-bold'>*</span>
              </label>
              <input
                type='password'
                id='idSenha'
                placeholder='••••••••'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg'
                {...register('senha', {
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 6,
                    message: 'Informe no mínimo 6 caracteres'
                  }
                })}
              />
              <MensagemErro error={errors.senha} />
            </div>
          </div>
          <button
            type='submit'
            className='w-full mt-6 px-4 py-2 text-white bg-fiap-cor rounded-lg font-semibold'
          >
            Entrar
          </button>
        </form>
        <p className='mt-6 text-center text-sm text-white-600'>
          Não tem um perfil?{' '}
          <a href='/cadastro' className='font-semibold text-fiap-cor'>
            Cadastrar
          </a>
        </p>
      </div>
    </main>
  )
}

export default Login
