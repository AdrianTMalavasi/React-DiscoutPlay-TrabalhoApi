import { Link, useLocation } from 'react-router-dom';
import estilos from './MenuNav.module.css';

function MenuNav() {
    const localizacao = useLocation();
    
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className={`${localizacao.pathname === '/' ? estilos.linkAtivo : estilos.link}`}>
                        Principal
                    </Link>
                </li>
                <li>
                    <Link to="/sobreNos" className={`${localizacao.pathname === '/sobreNos' ? estilos.linkAtivo : estilos.link}`}>
                        Sobre nós
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default MenuNav;
