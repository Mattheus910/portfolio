import "./Icons.css";
import {  FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";

const Icons = () => {
  return (
    <section className="icons">
        <h2>Tecnologias</h2>
        <div>
          <button title="Html"><FaHtml5 /></button>
          <button title="Css"><FaCss3 /></button>
          <button title="JavaScript"><FaJs /></button>
          <button title="React"><FaReact /></button>
        </div>
    </section>
  )
}

export default Icons