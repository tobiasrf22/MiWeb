import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';    

export const AboutMe = () => {
    const [ref, inView] = useInView();

      useEffect(() => {
        if (inView) {
          // Obtén la referencia al elemento con la clase 'navmenu'
          console.log("hola aboutme")
          const navMenuElement = document.querySelector('.navmenu');
    
          // Agrega la clase 'visible' si el elemento existe y aún no tiene la clase
          navMenuElement.classList.remove('noVisible');
            navMenuElement.classList.add('visible');
          
        }
        
      }, [inView]);
  return (
    <>
    <section id="aboutMe" className="aboutMe contenedor2" ref={ref}>
        <h2>About me</h2>
        <div className="aboutMe_items">
            <ul>
                <li>6 years studying frontend and backend technologies</li>
                <li>2 years in telecommunications area</li>
                <p>I am sociable, driven, and have excellent interpersonal abilities. I am known for being proactive,
                    adaptable, and cooperative.</p>
            </ul>
            <img src="img/foto cv.jpg" alt="" />
        </div>
        <div className="aboutMe_tabla">
            <div className="bloque">
                <p>Skilled and dedicated software engineer with a large experience studying frontend development in
                    applications and web portals.</p>
            </div>
            <div className="bloque">
                <p>My education at a technical high school in computer science provided me with a solid understanding of
                    programming in different areas, laying the groundwork for my future career in technology.</p>
            </div>
            <div className="bloque">
                <p>Highly motivated and adaptable individual with a passion for problem-solving and a strong work ethic.
                    Possess excellent communication and teamwork skills, with a proactive approach to learning and a
                    keen attention to detail.</p>
            </div>
        </div>
    </section>
    </>
  )
}