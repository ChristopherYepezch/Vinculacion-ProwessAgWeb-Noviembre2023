import React, { useState } from 'react';
import './Register.css'; // Importa el archivo de estilos CSS

const provinces = [
  { "name": "Azuay", "cities": ["Cuenca"] },
  { "name": "Bolívar", "cities": ["Guaranda"] },
  { "name": "Cañar", "cities": ["Azogues"] },
  { "name": "Carchi", "cities": ["Tulcán"] },
  { "name": "Chimborazo", "cities": ["Riobamba"] },
  { "name": "Cotopaxi", "cities": ["Latacunga"] },
  { "name": "El Oro", "cities": ["Machala"] },
  { "name": "Esmeraldas", "cities": ["Esmeraldas"] },
  { "name": "Galápagos", "cities": ["Puerto Baquerizo Moreno"] },
  { "name": "Guayas", "cities": ["Guayaquil"] },
  { "name": "Imbabura", "cities": ["Ibarra"] },
  { "name": "Loja", "cities": ["Loja"] },
  { "name": "Los Ríos", "cities": ["Babahoyo"] },
  { "name": "Manabí", "cities": ["Portoviejo"] },
  { "name": "Morona Santiago", "cities": ["Macas"] },
  { "name": "Napo", "cities": ["Tena"] },
  { "name": "Orellana", "cities": ["Francisco de Orellana"] },
  { "name": "Pastaza", "cities": ["Puyo"] },
  { "name": "Pichincha", "cities": ["Quito"] },
  { "name": "Santa Elena", "cities": ["Santa Elena"] },
  { "name": "Santo Domingo de los Tsáchilas", "cities": ["Santo Domingo"] },
  { "name": "Sucumbíos", "cities": ["Nueva Loja"] },
  { "name": "Tungurahua", "cities": ["Ambato", "Pelileo", "Cevallos"] },
  { "name": "Zamora Chinchipe", "cities": ["Zamora"] }
];

function Register() {
  const [name, setName] = useState('');
  const [userType, setUserType] = useState('');
  const [nPhone, setNPhone] = useState('');
  const [nCedula, setNCedula] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [mainStreet, setMainStreet] = useState('');
  const [secondaryStreet, setSecondaryStreet] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registro de usuario:', name, userType, nPhone, nCedula ,password, photo, province, city, mainStreet, secondaryStreet, postalCode);
    const formData = new FormData();
    formData.append("email", name);
    formData.append("cedula", nCedula);
    formData.append("password", password);
    formData.append("role", userType);
    formData.append("phone", nPhone);
    formData.append("photo", photo);
    formData.append("direccion",province + ' ' + city + ' ' + mainStreet + ' ' + secondaryStreet + ' ' + postalCode);
    fetch('http://localhost:5000/fb/usuario/register', {
      method: "POST",
      body: formData
    })
      .then((response) => {
        if (response.ok) {
        } else {
          console.error('Error al agregar el proveedor en el servidor');
        }
      })
      .catch((error) => {
        console.error('Error de red al agregar el proveedor', error);
      });
  };

    

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setPhoto(URL.createObjectURL(file));
  };

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);
    setCity('');
  };

  const getCityOptions = () => {
    const selectedProvinceObj = provinces.find((p) => p.name === province);
    if (selectedProvinceObj) {
      return selectedProvinceObj.cities.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ));
    }
    return null;
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Registro de usuarios</h2>
      <form onSubmit={handleRegister}>
        <input
          className="register-input"
          type="text"
          placeholder="Nombres"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select
          className="register-inputS"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          required
        >
          <option value="">Seleccionar tipo de usuario</option>
          <option value="Vendedor">Vendedor</option>
          <option value="Cliente">Cliente</option>
        </select>
        <input
          className="register-input"
          type="text"
          placeholder="Número de teléfono"
          value={nPhone}
          onChange={(e) => setNPhone(e.target.value)}
          required
        />
        <input
          className="register-input"
          type="text"
          placeholder="Número de Cedula"
          value={nCedula}
          onChange={(e) => setNCedula(e.target.value)}
          required
        />
        <input
          className="register-input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="register-input"
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
        />
        {photo && <img src={photo} alt="Foto de perfil" className='image-show'/>}
        <h3 className="register-subtitle">Dirección</h3>
        <select
          className="register-inputS"
          value={province}
          onChange={handleProvinceChange}
          required
        >
          <option value="">Seleccionar provincia</option>
          {provinces.map((p) => (
            <option key={p.name} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
        <select
          className="register-inputS"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        >
          <option value="">Seleccionar ciudad</option>
          {getCityOptions()}
        </select>
        <input
          className="register-input"
          type="text"
          placeholder="Calle Principal"
          value={mainStreet}
          onChange={(e) => setMainStreet(e.target.value)}
          required
        />
        <input
          className="register-input"
          type="text"
          placeholder="Calle Secundaria"
          value={secondaryStreet}
          onChange={(e) => setSecondaryStreet(e.target.value)}
          required
        />
        <input
          className="register-input"
          type="text"
          placeholder="Código Postal"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
        />
        <button className="register-button" type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
