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
          src="/public/pdf/MuratZenkinB2.pdf"
          width="100%"
          height="500px"
          title="Zertifikat B2 Deutsch"
        ></iframe>
      </Modal>

      <h2 className="text-xl font-semibold mt-6 mb-3">SPRACHEN</h2>

      <p className="text-gray-700">🇹🇷 Türkisch - Muttersprache</p>
      <p
        className="text-gray-700 cursor-pointer hover:underline"
        onClick={openSecondModal}
      >
        🇩🇪 Deutsch - Fortgeschritten
      </p>
      <p className="text-gray-700">🇬🇧 Englisch - Fortgeschritten</p>
    </div>
  );
}

export default Language;
