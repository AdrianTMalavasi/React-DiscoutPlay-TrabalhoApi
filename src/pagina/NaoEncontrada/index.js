import estilos from './NaoEncontrada.module.css';
import { Link, useNavigate } from 'react-router-dom';

function NaoEncontrada() {
    const navegacao = useNavigate();
    return (
        <div className={estilos.error}>
          <div className={estilos.img}>
            <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg96kCPNbPZGW9h1JgHqleTAfoTG9IuSe8h7J3F42gpuj3YE5YGFCyJn-MjjhR-lECGqDjWN60lsF57FFUy0bHANsh9ohsNLSftj94TwFrNA6RozgWaIJJf_UN1-LUdnUSpor7p1IQ9OeA/s1600/001.gif" 
                alt="Mario morrendo antes de completar a missão" 
            />
            </div>  
            <div>
                <h1><strong className={estilos.error404}>ERRO 404</strong></h1>
                <h1>Missão falhou!</h1>
                <p><strong>O Mario não conseguiu chegar ao fim, e parece que você também não.</strong></p>
                <p>
                    A página que você está procurando não foi encontrada.
                    <br/>
                    Mas não se preocupe, você pode tentar de novo ou voltar para o início.
                </p>
                <p><strong>Não desista! Continue sua aventura!</strong></p>
                <h2>Aqui estão algumas opções para você:</h2>
                <nav>
                    <ul>
                        <li><button onClick={() => navegacao(-2)} >Voltar</button></li>
                        <li><button ><Link to="/">Página Inicial</Link></button></li>
                        <li><button><Link to="/sobreNos">Sobre Nós</Link></button></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NaoEncontrada;
