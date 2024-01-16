import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";



export const Contact = () => {
    const downloadFile = () => {
        const fileUrl = '../../../public/things/TobiasRomeroFara_Resume.pdf';
        const fileName = 'TobiasRomeroFara_Resume.pdf';
      
        fetch(fileUrl)
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
          });
      }
    return (
        <section id="contact" class="contact contenedor2">
            <div className="contenido">
                <h2>Contact me</h2>
                <p>For employment, I prefer:</p>
                <ul>
                    <li>Full remote or hybrid</li>
                    <li>FullStack backend/frontend</li>
                    <li>Node.js, React, Next, Wordpress, etc</li>
                </ul>
                <div className="links">
                    <button onClick={downloadFile}>Resume</button>
                    <a href="mailto: tobiasrf22@gmail.com" target="_blank">
                        <CiMail className='icon' size={32}/>
                    </a>
                    <a href="https://www.linkedin.com/in/tobias-fara-08b899297/" target="_blank">
                        <FaLinkedinIn className='icon' size={32} />
                    </a>
                </div>
            </div>

        </section>
    )
}