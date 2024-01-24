import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiGulp } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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
          <p>Build from scratch, it use openweatherAPI</p>
          <a className="github" target="_blank" href="https://github.com/tobiasrf22/myweb-api-">
            Github <FaGithub size={20} />
          </a>
          <a className="demo" target="_blank" href="https://weather-react-app-lemon.vercel.app/">
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
          <a className="demo" target="_blank" href="https://rockedmfesival.netlify.app/">
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
          <a className="github" target="_blank" href="https://github.com/tobiasrf22/myweb-api-">
            Github <FaGithub size={20} />
          </a>
          <a className="demo soon" href="#">
            Soon
          </a>
        </div>
      </div>
    </section>
  );
};
