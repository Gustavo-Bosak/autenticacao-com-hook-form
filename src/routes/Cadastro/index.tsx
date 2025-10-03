function Cadastro() {
  return (
    <main>
      <section className='form'>
          <fieldset>
            <div>
              <div className='input-container'>
                <label htmlFor='idNomeCompleto'>
                  NomeCompleto
                </label>
                <input
                  type='text'
                  name="nomeCompleto"
                  id='idNomeCompleto'
                  required
                />
              </div>
              <div className='input-container'>
                <label htmlFor='idRf'>
                  Rf (Registro_Funcionario)
                </label>
                <input
                  type='text'
                  name='Rf'
                  id='idRf'
                  required
                />
              </div>
            </div>
            <div>
              <div className='input-container'>
                <label htmlFor='idCargo'>
                  Cargo
                </label>
                <input
                  type='text'
                  name='Cargo'
                  id='idCargo'
                  required
                />
              </div>
              <div className='input-container'>
                <label htmlFor='idSetor'>Setor</label>
                <input
                  type='text'
                  name='Setor'
                  id='idSetor'
                />
              </div>
            </div>
            <div>
              <div className='input-container'>
                <label htmlFor='idCpf'>
                  CPF 
                </label>
                <input
                  type='text'
                  name='Cpf'
                  id='idCpf'
                  required
                />
              </div>
              <div className='input-container'>
                <label htmlFor='idTelefone'>
                  Telefone
                </label>
                <input
                  type='tel'
                  name='telefone'
                  id='idTelefone'
                  required
                />
              </div>
            </div>
            <div>
              <div className='input-container'>
                <label htmlFor='idEmailCorporativo'>
                  Email Corporativo 
                </label>
                <input
                  type='email'
                  name='emailCorporativo'
                  id='idEmailCorporativo'
                  required
                />
              </div>
              <div className='input-container'>
                <label htmlFor='idSalario'>
                  Salário
                </label>
                <input
                  type='number'
                  name='salário'
                  id='idSalario'
                  required
                />
              </div>
            </div>
            <div>
              <div className='input-container w-full'>
                <label htmlFor='idSenha'>
                  Senha
                </label>
                <input
                  type='password'
                  name='senha'
                  id='idSenha'
                  required
                />
              </div>
            </div>
              <div className='input-container'>
                <label htmlFor='idSenhaConfirmada'>
                  Confirmar Senha{' '}
                  <span className='text-red-500 font-bold'>*</span>
                </label>
                <input
                  type='password'
                  name='senhaConfirmado'
                  id='idSenhaConfirmada'
                  required
                />
              </div>
          </fieldset>
          <button type='submit'>Cadastrar Colaborador</button>
      </section>
    </main>
  )
}

export default Cadastro

