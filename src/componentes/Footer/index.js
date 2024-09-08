import estilos from './Footer.module.css';
import { Icon } from "@iconify/react/dist/iconify.js";

function Footer() {
    return (
        <footer className={estilos.footer}>
            <div className={estilos.footerContent}>
                <span>Desenvolvido com paixão pela equipe do DiscountPlay</span>
                <div className={estilos.socialLinks}>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Icon className={estilos.footerIconify} icon="mdi:github" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Icon className={estilos.footerIconify} icon="bi:linkedin" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Icon className={estilos.footerIconify} icon="mdi:twitter" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Icon className={estilos.footerIconify} icon="mdi:instagram" />
                    </a>
                </div>
            </div>
            <div className={estilos.footerBottom}>
                <span>&copy; {new Date().getFullYear()} DiscountPlay. Todos os direitos reservados.</span>
            </div>
        </footer>
    );
}

export default Footer;
