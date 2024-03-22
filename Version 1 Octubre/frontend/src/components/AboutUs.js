import React from 'react';
import './AboutUs.css';

import vision from '../imagenes/vision.jpg';
import ObjG from '../imagenes/obj.jpg';
import ObjE from '../imagenes/objEs.jpg';
import Quienes from '../imagenes/quienes_somos.jpeg';
import mision from '../imagenes/MISION.jpeg';

function AboutUs() {
  return (
    <div className='AboutUsInfo'>
      <h1>ACERCA DE NOSOTROS</h1>
      <p>En esta sección podrás conocer más al respecto de quiénes somos, conjuntamente con la misión y visión del proyecto realizado a su vez de la unidad de vinculación de departamento de Ciencias Económicas, Administrativas y de Comercio - DCEA.</p>
      <div className='about-section'>
        <h2>¿Quienes Somos?</h2>
        <br/>
        <p>Prowess Agronomia es una plataforma creada para aumentar el desarrollo y comercialización de la producción agrícola de todo el país. Nuestro equipo trabaja arduamente para difundir el concepto de la agronomía como sistema.</p>
        <br/>
        <img src={Quienes} alt="Imagen Quienes Somos" className="about-image" />
      </div>
      
      <div className='about-section'>
        <div className='mision'>
          <h2>Misión</h2>
          <p>Ayudar al crecimiento económico y productivo de los agricultores, siendo Prowess Agrícola un intermediario directo con buena capacidad de negociación y desarrollo de estrategias de comercialización, el mismo que se encargará de la distribución de los productos, en buenas condiciones sin perder su calidad al momento de ser trasladados.</p>
          <img src={mision} alt="Imagen Misión" className="about-image" />
        </div>
        <div className='mision'>
          <h2>Visión</h2>
          <p>Al 2024 ser una plataforma estable y ser considerados por nuestros benefactores como una opción viable para comercializar sus productos a todo el país.</p>
          <img src={vision} alt="Imagen Visión" className="about-image" />
        </div>
      </div>
      
      <div className='about-section'>
        <div className='objetives'>
          <h2>Objetivos Generales</h2>
          
          <p>Establecer alianzas con los productores para que a través de Prowess Agrícola puedan incrementar exponencialmente las ventas de sus productos agrícolas ganando así mayor mercado de consumo.</p>
          <img src={ObjG} alt="Imagen Objetivos Generales" className="about-image" />
        </div>
        <div className='objetives'>
          <h2>Objetivos Específicos</h2>
          <ul>
            <li>Incrementar los mecanismos de comercialización de productos.</li>
            <li>Impulsar la compra y venta de productos mediante la plataforma Prowess Agrícola.</li>
            <li>Desarrollar nuevas estrategias de negociación y comercialización con los consumidores.</li>
          </ul>
          <img src={ObjE} alt="Imagen Objetivos Específicos" className="about-image" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
