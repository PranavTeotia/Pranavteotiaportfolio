import React from 'react'
import Nav from './components/Nav/Nav' 
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Certificates from './components/Certificates/CertificateSection'
import Contact from './components/Contacts/Contact'

function App() {
    return (
    <>
    <Nav />
    <Home/>
    <About/>
    <Projects/>
    <Certificates/>
    <Contact/>

    </>
    )
}

export default App

