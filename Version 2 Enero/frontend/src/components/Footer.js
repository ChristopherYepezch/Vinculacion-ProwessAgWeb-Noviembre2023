import React from 'react';
import './Footer.css';
import facebook from '../imagenes/facebook.png';
import instagram from '../imagenes/ig.png';
import mundo from '../imagenes/mundo.png';
import tiktok from '../imagenes/tiktok.png';
import whatsapp from '../imagenes/whatsapp.png';

function Footer() {
  return (
    <footer className="footer">
      <p>DAR CLIC EN ICONO DE REDES SOCIALES PARA MAS INFORMACION</p>
      <div className="footer-content">
        <a href="https://www.facebook.com/profile.php?id=100094846861007&mibextid=gik2fB" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://instagram.com/prowessec7?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://prowessec.com" target="_blank" rel="noopener noreferrer">
          <img src={mundo} alt="Mundo" />
        </a>
        <a href="https://www.tiktok.com/@prowess.ec?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
          <img src={tiktok} alt="Tiktok" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=593992847677" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <p>Todos los derechos reservados &copy; {new Date().getFullYear()} Prowess</p>
        <p>Revisa nuestros <a href='terms&conditions'>Términos y Condiciones</a></p>
      </div>
    </footer>
  );
}

export default Footer;
