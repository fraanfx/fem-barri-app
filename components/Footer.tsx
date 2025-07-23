import React from 'react'

const Footer = () => {
    const date: Date = new Date();
  return (
    <footer className='footer-container'>
        <a href="">Contacta con nosotros</a>
        <p> © FemBarri {date.getFullYear()}</p>
    </footer>
  )
}

export default Footer