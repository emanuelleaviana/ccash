import NavBar from '../../components/NavBar'
import './index.css'

export default function Home() {
  return (
    <>
      <NavBar />

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

