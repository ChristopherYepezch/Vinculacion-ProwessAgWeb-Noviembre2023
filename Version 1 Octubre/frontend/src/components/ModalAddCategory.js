import React, { useState, useEffect } from 'react';
import './ModalAddCategory.css';

const ModalAddCategory = ({ isOpen, onClose }) => {
  const [newSupplier, setNewSupplier] = useState({
    cat_nombre: '',
    cat_descripcion: '',
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
    setNewSupplier({
      ...newSupplier,
      [name]: value,
    });
  };

  const handleSave = () => {
    fetch('http://localhost:5000/fb/categoria/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSupplier),
    })
      .then((response) => {
        if (response.ok) {
          onClose();
        } else {
          console.error('Error al agregar el proveedor en el servidor');
        }
      })
      .catch((error) => {
        console.error('Error de red al agregar el proveedor', error);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content-product">
        <div className='form-container'>
          <form className='modal-form'>
            <div className="form-group-pair">
              <div>
                <label htmlFor="cat_nombre">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="cat_nombre"
                  value={newSupplier.cat_nombre}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <div>
                  <label htmlFor="cat_descripcion">Descripción</label>
                  <textarea
                    className="form-control"
                    name="cat_descripcion"
                    value={newSupplier.cat_descripcion}
                    onChange={handleInputChange}
                  />
                </div>
              </div>  
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

export default ModalAddCategory;
