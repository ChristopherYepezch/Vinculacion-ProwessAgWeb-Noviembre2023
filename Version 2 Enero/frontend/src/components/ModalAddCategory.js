import React, { useState, useEffect } from 'react';
import './ModalAddCategory.css';
import { postCategory } from '../services/category';
const WEBURL = process.env.REACT_APP_API_URL

const ModalAddCategory = ({ isOpen, onClose }) => {
  const [newSupplier, setNewSupplier] = useState({
    nombreCategoria: '',
    descripcionCategoria: '',
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
const handleSave = async () => {
  const token = localStorage.getItem('token');
  const response = await postCategory(newSupplier, token);
  if (response.status===200) {
    console.log("aqui")
    onClose();
  } else {
    console.error('Error al agregar el proveedor en el servidor');
  }
}

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content-product">
        <div className='form-container'>
          <form className='modal-form'>
            <div className="form-group-pair">
              <div>
                <label htmlFor="nombreCategoria">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombreCategoria"
                  value={newSupplier.nombreCategoria}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <div>
                  <label htmlFor="descripcionCategoria">Descripción</label>
                  <textarea
                    className="form-control"
                    name="descripcionCategoria"
                    value={newSupplier.descripcionCategoria}
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
