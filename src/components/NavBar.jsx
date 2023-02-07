import './index.css'
import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
      <header>
        <nav className='navBar' >
          <h1>cca$h</h1>
          <div className='background' id='links'>
            <Link to='/'>Início</Link>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/serviços'>Serviços</Link>
            <Link to='/faq'>FAQ</Link>
          </div>
          <div className='background' id='buttonNavBar'>
            <Link to='/login'><button>Abra sua conta</button></Link>
            <Link to='/login'><button>Acessar</button></Link>
          </div>
        </nav>
      </header>
  )
}
