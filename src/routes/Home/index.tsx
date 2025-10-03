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

import type { tipoFuncionario } from "../../types/tipoFuncionario";

const funcionario: tipoFuncionario = {
    rf:"string",
    nome:"string",
    email:"string",
    senha:"string",
    cargo:"string",
    setor:"string",
    cpf:"string",
    telefone:"string",
    salario:4.400,
    dataAdmissao:"string"
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
            <p>Telefone: {funcionario.telefone}</p>
            <p>Endereço: {funcionario.cpf}</p>
          </div>

          {/* Dados Profissionais */}
          <div className="info-card">
            <h3 className="info-profissionais">💼 Dados Profissionais</h3>
            <p>Cargo: {funcionario.cargo}</p>
            <p>Setor: {funcionario.setor}</p>
            <p>Email Corporativo: {funcionario.email}</p>
            <p>Salario: {funcionario.salario}</p>
            <p>Admissão: {funcionario.dataAdmissao}</p>
            <p>Senha: {funcionario.senha}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
