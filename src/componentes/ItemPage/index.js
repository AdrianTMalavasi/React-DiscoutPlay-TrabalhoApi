import estilos from './ItemPage.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ItemPage({ deals }) {
  const parametros = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);

      try {
        if (deals.length > 0) {
          // Buscar o item nos dados recebidos pelos props
          const item = deals.find(elemento => elemento.gameID === parametros.id);
          if (item) {
            setPost(item);
          } else {
            // Se o item não for encontrado, fazer uma chamada para a API
            const response = await fetch(`https://www.cheapshark.com/api/1.0/deals?id=${parametros.id}`);
            const data = await response.json();

            if (data && data.gameID === parametros.id) {
              setPost(data);
            } else {
              navigate('/naoencontrada');
            }
          }
        } else {
          // Se os dados não estiverem disponíveis, fazer a chamada para a API
          const response = await fetch(`https://www.cheapshark.com/api/1.0/deals?id=${parametros.id}`);
          const data = await response.json();

          if (data && data.gameID === parametros.id) {
            setPost(data);
          } else {
            navigate('/naoencontrada');
          }
        }
      } catch (error) {
        navigate('/naoencontrada');
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [deals, parametros.id, navigate]);

  // Se estiver carregando, exiba uma mensagem de carregamento
  if (loading) {
    return <div>Carregando...</div>;
  }

  // Se não houver post, redireciona para a página de erro
  if (!post) {
    return null; // Isso garante que a página de erro é mostrada através da navegação, não da renderização
  }

  // Conversão da data e cálculo do desconto seguem da mesma forma
  let formattedDate;
  if (post.releaseDate && post.releaseDate !== 0) {
    const releaseDate = new Date(post.releaseDate * 1000);
    formattedDate = releaseDate.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  } else {
    formattedDate = "**/**/****";
  }

  const discountPercentage = parseFloat(post.savings).toFixed(2);

  const getRatingColor = (steamRatingText) => {
    switch (steamRatingText) {
      case "Overwhelmingly Positive":
      case "Very Positive":
        return "darkgreen";
      case "Mostly Positive":
      case "Positive":
        return "green";
      case "Mixed":
        return "yellow";
      case "Negative":
      case "Very Negative":
        return "red";
      default:
        return "gray"; // Para avaliações desconhecidas
    }
  };

  return (
    <div className={estilos.item}>
      <div className={estilos.imageContainer}>
        <img src={post.thumb} alt={post.title} className={estilos.image} />
      </div>

      <div className={estilos.details}>
        <h1 className={estilos.title}>{post.title}</h1>

        <p className={estilos.rating}>Classificação do Jogo: {post.dealRating}</p>

        <p className={estilos.normalPrice}>Preço Normal: ${post.normalPrice}</p>

        <p className={estilos.salePrice}>Preço com Desconto: ${post.salePrice}</p>

        {discountPercentage > 0 && (
          <div className={estilos.discountButton}>
            Promoção de -{discountPercentage}%
          </div>
        )}

        <p className={estilos.releaseDate}>Data de Lançamento: {formattedDate}</p>

        <p className={estilos.platforms}>
          Plataformas: {post.steamAppID ? "Steam" : "Outras"}
        </p>

        <p className={estilos.steamRating} style={{ color: getRatingColor(post.steamRatingText) }}>
          Avaliação no Steam: {post.steamRatingText} ({post.steamRatingPercent}%)
        </p>

        <div className={estilos.buttonContainer}>
          <button onClick={() => navigate(-1)} className={estilos.backButton}>
            Voltar
          </button>
          <a
            href={`https://www.cheapshark.com/redirect?dealID=${post.dealID}`}
            target="_blank"
            rel="noopener noreferrer"
            className={estilos.offerLink}
          >
            Ver Oferta
          </a>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
