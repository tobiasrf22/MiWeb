import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

export const Principal = () => {

    const changeOverflow = () => {
        document.body.style.overflow = "auto";
    }
    return (
        <section className="principal">
            <div className="contenido-principal contenedor">
                <h1>Tobias Romero Fara <span>Jr FullStack Developer</span></h1>
                <div class="principal-pequeño">
                    <p>Node</p>
                    <p>Python</p>
                    <p>SCSS</p>
                    <p>SQL</p>
                    <p>Remote</p>
                </div>
                <div className="boton-bajar">
                    <Link className="bajar"
                        to="aboutMe" spy={true}
                        smooth={true}
                        offset={-70}
                        duration={700}
                        onClick={changeOverflow}
                    >
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.0125 19.162L14.8246 17.3398L16.2427 18.7501L12.012 23.0046L7.75726 18.7739L9.16751 17.3557L11.0126 19.1905L10.998 0.997021L12.998 0.995422L13.0125 19.162Z"
                                fill="#BDD4FF" />
                        </svg></Link>
                </div>

            </div>
        </section>
    )
}