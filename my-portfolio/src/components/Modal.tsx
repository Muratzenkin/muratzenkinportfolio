import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-40 backdrop-blur-md z-50">
      {/* Modal İçeriği */}
      <div className=" p-6 rounded-lg shadow-xl relative w-full max-w-6xl max-h-[90vh] overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
