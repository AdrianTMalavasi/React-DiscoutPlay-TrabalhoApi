import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import estilos from './SobreNos.module.css';


function SobreNos() {
    const imagens = [
        "https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1683566799",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1692642475",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/capsule_616x353.jpg?t=1626100484",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/capsule_616x353.jpg?t=1690536351",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/capsule_616x353.jpg?t=1689930260",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/381210/capsule_616x353.jpg?t=1692871992",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/892970/capsule_616x353.jpg?t=1691689130",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/capsule_616x353.jpg?t=1682344714",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/976730/capsule_616x353.jpg?t=1657141698",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/capsule_616x353.jpg?t=1682731368",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1693308578",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/capsule_616x353.jpg?t=1688954311",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/379720/capsule_616x353.jpg?t=1682909274",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/capsule_616x353.jpg?t=1690536351",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/620/capsule_616x353.jpg?t=1679676760",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/capsule_616x353.jpg?t=1626100484",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/capsule_616x353.jpg?t=1674484219",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/227300/capsule_616x353.jpg?t=1689623041",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/620980/capsule_616x353.jpg?t=1690739022",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/383150/capsule_616x353.jpg?t=1675472272",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/20920/capsule_616x353.jpg?t=1682357731",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/413410/capsule_616x353.jpg?t=1665490668",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1063730/capsule_616x353.jpg?t=1693195871",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/346110/capsule_616x353.jpg?t=1692418197",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/552520/capsule_616x353.jpg?t=1690492488",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/245170/capsule_616x353.jpg?t=1678924654",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1693308578",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/304930/capsule_616x353.jpg?t=1680032216",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/264710/capsule_616x353.jpg?t=1678188934",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/379720/capsule_616x353.jpg?t=1682909274",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/552520/capsule_616x353.jpg?t=1690492488",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/298110/capsule_616x353.jpg?t=1670952027",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/108600/capsule_616x353.jpg?t=1676036632",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/489830/capsule_616x353.jpg?t=1689875451",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1022420/capsule_616x353.jpg?t=1691694317",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/capsule_616x353.jpg?t=1689185423",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/34330/capsule_616x353.jpg?t=1681181674"
    ];


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true, // Adiciona o autoplay
        autoplaySpeed: 1300, // Tempo de exibição de cada slide
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    };

    return (
        <div className={estilos.sobreNos}>
            <section className={estilos.intro}>
                <p>
                    Bem-vindo ao nosso site de games! Somos um time apaixonado por jogos e dedicado a fornecer as melhores ofertas, notícias e análises para a comunidade gamer. Nossa missão é garantir que você encontre os melhores jogos e aproveite promoções incríveis, com recomendações baseadas em análises detalhadas e atualizações constantes.

                    Navegue pelo nosso site para descobrir uma ampla gama de jogos, desde os mais populares até os lançamentos mais esperados. Se você é um gamer casual ou um entusiasta, temos tudo o que você precisa para se manter atualizado e maximizar sua experiência de jogo. Junte-se a nós e explore o emocionante mundo dos games com as melhores ofertas e notícias!
                </p>

            </section>

            <section className={estilos.carrossel}>
                <h2>Galeria de Jogos</h2>
                <Slider {...settings}>
                    {imagens.map((imagem, index) => (
                        <div key={index} className={estilos.carrosselItem}>
                            <img src={imagem} alt={`Jogo ${index}`} className={estilos.imagem} />
                        </div>
                    ))}
                </Slider>
            </section>

        </div>
    );
}

export default SobreNos;