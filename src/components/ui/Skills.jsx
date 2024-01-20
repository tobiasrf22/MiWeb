import React from 'react';
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiGulp } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbFileTypeSql } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";



export const Skills = () => {
    return (
        <section id="skills" className="skills contenedor2">

            <div className="tit_izq">
                <h2>Skills <span>Tools & Technologies</span></h2>
            </div>
            <div className="tit_der">
                <h2>
                    <svg className="icon" width="30" height="11" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="5.5" r="3.5" fill="#bdd4ff" />
                        <circle cx="18" cy="5.5" r="3.5" fill="#bdd4ff" />
                    </svg>
                    Proficient
                    <span>
                        <svg className="icon" width="30" height="11" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="5.5" r="3.5" fill="#bdd4ff" />
                            <circle cx="18" cy="5.5" r="3.5" fill="#6d778a" />
                        </svg>
                        Mid</span>
                </h2>
            </div>

            <div className="bloque">
                <h3>
                    <svg className="icon" width="30" height="11" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="5.5" r="3.5" fill="#bdd4ff" />
                        <circle cx="18" cy="5.5" r="3.5" fill="#bdd4ff" />
                    </svg>
                    Backend
                </h3>
                <div className='technologies'>
                    <div className='tech nodejs'>
                        <FaNodeJs size={20} />
                        <h4>NodeJs</h4>
                    </div>
                    <div className='tech nextjs'>
                        <TbBrandNextjs size={20} />
                        <h4>NextJs</h4>
                    </div>
                    <div className='tech python'>
                        <FaPython size={20} />
                        <h4>Python</h4>
                    </div>
                </div>
            </div>

            <div className="bloque">
                <h3>
                    <svg className="icon" width="30" height="11" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="5.5" r="3.5" fill="#bdd4ff" />
                        <circle cx="18" cy="5.5" r="3.5" fill="#bdd4ff" />
                    </svg>
                    FrontEnd
                </h3>
                <div className='technologies'>
                    <div className='tech react'>
                        <FaReact size={20} />
                        <h4>React</h4>
                    </div>
                    <div className='tech gulp'>
                        <SiGulp size={20} />
                        <h4>Gulp</h4>
                    </div>
                    <div className='tech sass'>
                        <FaSass size={20} />
                        <h4>Sass</h4>
                    </div>
                    <div className='tech javascript'>
                        <IoLogoJavascript size={20} />
                        <h4>Javascript</h4>
                    </div>
                </div>
            </div>

            <div className="bloque">
                <h3>
                    <svg className="icon" width="30" height="11" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="5.5" r="3.5" fill="#bdd4ff" />
                        <circle cx="18" cy="5.5" r="3.5" fill="#6d778a" />
                    </svg>
                    Version Control
                </h3>
                <div className='technologies'>
                    <div className='tech github'>
                        <FaGithub size={20} />
                        <h4>Github</h4>
                    </div>
                </div>
            </div>
            <div className="bloque">
                <h3>
                    <svg className="icon" width="30" height="11" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="5.5" r="3.5" fill="#bdd4ff" />
                        <circle cx="18" cy="5.5" r="3.5" fill="#bdd4ff" />
                    </svg>
                    DB
                </h3>
                <div className='technologies'>
                    <div className='tech sql'>
                        <TbFileTypeSql  size={20} />
                        <h4>SQL</h4>
                    </div>
                    <div className='tech mongo'>
                        <DiMongodb   size={20} />
                        <h4>MongoDB</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}