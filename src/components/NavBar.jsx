import '../pages/Home/index.css'
import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
    <>
      <header className='conteiner'>
        <nav className='navBar'>
          <p>cca$h</p>
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
    </>
  )
}
