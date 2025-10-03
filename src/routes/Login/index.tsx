function Login () {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <div className='input-container'>
              <label htmlFor='idEmailCorporativo'>
                Email <span className='text-red-500 font-bold'>*</span>
              </label>
              <input
                type='email'
                name='emailCorporativo'
                id='idEmailCorporativo'
              />
            </div>
          </div>
          <div>
            <div className='input-container'>
              <label htmlFor='idSenha'>
                Senha <span className='text-red-500 font-bold'>*</span>
              </label>
              <input type='password' name='senha' id='idSenha' />
            </div>
          </div>
        </fieldset>
        <button type='submit'>Entrar</button>
      </form>
      <p className='mb-[2vh]'>
        Não tem um perfil?{' '}
        {/*<Link to='/cadastrar' className='font-bold'>
          Cadastrar
        </Link>*/}
      </p>
    </main>
  )
}

export default Login
