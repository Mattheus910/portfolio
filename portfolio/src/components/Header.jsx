import "./Header.css";


const Header = () => {
  return (
    <section className="header">
        <div>
            <h2>Portfolio</h2>
        </div>  
        <nav>
            <ul>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contacts">Contato</a></li>
            </ul>
        </nav>
    </section>

  )
}

export default Header