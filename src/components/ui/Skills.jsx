import React from 'react'

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
            <p>Node.Js, Next, Laravel, PHP.</p>

        </div>

        <div className="bloque">
            <h3>
                <svg className="icon" width="30" height="11" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="5.5" r="3.5" fill="#bdd4ff" />
                    <circle cx="18" cy="5.5" r="3.5" fill="#bdd4ff" />
                </svg>
                FrontEnd
            </h3>
            <p>Wordpress, React, Gulp, Scss, JavaScript, TypeScript.</p>

        </div>

        <div className="bloque">
            <h3>
                <svg className="icon" width="30" height="11" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="5.5" r="3.5" fill="#bdd4ff" />
                    <circle cx="18" cy="5.5" r="3.5" fill="#6d778a" />
                </svg>

                Version Control
            </h3>
            <p>Git, Github, Gitlab.</p>

        </div>
        <div className="bloque">
            <h3>
                <svg className="icon" width="30" height="11" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="5.5" r="3.5" fill="#bdd4ff" />
                    <circle cx="18" cy="5.5" r="3.5" fill="#bdd4ff" />
                </svg>
                DB
            </h3>
            <p>SQL, MongoDB.</p>

        </div>

        <div className="bloque">
            <h3>
                <svg className="icon" width="30" height="11" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="5.5" r="3.5" fill="#bdd4ff" />
                    <circle cx="18" cy="5.5" r="3.5" fill="#6d778a" />
                </svg>
                DataScience
            </h3>
            <p>Data analytics, data transformations, medium complex ML models.</p>

        </div>
    </section>
  )
}