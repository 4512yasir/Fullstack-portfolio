import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  

  return (
    <div className='App'>
     <Sidebar/>
     <main style={{ marginLeft: '180px', padding: '1rem' }}>
      <section id="home">...</section>
      <section id="about">...</section>
      <section id="skills">...</section>
      <section id="projects">...</section>
     <section id="contact">...</section>
     </main>

    </div>
  )
}

export default App
