import "./Header.css";


const Header = () => {
  return (
    <section className="header">
        <div>
            <h2>Portfolio</h2>
        </div>  
        <nav>
            <ul>
                <li><a href="#link1">Sobre</a></li>
                <li><a href="#link2">Projetos</a></li>
                <li><a href="#link3">Contato</a></li>
            </ul>
        </nav>
    </section>

  )
}

export default Header