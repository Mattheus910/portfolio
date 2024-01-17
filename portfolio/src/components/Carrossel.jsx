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
          <img src="./public/fam.jpg" alt="" />
        </div>
        <div className='foto'>
          <img src="./public/java.png" alt="" />
        </div>
        <div className='foto'>
          <img src="./public/escotec.jpg" alt="" />
        </div>
        <div className='foto'>
        <img src="./public/cibernetica.jpg" alt="" />
        </div>
        <div className='foto'>
        <img src="./public/cybersecurity.jpg" alt="" />
        </div>
        <div className='foto'>
        <img src="./public/logica.jpg" alt="" />
        </div>
        <div className='foto'>
        <img src="./public/rocketseat.png" alt="" />
        </div>
      </Slider>
    </section>

  );
};

export default Carrossel;
