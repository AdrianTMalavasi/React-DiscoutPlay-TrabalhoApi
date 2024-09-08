import { Link, useNavigate } from "react-router-dom";
import estilos from './Item.module.css';

function Item(props) {
    const navigate = useNavigate();
    

    // Adicionar uma condição para imagens pequenas
    const isSmallImage = props.deal.thumbWidth < 150 || props.deal.thumbHeight < 100;
    const discountPercentage = parseFloat(props.deal.savings).toFixed(2);
    return (
        <Link to={"item/" + props.deal.gameID} className={estilos.link}>
            <li className={estilos.listItem}>
                <div key={props.deal.dealID} className={estilos.container}>
                    <h2 className={estilos.title}>{props.deal.title}</h2>
                    <div className={estilos.imageWrapper}>
                        <img
                            src={props.deal.thumb}
                            alt={props.deal.title}
                            className={isSmallImage ? `${estilos.image} ${estilos.smallImage}` : estilos.image}
                        />
                        {discountPercentage > 0 && (
                            <div className={estilos.discountButton}>Promoção de 
                                -{discountPercentage}%
                            </div>
                        )}
                    </div>
                </div>
            </li>
        </Link>
    );
}

export default Item;
