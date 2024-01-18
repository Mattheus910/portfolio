import "./Apresentation.css";
import React from 'react';
import Typed from 'typed.js';

const Apresentation = () => {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Hello World!</i> <br> Meu nome é Matheus.'],
      typeSpeed: 50,

    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    
    <section className="apresentation">

      <div>
        <img src="./public/desenho.jpg" alt="" />
      </div>

      <div className="text">
        <span ref={el} />
      </div>
    
    </section>
  )
}

export default Apresentation