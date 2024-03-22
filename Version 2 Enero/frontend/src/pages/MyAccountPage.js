import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/ModalAccountPage';
import './MyAccountPage.css';
import { checkToken } from '../services/auth';

function MyAccountPage(props) {
  const { setIsLoggedIn, setRole } = props;
  const [userType, setUserType] = useState('vendor');
  const [user, setUser] = useState([]);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("token removido");
    setIsLoggedIn(false);
    setRole('');
    navigate('/login');
  }

  useEffect(() => {
    console.log()
    if (token) {
      showUserData(token);
    }
  }, []);

  const showUserData = async (token) => {
    try {
      const res = await checkToken(token);
      const data = res.data;
      setUser(data);
      setUserType(data.rol);
    } catch (error) {
      console.log(error);
    }
  }

  const handleOpenPurchaseModal = () => {
    setIsPurchaseModalOpen(true);
  };

  const handleModalClose = () => {
    setIsPurchaseModalOpen(false);
  };


  return (
    <div className="my-account-page">
      <div className={`my-account-container ${userType === 'vendor' ? 'vendor-info' : 'buyer-info'}`}>
        <div className='my-account-img'>
          <img src={user.imagenUsuario} alt={user.nombreUsuario} className='info-image' />
        </div>
        <div className='my-account-info'>
          <h2>{user.nombreUsuario} {user.nombreUsuarioS} {user.apellidoUsuario} {user.apellidoUsuarioS} </h2>
          <p><strong>Provincia: </strong>{user.provinciaUsuario}</p>
          <p><strong>Ciudad: </strong> {user.ciudadUsuario}</p>
          <p><strong>Direccion: </strong> {user.direccionUsuario}</p>
          {userType === 'buyer' && (
            <div className='my-account-info'>
              <p><strong>Estado de Compra: </strong> {user.purchaseStatus}</p>
              <span className='span-purchases' onClick={handleOpenPurchaseModal}>
                <h4>Ver compras</h4>
              </span>
            </div>
          )}
          {userType === 'vendor' && (
            <div className='my-account-info'>
              <a href={`https://wa.me/${user.telefonoUsuario}`}>
                <button className="whatsapp-button">WhatsApp</button>
              </a>
            </div>
          )}
        </div>
        {/*
        <div className='my-account-text'>
          {userType === 'vendor' && (
            <>
              <h2>Informacion adicional</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit magnis tristique est taciti congue, elementum curae justo turpis cras primis nisi tincidunt tortor mus vehicula. Suscipit ut eros viverra nulla elementum mollis facilisi natoque hac, eu arcu fringilla imperdiet ante nisi tincidunt class. Parturient nibh egestas curae hendrerit rutrum purus nec tempus vehicula pretium id luctus quam ante, metus posuere suscipit platea facilisis et erat sed viverra sagittis scelerisque enim turpis.</p>
            </>
          )}
        </div>
          */}
      </div>
      <div className="user-type-buttons">
        <button className='user-type-button' onClick={() => handleLogout()}>Cerrar Sesión</button>
      </div>
    </div>
  );
}

export default MyAccountPage;
