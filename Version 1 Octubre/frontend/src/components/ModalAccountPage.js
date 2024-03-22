import React, { useEffect } from 'react';
import './ModalAccountPage.css';

const Modal = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const body = document.body;
      body.classList.add('modal-open');
      return () => {
        body.classList.remove('modal-open');
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
