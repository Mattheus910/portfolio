import "./Header.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { IoMenu } from "react-icons/io5";


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
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <IoMenu />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#link1">Sobre</Dropdown.Item>
          <Dropdown.Item href="#link2">Projetos</Dropdown.Item>
          <Dropdown.Item href="#link3">Contato</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </section>

  )
}

export default Header