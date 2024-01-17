import "./Icons.css";
import {  FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";

const Icons = () => {
  return (
    <section className="icons">
        <button title="Html"><FaHtml5 /></button>
        <button title="Css"><FaCss3 /></button>
        <button title="JavaScript"><FaJs /></button>
        <button title="React"><FaReact /></button>
    </section>
  )
}

export default Icons