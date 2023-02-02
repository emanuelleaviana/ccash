import './index.css'

export function Home() {

  return (
    <>
      <header className='conteiner'>
        <nav className='navBar'>
          <p>cca$h</p>
          <div className='background'>
            <a href="#">Início</a>
            <a href="#">Sobre</a>
            <a href="#">Serviços</a>
            <a href="#">FAQ</a>
          </div>
          <div className='background'>
            <button>Abra sua conta</button>
            <button>Acessar</button>
          </div>
        </nav>
      </header>

      <main className='main'>
        <div>
          <p>Seja bem vindo ao CCA$H!</p>
          <h1>O banco que cuida de você =)</h1>
          <p>Os agentes da CCA$H fornecem todo o apoio necessário para você contribuinte que busca atendimento de qualidade!</p>
            <button>Saiba Mais</button>
            <button>Sou Agente</button>
          <img id='lines' src="../src/assets/lines.png" alt="" />
        </div>
        <div>
          <img src="../src/assets/woman-computer.png" alt="" />
        </div>
      </main>

    </>
  )
}

