import "./Apresentation.css";
import React from 'react';
import Typed from 'typed.js';

const Apresentation = () => {

  const el = React.useRef(null);
  const element = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Hello World!</i> <br> Meu nome é Matheus.',],
      typeSpeed: 100,
      showCursor: false,

    });

    const newTyped = new Typed(element.current, {
      strings: ['Estudante de analise e desenvolvimento de sistemas', 'Apaixonado por tecnologia', 'Futuro Dev'],
      typeSpeed: 100,
      loop: true,

    });

    return () => {
      typed.destroy();
      newTyped.destroy();
    };
  }, []);

  return (

    <section className="apresentation"> 

      <div className="img">
        <img src="./public/desenhoTeste.jpg" alt="" />
      </div>

      <div className="text">
        <span ref={el} />

        <div className="texto"  id="link1">
          <span ref={element} />
        </div>
      </div>


    </section>
  )
}

export default Apresentation