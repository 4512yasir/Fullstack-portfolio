import './contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <div className="contact-container">
        {/* Contact Info & Icons */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            I'm always open to collaboration, freelance projects, or just having a chat!
            Let’s build something impactful together.
          </p>
          <div className="contact-icons">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:youremail@example.com">
              <FaEnvelope />
            </a>
            <a href="https://wa.me/254700000000" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="tel:+254700000000">
              <FaPhone />
            </a>
          </div>
        </motion.div>

        {/* Contact Form (Formspree) */}
        <motion.form
          className="contact-form"
          action="https://formspree.io/f/mrbknpgw"
          method="POST"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
