import { FaGithub, FaEnvelope, FaPhone, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import './welcome.css';

const Welcome = () => {
  return (
    <section id="welcome">
      <h1>Welcome to My Portfolio</h1>

      <p>
        Crafting software that solves real-world problems and helps communities thrive.
      </p>

      <div className="icon-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:youremail@example.com">
          <FaEnvelope />
        </a>
        <a href="tel:+254700000000">
          <FaPhone />
        </a>
        <a href="https://wa.me/254700000000" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Welcome;
