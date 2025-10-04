import React from 'react';

function Login() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário de Login enviado!');
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black p-4 text-white">
      <div className="w-full max-w-sm rounded-lg bg-black p-6 shadow-xl">
        <h1 className="text-3xl font-bold text-white-900 mb-2">
          Entrar
        </h1>
        <p className="text-white-600 mb-6">
          Insira seus dados para acessar a plataforma.
        </p>
        <form onSubmit={onSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="idEmailCorporativo" className="block text-sm font-medium text-white-700 mb-1">
                Email <span className='text-red-500 font-bold'>*</span>
              </label>
              <input
                type="email"
                name="emailCorporativo"
                id="idEmailCorporativo"
                placeholder="seu.email@exemplo.com"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="idSenha" className="block text-sm font-medium text-white-700 mb-1">
                Senha <span className='text-red-500 font-bold'>*</span>
              </label>
              <input
                type="password"
                name="senha"
                id="idSenha"
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 text-white bg-fiap-cor rounded-lg font-semibold"
            >
            Entrar
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-white-600">
          Não tem um perfil?{' '}
          <a
            href="/cadastro" 
            className="font-semibold text-fiap-cor"
          >
            Cadastrar
          </a>
        </p>

      </div>
    </main>
  );
}

export default Login;