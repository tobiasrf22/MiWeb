import React from 'react'
import { AboutMe, Experience, Portfolio, Principal, Skills } from './ui'
import { Education } from './ui/Education'
import { Contact } from './ui/Contact'

const Secciones = () => {
  return (
    <>
        <Principal />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Education />
        <Experience />
        <Contact />
    </>
  )
}

export default Secciones