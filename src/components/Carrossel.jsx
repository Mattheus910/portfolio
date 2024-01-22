import { register } from 'swiper/element/bundle';

import "./Carrosel.css";

register();

const Carrossel = () => {

  return (
    <section className='carrosel'>

      <h2>Certificados</h2>

      <swiper-container loop="true">
        <swiper-slide><img src="./public/fam.jpg" alt="" /></swiper-slide>
        <swiper-slide><img src="./public/java.png" alt="" /></swiper-slide>
        <swiper-slide><img src="./public/escotec.jpg" alt="" /></swiper-slide>
        <swiper-slide><img src="./public/cibernetica.jpg" alt="" /></swiper-slide>
        <swiper-slide><img src="./public/cybersecurity.jpg" alt="" /></swiper-slide>
        <swiper-slide><img src="./public/logica.jpg" alt="" /></swiper-slide>
        <swiper-slide><img src="./public/rocketseat.png" alt="" /></swiper-slide>
      </swiper-container>

    </section>
  );
};

export default Carrossel;
