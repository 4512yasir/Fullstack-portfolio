import './Project.css';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaVideo } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Library Management System',
    category: 'Solo',
    description: 'Manage books, users, lending operations with Flask + SQLite.',
    image: '/assets/library.png',
    github: 'https://github.com/yourusername/library-system',
    live: '',
    video: '',
  },
  {
    title: 'Crushline',
    category: 'Solo',
    description: 'Anonymous social platform to connect and express.',
    image: '/assets/crushline.png',
    github: 'https://github.com/yourusername/crushline',
    live: '',
    video: 'https://youtu.be/example_crushline',
  },
  {
    title: 'Link’d In Love',
    category: 'Team',
    description: 'Team-built dating platform with matching, chat, and profiles.',
    image: '/assets/linkdinlove.png',
    github: 'https://github.com/yourusername/linkdinlove',
    live: '',
    video: 'https://youtu.be/example_linkdinlove',
  },
  {
    title: 'Chama Manager',
    category: 'Ongoing',
    description: 'Group-based financial manager for savings, loans, and meetings.',
    image: '/assets/chama.png',
    github: 'https://github.com/yourusername/chama-manager',
    live: '',
    video: '',
  },
];

const categories = ['All', 'Solo', 'Team', 'Ongoing'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="section-title">Portfolio</h2>

      {/* Category Filter Buttons */}
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="portfolio-grid">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              className="portfolio-card"
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub /> Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
                {project.video && (
                  <a href={project.video} target="_blank" rel="noreferrer">
                    <FaVideo /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
