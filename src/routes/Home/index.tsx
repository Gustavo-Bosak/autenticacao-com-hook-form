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
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 p-8">
      
      {/*Imagem Funcionario*/}
      <div className="flex justify-center md:w-1/3">
        <img
          src="/assets/profile.png"
          alt="Imagem do Funcionário"
          className="w-64 h-64 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/*Titulo Painel*/}
      <div className="flex flex-col gap-4 md:w-2/3">
        <h2 className="text-xl font-medium texto-secundario">
          Olá, <span className="texto-destaque">{funcionario.nome}</span> 👋
        </h2>
        <h1 className="text-3xl font-bold texto-primario">
          Bem-vindo ao seu painel
        </h1>

        {/* Grid de Informações */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          
          {/* Dados Pessoais */}
          <div className="card-info">
            <h3 className="text-lg font-semibold texto-destaque mb-2">
              📌 Dados Pessoais
            </h3>
            <p className="texto-primario">
              <span className="rotulo-info">Telefone:</span> {funcionario.telefone}
            </p>
            <p className="texto-primario">
              <span className="rotulo-info">CPF:</span> {funcionario.cpf}
            </p>
          </div>

          {/* Dados Profissionais */}
          <div className="card-info">
            <h3 className="text-lg font-semibold texto-destaque mb-2">
              💼 Dados Profissionais
            </h3>
            <p className="texto-primario"><span className="rotulo-info">Cargo:</span> {funcionario.cargo}</p>
            <p className="texto-primario"><span className="rotulo-info">Setor:</span> {funcionario.setor}</p>
            <p className="texto-primario"><span className="rotulo-info">Email:</span> {funcionario.email}</p>
            <p className="texto-primario"><span className="rotulo-info">Salário:</span> R$ {funcionario.salario}</p>
            <p className="texto-primario"><span className="rotulo-info">Admissão:</span> {funcionario.dataAdmissao}</p>
            <p className="texto-primario"><span className="rotulo-info">Senha:</span> {funcionario.senha}</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;