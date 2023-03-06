import './index.css'

export default function Client() {
  return (
    <div className='pageClient'>

      <main className='boxClient'>
        <img src="../src/assets/iconClient.png" alt="" />

        <div className='textBox'>
          <h2>Nome</h2>
          <p>ID </p>
          <p>CPF</p>
          <p>Endereço</p>
        </div>
      </main>

      <div className='buttonsClient'>
        <span>
          <button>Mensagem</button>
          <button id='editButton'>Editar</button>
        </span>

        <button id='detailsButton'>Mais Detalhes</button>
      </div>

    </div>
  )
}
