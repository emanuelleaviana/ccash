import NavBar from '../../components/navbar/NavBar'
import Client from '../../components/client/Client'

import './index.css'

export default function Serviços() {
    return (
        <div id='pageServices'>
            <NavBar />

            <main className='mainServices'>
                <h1>Listagem de Clientes</h1>
                <div className='clientGrade'>
                    <Client />
                    <Client />
                    <Client />
                    <Client />
                    <Client />
                    <Client />
                    <Client />
                    <Client />
                    <Client />
                    <Client />
                    <Client />
                    <Client />
                </div>
            </main>
        </div>
    )
}