import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { FaDownload, FaCode, FaPaintBrush, FaLaptopCode, FaObjectGroup } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import './Home.css';

function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="home-container">
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: '#f9fafb' },
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            color: { value: '#3b82f6' },
            links: {
              enable: true,
              color: '#3b82f6',
              distance: 150,
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            shape: { type: 'circle' },
            size: { value: 3 },
          },
          detectRetina: true,
        }}
        className="particles"
      />

      {/* Intro */}
      <motion.div
        className="intro-text"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Hi, I’m <span className="name">Yaska</span> 👋
        </h1>
        <h2>
          <Typewriter
            options={{
              strings: [
                'Frontend Developer',
                'Backend Developer',
                'UI/UX Designer',
                'Graphic Designer'
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 40,
            }}
          />
        </h2>

        <p>
          I love building thoughtful web experiences and learning how real products are made.
          I'm currently deepening my skills in Flask, React, and clean database design.
        </p>

        <div className="buttons">
          <a href="#portfolio" className="btn">View Projects</a>
          <a href="/assets/resume.pdf" className="btn" download>
            <FaDownload style={{ marginRight: '8px' }} />
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="profile-pic"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/assets/profile.jpeg" alt="Yaska Profile" />
      </motion.div>

      {/* What I Do */}
      <motion.div
        className="what-i-do"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h3>What I Do</h3>
        <div className="grid">
          <div className="card">
            <FaLaptopCode className="card-icon" />
            <h4>Frontend Developer</h4>
            <p>Building responsive, accessible, and performant user interfaces using React, HTML, CSS, and JavaScript.</p>
          </div>
          <div className="card">
            <FaCode className="card-icon" />
            <h4>Backend Developer</h4>
            <p>Designing and building scalable backends with Python, Flask, REST APIs, and database logic.</p>
          </div>
          <div className="card">
            <FaObjectGroup className="card-icon" />
            <h4>UI/UX Designer</h4>
            <p>Designing intuitive user flows and clean wireframes that improve user experience.</p>
          </div>
          <div className="card">
            <FaPaintBrush className="card-icon" />
            <h4>Graphic Designer</h4>
            <p>Creating modern graphics, logos, and visuals that enhance brand identity.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
