import React, {useEffect,useState} from 'react';
import {useNavigate,} from 'react-router-dom';

const PrivateRoute = ({ element, allowedRoles, userRole, ...rest }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect (() => { 
    console.log("Rol del usuario",userRole);
    if(userRole==="default"){
      console.log("Esperando...")
      setIsLoading(true);
    }else{
      if(allowedRoles.includes(userRole)){
        setIsLoading(false); // Indica que la carga ha finalizado
      }
      else{
        setIsLoading(false); // Indica que la carga ha finalizado
      }
    }
  }, [userRole]);
  if (isLoading) {
    // Muestra un componente de carga mientras se determina el rol
    return <div>Cargando...</div>;
  }
  if (allowedRoles.includes(userRole)) {
    return element;
  } else {
    navigate('/accessdenied');
    return null;
  }
};

export default PrivateRoute;
