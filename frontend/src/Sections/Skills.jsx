import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import {
  FaCodeBranch, FaLaptopCode, FaTools, FaFlask, FaRocket, FaDatabase
} from 'react-icons/fa';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiPython, SiSqlite, SiSqlalchemy, SiNextdotjs, SiFirebase, SiFlutter, SiPostgresql,
  SiGit, SiGithub, SiFigma
} from 'react-icons/si';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {/* Frontend */}
        <motion.div className="skills-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <h3><FaLaptopCode className="icon" /> Frontend</h3>
          <ul>
            <li><SiHtml5 className="skill-icon" /> HTML5</li>
            <li><SiCss3 className="skill-icon" /> CSS3</li>
            <li><SiJavascript className="skill-icon" /> JavaScript</li>
            <li><SiReact className="skill-icon" /> React</li>
            <li><SiTailwindcss className="skill-icon" /> TailwindCSS</li>
          </ul>
        </motion.div>

        {/* Backend & DB */}
        <motion.div className="skills-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}>
          <h3><FaDatabase className="icon" /> Backend & DB</h3>
          <ul>
            <li><SiPython className="skill-icon" /> Python</li>
            <li><FaFlask className="skill-icon" /> Flask</li>
            <li><SiSqlite className="skill-icon" /> SQLite</li>
            <li><SiSqlalchemy className="skill-icon" /> SQLAlchemy</li>
          </ul>
        </motion.div>

        {/* Soft / Dev Skills */}
        <motion.div className="skills-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <h3><FaTools className="icon" /> Developer Skills</h3>
          <ul>
            <li><SiGit className="skill-icon" /> Git</li>
            <li><SiGithub className="skill-icon" /> GitHub</li>
            <li><SiFigma className="skill-icon" /> Figma</li>
            <li><FaCodeBranch className="skill-icon" /> Collaboration</li>
          </ul>
        </motion.div>

        {/* Ongoing */}
        <motion.div className="skills-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          <h3><FaRocket className="icon" /> Ongoing</h3>
          <ul>
            <li><SiNextdotjs className="skill-icon" /> Next.js</li>
            <li><SiFlutter className="skill-icon" /> Flutter</li>
            <li><SiFirebase className="skill-icon" /> Firebase</li>
            <li><SiPostgresql className="skill-icon" /> PostgreSQL</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
