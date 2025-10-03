// {
//   nome: "Felipe Ferrete Soares Lemes",
//   rf: "12345",
//   cargo: "Desenvolvedor",
//   setor: "TI",
//   cpf: "123.456.789-00",
//   telefone: "(11) 99999-9999",
//   email: "felipe@fiap.com.br",
//   salario: "R$ 5.000,00",
//   senha: "********"
// }

type Funcionario = {
  nome: string;
  rf: string;
  cargo: string;
  setor: string;
  cpf: string;
  telefone: string;
  email: string;
  salario: string;
  dataAdmissao: string;
  senha: string;
};

const funcionario: Funcionario = {
  nome: "Felipe Ferrete",
  rf: "000001",
  cargo: "Desenvolvedor Backend",
  setor: "TI",
  cpf: "001.002.003-04",
  telefone: "(11)99999-9999",
  email: "rf000001@fiap.com.br",
  salario: "R$ 5.500,00",
  dataAdmissao: "01/03/2024",
  senha: "xxxxxx"
};

function Home() {
  return (
    <section className="home-container">
      <div className="home-esquerda">
        <img
          src="/assets/profile.png"
          alt="Imagem Funcionario"
          className="home-image"
        />
      </div>

      <div className="home-direita">
        <h2 className="bem-vindo">
          Olá, <span>{funcionario.nome}</span> 👋
        </h2>
        <h1 className="home-title">Bem-vindo às suas informações</h1>

        <div className="info">
          {/* Dados Pessoais */}
          <div className="info-card">
            <h3 className="info-pessoais">📌 Dados Pessoais</h3>
            <p><strong>Telefone:</strong> {funcionario.telefone}</p>
            <p><strong>Endereço:</strong> {funcionario.cpf}</p>
          </div>

          {/* Dados Profissionais */}
          <div className="info-card">
            <h3 className="info-profissionais">💼 Dados Profissionais</h3>
            <p><strong>Cargo:</strong> {funcionario.cargo}</p>
            <p><strong>Setor:</strong> {funcionario.setor}</p>
            <p><strong>Email Corporativo:</strong> {funcionario.email}</p>
            <p><strong>Salario:</strong> {funcionario.salario}</p>
            <p><strong>Admissão:</strong> {funcionario.dataAdmissao}</p>
            <p><strong>Senha:</strong> {funcionario.senha}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
