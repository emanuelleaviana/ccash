import './index.css'
import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
      <header>
        <nav className='navBar' >
          <h1>cca$h</h1>
          <div className='background'>
            <Link to='/'>Início</Link>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/serviços'>Serviços</Link>
            <Link to='/faq'>FAQ</Link>
          </div>
          <div className='background'>
            <button>Abra sua conta</button>
            <button>Acessar</button>
          </div>
        </nav>
      </header>
  )
}
