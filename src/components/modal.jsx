import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const modalClass = isOpen ? 'block' : 'hidden';

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${modalClass}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-6 rounded shadow-md z-10">
        {children}
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal