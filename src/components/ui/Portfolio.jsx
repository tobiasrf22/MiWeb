import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiGulp } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio contenedor2">
      <h2>Portfolio</h2>
      <div className="cards">
        <div className="cardP">
          <h3>Weather Page</h3>
          <div className="technologies">
            <div className="tech react">
              <FaReact size={20} />
              <h4>React</h4>
            </div>
            <div className="tech sass">
              <FaSass size={20} />
              <h4>Sass</h4>
            </div>
            <div className="tech javascript">
              <IoLogoJavascript size={20} />
              <h4>Javascript</h4>
            </div>
            <div className="tech nodejs">
              <FaNodeJs size={20} />
              <h4>NodeJS</h4>
            </div>
          </div>
          <p>Build from scratch, it use openweatherAPI.</p>
          <a
            className="github"
            target="_blank"
            href="https://github.com/tobiasrf22/myweb-api-"
          >
            Github <FaGithub size={20} />
          </a>
          <a
            className="demo"
            target="_blank"
            href="https://weather-react-app-lemon.vercel.app/"
          >
            Live demo <FaExternalLinkAlt size={10} />
          </a>
        </div>
        <div className="cardP">
          <h3>rockedmfesival</h3>
          <div className="technologies">
            <div className="tech javascript">
              <IoLogoJavascript size={20} />
              <h4>Javascript</h4>
            </div>
            <div className="tech gulp">
              <SiGulp size={20} />
              <h4>Gulp</h4>
            </div>
            <div className="tech sass">
              <FaSass size={20} />
              <h4>Sass</h4>
            </div>
          </div>
          <p>
            Gulp, Sass, and JavaScript for automation, styling, and
            functionality.
          </p>
          <a
            className="demo"
            target="_blank"
            href="https://rockedmfesival.netlify.app/"
          >
            Live demo <FaExternalLinkAlt size={10} />
          </a>
        </div>
        <div className="cardP">
          <h3>Python Api</h3>
          <div className="technologies">
            <div className="tech python">
              <FaPython size={20} />
              <h4>Python</h4>
            </div>
          </div>
          <p>
            API developed by me for a personal project, uses tokens for post,
            delete and returns a JSON.
          </p>
          <a
            className="github"
            target="_blank"
            href="https://github.com/tobiasrf22/myweb-api-"
          >
            Github <FaGithub size={20} />
          </a>
          <a className="demo soon" href="#">
            Soon
          </a>
        </div>
        <div className="cardP">
          <h3>Motel booking web</h3>
          <div className="technologies">
            <div className="tech react">
              <FaReact size={20} />
              <h4>React</h4>
            </div>
            <div className='tech sass'>
                        <FaSass size={20} />
                        <h4>Sass</h4>
            </div>
            <div className='tech nodejs'>
                        <FaNodeJs size={20} />
                        <h4>NodeJs</h4>
            </div>
            <div className='tech mongo'>
                        <DiMongodb size={20} />
                        <h4>MongoDB</h4>
            </div>
          </div>
          <p>
            Personal proyect, is redesign for <a href="https://www.mirefugiohotel.com.ar/">this website</a>. Using mongo to get the rooms and the info.
          </p>
          <a
            className="github"
            target="_blank"
            href="https://github.com/tobiasrf22/booking-react-front"
          >
            Github <FaGithub size={20} />
          </a>
          <a
            className="demo"
            target="_blank"
            href="https://booking-react-front.vercel.app/"
          >
            Live demo <FaExternalLinkAlt size={10} />
          </a>
        </div>
        <div className="cardP">
          <h3>Admin web for ecommerce</h3>
          <div className="technologies">
          <div className='tech javascript'>
                        <IoLogoJavascript size={20} />
                        <h4>Javascript</h4>
                    </div>
            <div className='tech nextjs'>
                        <TbBrandNextjs size={20} />
                        <h4>NextJs</h4>
            </div>
            <div className='tech mongo'>
                        <DiMongodb size={20} />
                        <h4>MongoDB</h4>
            </div>
          </div>
          <p>
          Effortlessly manage your e-commerce inventory with our intuitive admin platform linked to a dynamic database.
          </p>
          <a
            className="github"
            target="_blank"
            href="https://github.com/tobiasrf22/ecommerce-admin"
          >
            Github <FaGithub size={20} />
          </a>
          <a
            className="demo soon"
            target="_blank"
            href="#"
          >
            Soon
          </a>
        </div>
      </div>
    </section>
  );
};
