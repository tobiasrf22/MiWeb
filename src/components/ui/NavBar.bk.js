import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

export const NavBar = () => {
  const [screenSize, setScreenSize] = useState(
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(
        window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      );
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // Limpia el evento de redimensionamiento cuando el componente se desmonta
    window.removeEventListener('resize', handleResize);
    };
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez después del primer renderizado

  const openNav = () => {
    const nav = document.querySelector('.contenido-header .sidenav-close');
    console.log(nav);
    nav.classList.remove('sidenav-close');
    nav.classList.add('sidenav-open');
  };

  const closeNav = () => {
    const nav = document.querySelector('.contenido-header .sidenav-open');
    console.log(nav);
    nav.classList.remove('sidenav-open');
    nav.classList.add('sidenav-close');
  };

  const changeOverflow=()=>{
    screenSize <= 480 && closeNav();
    document.body.style.overflow = "auto";

  }

  return (
    <div className='header'>
      <div className="contenedor contenido-header">
        <img src="img/logo.png" alt="Logo"></img>
        <nav className={screenSize <= 480 ? 'sidenav-close' : 'navegacion-principal'}>
          <Link className="link"
          to="aboutMe" spy={true}
          smooth={true}
          offset={-100}
          duration={700}
          onClick={changeOverflow}
          >
          About Me</Link>
          <Link className="link"
          to="skills" spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          onClick={changeOverflow}
          >
          Skills</Link>
          <Link className="link"
          to="portfolio" spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          onClick={changeOverflow}
          >
          Portfolio</Link>
          <Link className="link"
          to="education" spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          onClick={changeOverflow}
          >
          Education</Link>
          <Link className="link"
          to="experience" spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          onClick={changeOverflow}
          >
          Experience</Link>
          <Link className={screenSize <= 480 ? 'link contact' : 'link'}
          to="contact" spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          onClick={changeOverflow}
          >
          Contact</Link>
          {screenSize <= 480 && <a href='#' className="closebtn" onClick={closeNav}>X</a>}
        </nav>
        {screenSize <= 480 && <a href='#' className="openBoton" onClick={openNav}>☰</a>}
      </div>
    </div>
  );
};
