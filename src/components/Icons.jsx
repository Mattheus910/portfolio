import "./Icons.css";
import {  FaCss3, FaDatabase, FaGit, FaGithub, FaHtml5, FaJava, FaJs, FaReact } from "react-icons/fa";

const Icons = () => {
  return (
    <section className="icons">
        <h2>Tecnologias</h2>
        <div>
          <button title="Html"><FaHtml5 /></button>
          <button title="Css"><FaCss3 /></button>
          <button title="JavaScript"><FaJs /></button>
          <button title="React"><FaReact /></button>
          <button title="Java"><FaJava /></button>
          <button title="Git"><FaGit /></button>
          <button title="SQL"><FaDatabase /></button>
        </div>
    </section>
  )
}

export default Icons