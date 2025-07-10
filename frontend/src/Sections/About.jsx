import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <section id="about" className="about-container">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-text">
          <h2>About Me</h2>

          <p>
            I'm <strong>Yaska</strong> — a creative and analytical thinker driven by a deep passion for software engineering and design. I love turning ideas into elegant solutions that solve real-world problems.
          </p>

          <p>
            With a strong foundation in <strong>Frontend and Backend development</strong>, I enjoy building applications using tools like <strong>React, Flask, SQL, and Python</strong>. My approach blends performance with usability, ensuring every product I build is fast, intuitive, and scalable.
          </p>

          <p>
            As a <strong>Graphic and UI/UX Designer</strong>, I have a natural eye for layout, spacing, color, and detail. I believe great design should not just look good — it should feel effortless and guide the user’s journey.
          </p>

          <h3>My Mission</h3>
          <p>
            To empower people, communities, and businesses by building thoughtful digital tools that make life easier, more connected, and more efficient.
          </p>

          <h3>How I Work</h3>
          <ul>
            <li>🧠 I think in systems and design for scalability.</li>
            <li>🤝 I value collaboration, empathy, and lifelong learning.</li>
            <li>🚀 I strive for excellence, not just functionality.</li>
            <li>🧪 I believe in rapid prototyping and feedback loops.</li>
          </ul>

          <h3>Outside of Work</h3>
          <p>
            When I’m not coding or designing, I enjoy exploring new tech trends, sketching UI ideas, watching documentaries, and collaborating on open-source ideas. I'm curious by nature and love connecting with like-minded builders.
          </p>
        </div>

        <div className="about-image">
          <img src="/assets/profile.jpeg" alt="Yaska working" />
        </div>
      </motion.div>
    </section>
  );
}

export default About;
