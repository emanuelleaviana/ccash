import './sobre.css'
import NavBar from '../../components/NavBar'

export default function Sobre() {
    return (
        <div id='pageSobre'>
            <NavBar />

            <header className='headerSobre'>
                <h1>
                    <span>Cca$h:</span> Nossos Objetivos
                </h1>
                <img src="../src/assets/line-purple.png" alt="" />
            </header>

            <main className='mainSobre'>
                <article className='block'>
                    <h2>Missão</h2>
                    <p>Oferecer o melhor serviço quanto ao gerenciamento de capital em todo o mundo e ser referência de tratamento ao cliente.</p>
                </article>
                <article className='block'>
                    <h2>Visão</h2>
                    <p>Tornar-se o banco mais utilizado do mundo em até 10 anos.</p>
                </article>
                <article className='block'>
                    <h2>Valores</h2>
                    <ul>
                        <li>· Integridade</li>
                        <li>· Segurança</li>
                        <li>· Valorização da Pessoa</li>
                        <li>· Ética</li>
                        <li>· Confiabilidade</li>
                    </ul>
                </article>
            </main>
        </div>
    )
}