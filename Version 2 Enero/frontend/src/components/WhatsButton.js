/*import React from "react";
import './WhatsButton.css';
import whatsapp from '../imagenes/whatsapp.png';

function WhatsButton({ phoneNumber }) {
  return (
    <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
      <button className="btn btn-success btn-whatsapp">
        <i className="fab fa-whatsapp"></i> ¡Contáctanos!
        <div className="image-whatsapp">
          <img src={whatsapp} alt="Whatsapp" />
        </div>
      </button>
    </a>
  );
}

export default WhatsButton;*/
//0999582927


import React from "react";
import './WhatsButton.css';
import whatsapp from '../imagenes/whatsapp.png';

function WhatsButton() {
  const phoneNumber = '+593997384553';  // Coloca aquí el número de teléfono deseado
  const message = 'Hola, hemos recibido una compra de su producto. En breve llegará la confirmación.';
  const imageSrc = 'https://ibb.co/6JMyffk';  // Coloca aquí la URL de la imagen que deseas enviar

  const sendMessage = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}%0A%0A${encodeURIComponent('Factura de compra:')}%0A%0A${encodeURIComponent(imageSrc)}`;
    window.open(url, '_blank');
  };

  return (
    <button className="btn btn-success btn-whatsapp" onClick={sendMessage}>
      <i className="fab fa-whatsapp"></i> ¡Contáctanos!
      <div className="image-whatsapp">
        <img src={whatsapp} alt="Whatsapp" />
      </div>
    </button>
  );
}

export default WhatsButton;
