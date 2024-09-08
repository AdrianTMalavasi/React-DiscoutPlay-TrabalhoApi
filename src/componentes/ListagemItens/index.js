import Item from '../Item';
import estilos from './ListagemItens.module.css';

function ListagemItens(props) {
  return (
    <div className={estilos.container}>
      <div className={estilos.carrousel}>
        {props.deals.length > 0 ? (
          <ul>
            {props.deals.map((elemento, i) => (
              <Item key={elemento.id} index={i} deal={elemento} />
            ))}
          </ul>
        ) : (
          <div className={estilos.noResults}>
            <p>Nenhum item encontrado. Tente ajustar sua pesquisa.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListagemItens;
