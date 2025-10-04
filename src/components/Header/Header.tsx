import { FiMenu, FiHome, FiStar } from 'react-icons/fi';

function Header() {
  return (
    <header className="cabecalho-fiap">
      <div className="cabecalho-conteudo">
        
        <div className="cabecalho-esquerda">
          <FiMenu className="cabecalho-icone" />
          <span className="cabecalho-logo">FIAP</span>
        </div>

        <div className="cabecalho-direita">
          <a href="#" aria-label="Página Inicial">
            <FiHome className="cabecalho-icone" />
          </a>
          <a href="#" aria-label="Favoritos">
            <FiStar className="cabecalho-icone" />
          </a>
          <div className="cabecalho-avatar"></div>
        </div>

      </div>
    </header>
  );
}

export default Header;