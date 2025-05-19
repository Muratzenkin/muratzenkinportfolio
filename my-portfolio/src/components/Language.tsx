import { useState } from "react";
import Modal from "./Modal";

function Language() {
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const openSecondModal = () => setIsSecondModalOpen(true);
  const closeSecondModal = () => setIsSecondModalOpen(false);

  return (
    <div className="w-full text-center">
      {/* Modal */}
      <Modal isOpen={isSecondModalOpen} onClose={closeSecondModal}>
        <h2 className="text-xl font-semibold mb-3">Zertifikat B2 Deutsch</h2>
        <p>Telc-Institut - 2023</p>
        <iframe
          src="/MuratZenkinB2.pdf"
          className="w-full h-[400px] sm:h-[500px]"
          title="Zertifikat B2 Deutsch"
        ></iframe>
      </Modal>

      <h2 className="text-xl font-semibold mt-6 mb-3">SPRACHEN</h2>

      <p className="text-gray-700">🇹🇷 Türkisch - Muttersprache</p>
      <p
        className="text-gray-700 cursor-pointer hover:text-orange-500 relative group"
        onClick={openSecondModal}
      >
        🇩🇪 Deutsch - Fortgeschritten
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
      </p>
      <p className="text-gray-700">🇬🇧 Englisch - Fortgeschritten</p>
    </div>
  );
}

export default Language;