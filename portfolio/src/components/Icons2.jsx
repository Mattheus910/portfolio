import "./Icons2.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Icons2 = () => {
  return (
    <section className="icons2" id="contacts">
      <h2>Contatos</h2>

      <div>
        <button title="Linkedin"><a href="https://www.linkedin.com/in/mattheus910/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></button>
        <button title="Github"><a href="https://github.com/Mattheus910" target="_blank" rel="noopener noreferrer"><FaGithub /></a></button>
        <button title="Email"><a href="mailto:matheus.martins910@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail /></a></button>
        <button title="whatsapp"><a href="https://wa.me/5511973008423" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></button>
      </div>
    </section>
  )
}

export default Icons2