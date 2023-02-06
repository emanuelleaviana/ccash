import NavBar from '../../components/NavBar'
import './index.css'

export default function Home() {
  return (
    <div id='page' >
      <NavBar />

      <main className='mainHome' id='home'>
        <div>
          <p>Seja bem vindo ao CCA$H!</p>
          <h1>O banco que cuida de você =)</h1>
          <p>Os agentes da CCA$H fornecem todo o apoio necessário para você contribuinte que busca atendimento de qualidade!</p>
            <button>Saiba Mais</button>
            <button>Sou Agente</button>
          <img id='lines' src="../src/assets/lines.png" alt="" />
        </div>
        <figure>
          <img src="../src/assets/woman-computer.png" alt="" />
        </figure>
      </main>
    </div>
  )
}

