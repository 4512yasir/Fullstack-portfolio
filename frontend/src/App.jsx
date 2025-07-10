import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './Sections/Home'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Welcome from './Sections/Welcome'
import EducationExperience from './Sections/Experience'
import Portfolio from './Sections/project'
import Contact from './Sections/contact'

function App() {
  

  return (
    <div className='App'>
     <Sidebar/>
     <main className='main-content'>
      <section id="welcome"><Welcome/></section>
      <section id="home"><Home/></section>
      <section id="about"><About/></section>
      <section id="education"><EducationExperience/></section>
      <section id="skills"><Skills/></section>
      <section id="projects"><Portfolio/></section>
     <section id="contact"><Contact/></section>
     </main>

    </div>
  )
}

export default App
