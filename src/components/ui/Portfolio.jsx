import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";



export const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio contenedor2">
      <h2>Portfolio</h2>
      <div className='cards'>
        <div className='card'>
          <h3>Weather Page</h3>
          <h4>React, Api, Sass</h4>
          <p>Build from scratch, it use openweatherAPI</p>
          <a target="_blank" href='https://weather-react-app-lemon.vercel.app/'>Live demo <FaExternalLinkAlt size={10} /></a>
        </div>
        <div className='card'>
          <h3>rockedmfesival</h3>
          <h4>Javascript, Gulp, Sass</h4>
          <p>Gulp, Sass, and JavaScript for automation, styling, and functionality.</p>
          <a target="_blank" href='https://rockedmfesival.netlify.app/'>Live demo <FaExternalLinkAlt size={10} /></a>
        </div>
      </div>
    </section>
  )
}