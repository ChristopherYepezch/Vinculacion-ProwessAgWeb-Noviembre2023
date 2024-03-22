import React, { useState, useEffect } from 'react';

const ModalAddCategory = ({ isOpen, onClose, categoryToEdit, handleEdit, children }) => {
  const initialCategory = categoryToEdit ? categoryToEdit : {
    cat_nombre: "",
    cat_descripcion: ""
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
                <label htmlFor="cat_nombre">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="cat_nombre"
                  value={editedCategory.cat_nombre}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="cat_descripcion">Descripción</label>
                <textarea
                  className="form-control"
                  name="cat_descripcion"
                  value={editedCategory.cat_descripcion}
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
