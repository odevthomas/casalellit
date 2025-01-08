import React from "react";

const Modal = ({ children, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        {children}
      </div>
      <div
        className="absolute top-0 right-0 p-4 cursor-pointer text-white"
        onClick={closeModal}
      >
        X
      </div>
    </div>
  );
};

export default Modal;
