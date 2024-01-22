import { register } from 'swiper/element/bundle';

import "./Carrosel.css";

register();

const Carrossel = () => {

  return (
    <section className='carrosel'>

      <h2>Certificados</h2>

      <swiper-container loop="true">
        <swiper-slide><img src="/fam.jpg" alt="" /></swiper-slide>
        <swiper-slide><img src="/java.png" alt="" /></swiper-slide>
        <swiper-slide><img src="/cibernetica.jpg" alt="" /></swiper-slide>
        <swiper-slide><img src="/cybersecurity.jpg" alt="" /></swiper-slide>
        <swiper-slide><img src="/logica.jpg" alt="" /></swiper-slide>
        <swiper-slide><img src="/rocketseat.png" alt="" /></swiper-slide>
      </swiper-container>

    </section>
  );
};

export default Carrossel;
