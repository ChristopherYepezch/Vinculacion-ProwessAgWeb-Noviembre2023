import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import logo from '../imagenes/prowess-logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Función que maneja el evento de scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 0);
    };

    // Agregar el event listener al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Eliminar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navigation-bar ${scrolled ? 'scrolled' : ''}`}>
      <div className={`navigation-container ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <button className={`hamburger-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul className={`navigation-list ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/tienda" onClick={toggleMenu}>
              Tienda
            </Link>
          </li>
          
          <li>
            <Link to="/vendedores" onClick={toggleMenu}>
              Vendedores
            </Link>
          </li>
          <li>
            <Link to="/nosotros" onClick={toggleMenu}>
              ¿Quiénes Somos?
            </Link>
          </li>
          <li>
            <Link to="/sales" onClick={toggleMenu}>
              Ventas
            </Link>
          </li>
          <li>
            <Link to="/product-list" onClick={toggleMenu}>
              Lista de Productos
            </Link>
          </li>
          <li>
            <Link to="/Categories" onClick={toggleMenu}>
              Categorías
            </Link>
          </li>
          <li>
            <Link to="/mi-cuenta" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
          <li>
            <Link to="/carrito" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <div className='cuantity-shopping-cart-container'>
              <span className='cuantity-shopping-cart'>0</span>
            </div>
          </li>
          <li>
            <Link to="/login" onClick={toggleMenu}>
              Iniciar Sesión
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
