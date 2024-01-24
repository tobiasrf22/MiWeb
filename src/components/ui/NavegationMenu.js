import React from "react";
import { Link } from "react-scroll";
import { FaUserCircle } from "react-icons/fa";
import { FaHeadSideVirus } from "react-icons/fa6";
import { MdDevices } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { useState,useEffect } from "react";

const NavegationMenu = () => {
  const changeOverflow = () => {
    document.body.style.overflow = "auto";
  };
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

  return (
    <div className="navmenu">
      <Link
        className="link"
        to="aboutMe"
        spy={true}
        smooth={true}
        offset={-100}
        duration={700}
        onClick={changeOverflow}
      >
        <FaUserCircle size={20} />
        About Me
      </Link>
      <Link
        className="link"
        to="skills"
        spy={true}
        smooth={true}
        offset={-150}
        duration={1000}
        onClick={changeOverflow}
      >
        <FaHeadSideVirus size={20} />
        Skills
      </Link>
      <Link
        className="link"
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-250}
        duration={1000}
        onClick={changeOverflow}
      >
        <MdDevices size={20} />
        Portfolio
      </Link>
      <Link
        className="link"
        to="education"
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000}
        onClick={changeOverflow}
      >
        <FaBookOpen size={20} />
        Education
      </Link>
      <Link
        className="link"
        to="experience"
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000}
        onClick={changeOverflow}
      >
        <MdOutlineWork size={20} />
        Experience
      </Link>
      <Link
        className="link"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
        onClick={changeOverflow}
      >
        <MdContactMail size={20} />
        Contact
      </Link>
    </div>
  );
};

export default NavegationMenu;
