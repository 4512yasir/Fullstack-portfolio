import { useState, useEffect } from 'react';
import {
  FaHome, FaUserAlt, FaCode, FaProjectDiagram, FaEnvelope, FaBars, FaTimes,
  FaGraduationCap, FaSignInAlt
} from 'react-icons/fa';
import './sidebar.css';

const sections = [
  { id: 'welcome', label: 'Welcome', icon: <FaSignInAlt className="icon" /> },
  { id: 'home', label: 'Home', icon: <FaHome className="icon" /> },
  { id: 'about', label: 'About', icon: <FaUserAlt className="icon" /> },
  { id: 'education', label: 'Education & Experience', icon: <FaGraduationCap className="icon" /> },
  { id: 'skills', label: 'Skills', icon: <FaCode className="icon" /> },
  { id: 'portfolio', label: 'Portfolio', icon: <FaProjectDiagram className="icon" /> },
  { id: 'contact', label: 'Contact', icon: <FaEnvelope className="icon" /> },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <button className="hamburger" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <img src="/mylogo.png" alt="mylogo" />
        </div>
        <nav className="sidebar-menu">
          {sections.map(({ id, label, icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              onClick={closeSidebar}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
