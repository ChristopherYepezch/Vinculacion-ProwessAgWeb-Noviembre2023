import React, { useState } from 'react';
import {Navigate, redirect, Link} from 'react-router-dom';
import './Login.css'; // Importa el archivo de estilos CSS


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    fetch('http://localhost:5000/fb/usuario/login', {
      method: 'POST',
      body: formData
    })
      .then((response) => {
        if (response.ok) {
          console.log("Login exitoso");
          
        } else {
          console.error('Error al agregar el proveedor en el servidor');
        }
      })
      .catch((error) => {
        console.error('Error de red al agregar el proveedor', error);
      });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          className="login-input"
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="login-input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login-button" type="submit">Iniciar sesión</button>
      </form>
    <div className="login-message">
        <p>¿Necesitas ayuda con tu cuenta? <a href="#">Recuperar cuenta</a></p>
        <p>¿Olvidaste tu contraseña? <a href="#">Recuperar contraseña</a></p>
      </div>
    </div> 
  );
}

export default Login;
