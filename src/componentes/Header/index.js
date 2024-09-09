import { Icon } from '@iconify/react/dist/iconify.js'
import estilos from './Header.module.css'
import { Link } from 'react-router-dom'
import MenuNav from '../MenuNav'

function Header() {
    //console.log(estilos)

    return (
        <header>
            <div className={estilos["header-logo"]}>
                <img src="/images/logo2.png" alt="Logo do Projeto" />
                <div className={estilos["header-titulo"]}>
                    <Link to="/" className={estilos["header-link"]} >
                        <p>DISCOUNT</p>
                        <p style={{ color: '#fc0170', marginLeft: '5px' }}>PLAY</p>
                    </Link>
                </div>
            </div>
            <div>
                <MenuNav />

            </div>

        </header>
    )
}

export default Header