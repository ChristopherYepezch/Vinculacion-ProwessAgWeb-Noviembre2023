import React, { useState, useEffect } from 'react';
import ReactSelect from "react-select";
import "./ModalEditUser.css";

const ModalEditUser =({ isOpen, onClose, userToEdit, handleEdit }) => {
    const initialUser = userToEdit
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedCategory({
          ...editedCategory,
          [name]: value,
        });
      };
    
      const onSave = (e) => {
        e.preventDefault();
        handleEdit(editedCategory);
        onClose();
      };
    
      if (!isOpen) return null;
    
      return (
        <div className="modal-overlay">
          <div className="modal-content-product">
            <div className='form-container'>
              <form className='modal-form' onSubmit={onSave}>
                <div className="form-group-pair">
                  <div>
                    <label htmlFor="nombreCategoria">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nombreCategoria"
                      value={editedCategory.nombreCategoria}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="descripcionCategoria">Descripción</label>
                    <textarea
                      className="form-control"
                      name="descripcionCategoria"
                      value={editedCategory.descripcionCategoria}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn-save">Guardar</button>
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