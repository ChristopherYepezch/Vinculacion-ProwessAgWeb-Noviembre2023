import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HomePage.css';
import image1 from '../imagenes/denegado.png'
function HomePage() {
  const images = [
    require('../imagenes/agr3.jpg'),
    require('../imagenes/agr2.jpg'),
    require('../imagenes/agr5.jpg'),
    require('../imagenes/agr4.jpg'),
    require('../imagenes/agr1.jpg'),
  ];

  return (
    <div className="home-page">

      <div className='part2'>
        <p className='p1'>Acceso Denegado</p>
        <p className= 'p2'>No puedes acceder a esa pagina, ya que el rol que cumples tiene restringido ciertos lugares.</p>
        <p className= 'p2'>Gracias por tu comprensión</p>
        <img src={image1} alt="Imagen 1" />
      </div>

      <div className="home-page-subtitle">
          <center>
          <Link to="/registro">
          <button className='RegistroHome'>Registro</button>
        </Link>
        <Link to="/Login">
          <button className='RegistroHome'>Iniciar Sesion</button>
        </Link>
        </center>
        </div>
    </div>
  );
}

export default HomePage;
