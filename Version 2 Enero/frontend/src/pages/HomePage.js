import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HomePage.css';
import image1 from '../imagenes/24.png'
import image2 from '../imagenes/info.png'
import image3 from '../imagenes/crecimiento.png'

function HomePage(props) {
  const [logged, setLogged] = useState(false);
  const [role, setRole] = useState("");


  const images = [
    require('../imagenes/agr3.jpg'),
    require('../imagenes/agr2.jpg'),
    require('../imagenes/agr5.jpg'),
    require('../imagenes/agr4.jpg'),
    require('../imagenes/agr1.jpg'),
    require('../imagenes/agr.jpg'),
  ];

  useEffect(() => {
    if (props.isLoggedIn) {
      setLogged(true);
      setRole(props.role);
    }
    if (!props.isLoggedIn) {
      setLogged(false);
      setRole("");
    }
  }, [props.isLoggedIn]);

  return (
    <div className="home-page">
      <div className="home-page-content">
        <div className="home-page-subtitle">
          <center>
            <h3>Prowess Agrícola</h3>
            <p1>Descubre nuestra selección de productos agrícolas, cultivados con esmero y dedicación para ofrecerte lo mejor de la naturaleza.</p1><br/><br/>
            <p1>Nutriendo tu vida, del campo a  tu mesa.</p1><br/><br/>
            {logged ? (
              <h3>Hola bienvenido</h3>
            ) : (
              <>
                <Link to="/registro">
                  <button className='RegistroHome'>Registro</button>
                </Link>
                <Link to="/Login">
                  <button className='RegistroHome'>Iniciar Sesion</button>
                </Link>
              </>
            )}
          </center>
        </div>
        <div className="home-page-carousel">
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className='part2'>
        <br/>
        <br/>
        <br/>
        <h1>COMPRA Y VENTA DE LOS MEJORES PRODUCTOS DEL PAÌS</h1>

      </div>
      <div className="paragraphs-container">
        <div className="paragraph">
          <img src={image1} alt="Imagen 1" />
          <p>Disponibilidad 24/7: Tu sitio web permite a los clientes explorar y comprar productos en cualquier momento, incluso fuera de horario comercial.</p>
        </div>
        <div className="paragraph">
          <img src={image2} alt="Imagen 2" />
          <p>Información detallada: Ofrece info detallada por producto para ayudar a los clientes a decidir y generar confianza en tu marca.</p>
        </div>
        <div className="paragraph">
          <img src={image3} alt="Imagen 3" />
          <p>Presencia en línea crucial hoy día. Un sitio web robusto favorece el crecimiento sostenido de tu negocio agrícola a largo plazo.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
