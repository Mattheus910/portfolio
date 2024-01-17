import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Carrosel.css";

const Carrossel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: false,
        arrows: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              variableWidth: false,
            },
          },
        ],
      };

  return (
    <section className='carrosel' id='projects'>
      <h2>Projetos</h2>
      <Slider {...settings}>
        <div className='foto'>
          <img src="./public/academia.png" alt="" />
          <button><a href="https://mattheus910.github.io/academia/" target="_blank" rel="noopener noreferrer">ir para</a></button>
        </div>
        <div className='foto'>
          <img src="./public/preview.png" alt="" />
          <button><a href="https://mattheus910.github.io/bitsos/#" target="_blank" rel="noopener noreferrer">ir para</a></button>
        </div>
        <div className='foto'>
        <img src="./public/print.png" alt="" />
        <button><a href="https://mattheus910.github.io/lista-de-compra/" target="_blank" rel="noopener noreferrer">ir para</a></button>
        </div>
        <div className='foto'>
        <img src="./public/tela.png" alt="" />
        <button><a href="https://mattheus910.github.io/robotica/" target="_blank" rel="noopener noreferrer">ir para</a></button>
        </div>
      </Slider>
    </section>

  );
};

export default Carrossel;
