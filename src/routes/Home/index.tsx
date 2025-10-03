import type { tipoFuncionario } from "../../types/tipoFuncionario";

const funcionario: tipoFuncionario = {
  rf: "123456",
  nome: "Felipe Ferrete",
  email: "felipe@email.com",
  senha: "********",
  cargo: "Desenvolvedor Backend",
  setor: "TI",
  cpf: "123.456.789-00",
  telefone: "(11) 98765-4321",
  salario: 4400,
  dataAdmissao: "01/03/2024",
};

function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 p-8 min-h-[calc(100vh-120px)] bg-gray-100">
      
      {/* Coluna Esquerda */}
      <div className="flex justify-center md:w-1/3">
        <img
          src="/assets/profile.png"
          alt="Imagem Funcionario"
          className="w-64 h-64 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Coluna Direita */}
      <div className="flex flex-col gap-4 md:w-2/3">
        <h2 className="text-xl font-medium text-gray-700">
          Olá, <span className="font-bold text-pink-600">{funcionario.nome}</span> 👋
        </h2>
        <h1 className="text-3xl font-bold text-gray-900">
          Bem-vindo às suas informações
        </h1>

        {/* Grid de Informações */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          
          {/* Dados Pessoais */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-pink-600 mb-2">
              📌 Dados Pessoais
            </h3>
            <p><span className="font-medium">Telefone:</span> {funcionario.telefone}</p>
            <p><span className="font-medium">CPF:</span> {funcionario.cpf}</p>
          </div>

          {/* Dados Profissionais */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-pink-600 mb-2">
              💼 Dados Profissionais
            </h3>
            <p><span className="font-medium">Cargo:</span> {funcionario.cargo}</p>
            <p><span className="font-medium">Setor:</span> {funcionario.setor}</p>
            <p><span className="font-medium">Email:</span> {funcionario.email}</p>
            <p><span className="font-medium">Salário:</span> R$ {funcionario.salario}</p>
            <p><span className="font-medium">Admissão:</span> {funcionario.dataAdmissao}</p>
            <p><span className="font-medium">Senha:</span> {funcionario.senha}</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;
