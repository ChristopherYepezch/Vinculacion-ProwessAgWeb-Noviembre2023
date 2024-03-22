import React, { useState, useEffect } from 'react';
import "./ModalEditCategory.css";

const ModalAddCategory = ({ isOpen, onClose, categoryToEdit, handleEdit, children }) => {
  const initialCategory = categoryToEdit ? categoryToEdit : {
    nombreCategoria: "",
    descripcionCategoria: ""
  };

  const [editedCategory, setEditedCategory] = useState(initialCategory);

  useEffect(() => {
    // Cuando categoryToEdit cambia, actualiza el estado del modal
    if (categoryToEdit) {
      setEditedCategory(categoryToEdit);
    }
  }, [categoryToEdit]);

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

export default ModalAddCategory;
