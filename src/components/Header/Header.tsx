import { useAuth } from '../../context/AuthContext'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { RiHomeLine } from 'react-icons/ri'
import { TfiStar } from 'react-icons/tfi'
import { VscThreeBars } from 'react-icons/vsc'

function Header () {
  const { logout } = useAuth()

  return (
    <header className='flex items-center h-20 bg-fundo-dark text-fiap-cor w-full'>
      <div className='flex justify-between items-center px-6 w-full'>
        <div className='flex items-center gap-6'>
          <button className='hover-brightness'>
            <VscThreeBars className='text-4xl' />
          </button>
          <Link to='/' aria-label='Página Inicial'>
            <img src={logo} alt='Logo FIAP' className='h-4.75' />
          </Link>
        </div>

        <div className='flex items-center gap-10'>
          <Link to='/' aria-label='Página Inicial' className='hover-brightness hidden sm:inline'>
            <RiHomeLine className='text-2xl ' />
          </Link>
          <Link to='/' aria-label='Favoritos' className='hover-brightness hidden sm:inline'>
            <TfiStar className='text-xl' />
          </Link>
          <button onClick={() => logout()} className='botao'>
            Sair
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
