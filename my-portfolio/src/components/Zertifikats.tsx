import Modal from "./Modal";
import { useState } from "react";
import { Award } from "lucide-react";

function Zertifikats() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      {/* Zertifikats */}
      <h2 className="text-xl font-semibold mt-6 mb-1 text-center">
        ZERTIFIKATE
      </h2>
      <h5 className="font-semibold text-center ">Zertifikat Web Development</h5>
      <p
        className="text-gray-700 flex items-center gap-2 cursor-pointer hover:underline"
        onClick={openModal}
      >
        <Award size={18} /> DCI(Digital Career Institute) - 2025
      </p>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-semibold mb-3">
          Zertifikat Web Development
        </h2>
        <p>DCI(Digital Career Institute) - 2025</p>
        <iframe
          src="public/pdf/DCI_Zertifikat_Zenkin,.pdf"
          width="100%"
          height="500px"
          title="Zertifikat"
        ></iframe>
      </Modal>
    </div>
  );
}

export default Zertifikats;
