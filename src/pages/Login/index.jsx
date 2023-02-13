import './index.css'
import NavBar from '../../components/NavBar'

export default function Login() {
    return (
        <div id='pageLogin'>
            <NavBar />

            <main className='mainLogin'>
                <article className='log'>

                    <section className='registerBox'>
                        <h1>Cadastre seus dados:</h1>
                        <input className='insert' type="text" placeholder='CPF' />
                        <input className='insert' type="text" placeholder='Nome Completo' />
                        <input className='insert' type="text" placeholder='Celular' />
                        <input className='insert' type="text" placeholder='E-mail' />
                        <input className='insert' type="text" placeholder='Confirmação e-mail' />

                        <aside className='agentCheck'>
                            <p>Sou Agente?</p>
                            <input type="radio" name="agent" value="valor" /><p>Sim</p>
                            <input type="radio" name="agent" value="valor" /><p>Não</p>
                        </aside>

                        <button>Registrar</button>
                    </section>

                </article>

                <article className='banner'>
                    <div className='infoBox'>
                    <h1>Cca$h</h1>
                    <p>“O banco com o maior índice de aprovação” - Forbes</p>
                    <button>Saiba Mais</button>
                    </div>
                    
                </article>

            </main>

        </div>
    )
}