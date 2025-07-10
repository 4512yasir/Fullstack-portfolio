import './Experience.css';
import { motion } from 'framer-motion';

const EducationExperience = () => {
  return (
    <section id="education" className="edu-exp-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Education & Experience
      </motion.h2>

      <div className="timeline-container">
        {/* Education Column */}
        <div className="timeline-column">
          <h3 className="column-title">Education</h3>
          <ul className="timeline">
            <li>
              <h4>Software & Mobile Development</h4>
              <p>PLP (Power Learn Project)</p>
              <span className="date">Ongoing</span>
            </li>
            <li>
              <h4>Software Engineering</h4>
              <p>Moringa School</p>
              <span className="date">Feb 3, 2025 – Aug 1, 2025</span>
            </li>
            <li>
              <h4>Frontend Development</h4>
              <p>Nairobits Trust</p>
              <span className="date">July 3, 2022 – Dec 13, 2022</span>
            </li>
            <li>
              <h4>Graphic & UI/UX Design</h4>
              <p>Nairobits Trust</p>
              <span className="date">Jan 3, 2022 – May 1, 2022</span>
            </li>
          </ul>
        </div>

        {/* Experience Column */}
        <div className="timeline-column">
          <h3 className="column-title">Experience</h3>
          <ul className="timeline">
            <li>
              <h4>Library Management System</h4>
              <span className="date">June 1 – June 30, 2025</span>
              <p>A desktop/web app for managing book inventory, users, and lending operations.</p>
            </li>
            <li>
              <h4>Crushline</h4>
              <span className="date">April 28 – May 20, 2025</span>
              <p>A minimalist social experiment-style app for connecting users anonymously.</p>
            </li>
            <li>
              <h4>Link’d In Love</h4>
              <span className="date">Team Project</span>
              <p>
                A full-featured dating platform built in collaboration with a team of 4.
                Features include profiles, matching algorithm, chat, and personalization.
              </p>
            </li>
            <li>
              <h4>Chama Manager</h4>
              <span className="date">Ongoing</span>
              <p>
                A web-based financial tool for managing contributions, loans, and meetings in a Chama group.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
