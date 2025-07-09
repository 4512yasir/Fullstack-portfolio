import { useState, useEffect } from 'react';
import {
  FaHome, FaUserAlt, FaCode, FaProjectDiagram, FaEnvelope, FaBars, FaTimes
} from 'react-icons/fa';
import './sidebar.css';

const sections = ['home', 'about', 'skills', 'projects', 'contact'];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  // Track scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust this value if needed
    );

    sections.forEach(id => {
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
          {sections.map(id => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              onClick={closeSidebar}
            >
              {id === 'home' && <><FaHome className="icon" /><span>Home</span></>}
              {id === 'about' && <><FaUserAlt className="icon" /><span>About</span></>}
              {id === 'skills' && <><FaCode className="icon" /><span>Skills</span></>}
              {id === 'projects' && <><FaProjectDiagram className="icon" /><span>Projects</span></>}
              {id === 'contact' && <><FaEnvelope className="icon" /><span>Contact</span></>}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
