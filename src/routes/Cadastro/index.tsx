import { useForm, type SubmitHandler } from 'react-hook-form'
import type { tipoFuncionario } from '../../types/tipoFuncionario'

function Cadastro () {
  const { register, handleSubmit } = useForm<tipoFuncionario>()
  const onSubmit:SubmitHandler<tipoFuncionario> = ( data ) => {
    console.log(data)
  }

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <div>
            <div className='input-container'>
              <label htmlFor='idNome'>Nome Completo</label>
              <input
                type='text'
                id='idNome'
                required
                {...register('nome')}
              />
            </div>
            <div className='input-container'>
              <label htmlFor='idRf'>RF (Registro do Funcionário)</label>
              <input
                type='text'
                id='idRf'
                required
                {...register('rf')}
              />
            </div>
          </div>
          <div>
            <div className='input-container'>
              <label htmlFor='idCargo'>Cargo</label>
              <input
                type='text'
                id='idCargo'
                required
                {...register('cargo')}
              />
            </div>
            <div className='input-container'>
              <label htmlFor='idSetor'>Setor</label>
              <input
                type='text'
                id='idSetor'
                required
                {...register('setor')}
              />
            </div>
          </div>
          <div>
            <div className='input-container'>
              <label htmlFor='idCpf'>CPF</label>
              <input
                type='text'
                id='idCpf'
                required
                {...register('cpf')}
              />
            </div>
            <div className='input-container'>
              <label htmlFor='idTelefone'>Telefone</label>
              <input
                type='tel'
                id='idTelefone'
                required
                {...register('telefone')}
              />
            </div>
          </div>
          <div>
            <div className='input-container'>
              <label htmlFor='idEmail'>Email Corporativo</label>
              <input
                type='email'
                id='idEmail'
                required
                {...register('email')}
              />
            </div>
            <div className='input-container'>
              <label htmlFor='idSalario'>Salário</label>
              <input
                type='number'
                id='idSalario'
                required
                {...register('salario')}
              />
            </div>
          </div>
          <div>
            <div className='input-container w-full'>
              <label htmlFor='idSenha'>Senha</label>
              <input
                type='password'
                id='idSenha'
                required
                {...register('senha')}
              />
            </div>
            <div className='input-container'>
              <label htmlFor='idSenhaConfirmada'>
                Confirmar Senha <span className='text-red-500 font-bold'>*</span>
              </label>
              <input
                type='password'
                id='idSenhaConfirmada'
                required
              />
            </div>
          </div>
          <div className='input-container'>
            <label htmlFor='idDataAdmissao'>
              Data de Admissão <span className='text-red-500 font-bold'>*</span>
            </label>
            <input
              type='text'
              id='idDataAdmissao'
              required
              {...register('dataAdmissao')}
            />
          </div>
        </fieldset>
        <button type='submit'>Cadastrar Colaborador</button>
      </form>
    </main>
  )
}

export default Cadastro
