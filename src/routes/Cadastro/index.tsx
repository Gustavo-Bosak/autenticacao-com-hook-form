import { useForm, type SubmitHandler } from 'react-hook-form'
import type { tipoFuncionario } from '../../types/tipoFuncionario'

function Cadastro () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<tipoFuncionario>()
  const onSubmit: SubmitHandler<tipoFuncionario> = data => {
    console.log(data)
    console.log(errors)
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
                {...(register('nome'), { required: true })}
              />
            </div>
            <div>
              <label htmlFor='idRf'>RF (Registro do Funcionário)</label>
              <input
                type='text'
                id='idRf'
                {...(register('rf'), { required: true })}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor='idCargo'>Cargo</label>
              <input
                type='text'
                id='idCargo'
                {...(register('cargo'), { required: true })}
              />
            </div>
            <div>
              <label htmlFor='idSetor'>Setor</label>
              <input
                type='text'
                id='idSetor'
                {...(register('setor'), { required: true })}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor='idCpf'>CPF</label>
              <input
                type='text'
                id='idCpf'
                {...(register('cpf'), { required: true })}
              />
            </div>
            <div>
              <label htmlFor='idTelefone'>Telefone</label>
              <input
                type='tel'
                id='idTelefone'
                {...(register('telefone'), { required: true })}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor='idEmail'>Email Corporativo</label>
              <input
                type='email'
                id='idEmail'
                {...(register('email'), { required: true })}
              />
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
                {...(register('senha'), { required: true })}
              />
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
                {...(register('salario'), { required: true })}
              />
            </div>
            <div>
              <label htmlFor='idDataAdmissao'>
                Data de Admissão{' '}
                <span className='text-red-500 font-bold'>*</span>
              </label>
              <input
                type='date'
                id='idDataAdmissao'
                {...(register('dataAdmissao'), { required: true} )}
              />
            </div>
          </div>
        </fieldset>
        <button type='submit'>Cadastrar Colaborador</button>
      </form>
    </main>
  )
}

export default Cadastro
