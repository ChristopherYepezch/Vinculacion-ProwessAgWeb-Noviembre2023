import React, { useState, useEffect } from 'react';

const ModalAddVendor = ({ isOpen, onClose, handleAddVendor }) => {
  const [newVendor, setNewVendor] = useState({
    name: '',
    city: '',
    address: '',
    phoneNumber: '',
    whatsappNumber: '',
    image: '',
  });

  useEffect(() => {
    if (isOpen) {
      const body = document.body;
      body.classList.add('modal-open');
      return () => {
        body.classList.remove('modal-open');
      };
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVendor({
      ...newVendor,
      [name]: value,
    });
  };

  const handleSave = () => {
    fetch('http://localhost:5000/fb/vendedor/createSeller', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVendor),
    })
      .then((response) => {
        if (response.ok) {
          onClose();
        } else {
          console.error('Error al agregar el vendedor en el servidor');
        }
      })
      .catch((error) => {
        console.error('Error de red al agregar el vendedor', error);
      });
  };

  const onSave = (e) => {
    e.preventDefault();
    // Llama a la función handleAddVendor y pasa el nuevo vendedor como argumento
    handleAddVendor(newVendor);
    onClose(); // Cierra el modal después de agregar el vendedor
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content-vendor">
        <div className='form-container'>
          <form className='modal-form' onSubmit={onSave}>
            <div className="form-group-pair">
              <div>
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={newVendor.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="city">Ciudad</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={newVendor.city}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="address">Dirección</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={newVendor.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Teléfono</label>
              <input
                type="text"
                className="form-control"
                name="phoneNumber"
                value={newVendor.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="whatsappNumber">Número de WhatsApp</label>
              <input
                type="text"
                className="form-control"
                name="whatsappNumber"
                value={newVendor.whatsappNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">URL de la Imagen</label>
              <input
                type="text"
                className="form-control"
                name="image"
                value={newVendor.image}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
            <label className='btn-save-container' onClick={handleSave} >Guardar</label>
            </div>
          </form>
        </div>
        <span className="modal-close-product" onClick={onClose}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default ModalAddVendor;
