import './index.css'

export function Home() {

  return (
    <>
      <header>
        <nav className='navBar'>
          <p>ccas$h</p>
          <div className='link'>
            <a href="#">Início</a>
            <a href="#">Sobre</a>
            <a href="#">Serviços</a>
            <a href="#">FAQ</a>
          </div>
          <div>
            <button>Abra sua conta</button>
            <button>Acessar</button>
          </div>

        </nav>
      </header>

      <main>
        <p>Seja bem vindo ao CCA$H!</p>
        <h1>O banco que cuida de você =)</h1>
        <p>Os agentes da CCA$S fornecem todo o apoio necessário para você contribuinte que busca atendimentod de qualidade!</p>
        <button>Saiba Mais</button>
        <button>Sou Agente</button>
      </main>

    </>
  )
}

