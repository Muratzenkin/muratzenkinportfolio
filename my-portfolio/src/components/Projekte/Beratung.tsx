import Modal from "../Modal";
import { useState } from "react";
import BeratungText from "./BeratungText";

function Beratung() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <p className="text-gray-700 font-semibold mt-4">
        Beratungsplattform für Neuanfänger
      </p>
      <p className="text-gray-600">
        Dieses Backend-Projekt wurde mit Node.js und MongoDB entwickelt und
        richtet sich an Menschen, die neu nach Deutschland gezogen sind. Es
        hilft ihnen dabei, passende Berater:innen zu finden, Termine zu
        vereinbaren und sich besser zu integrieren.
      </p>
      <span
        className="text-green-700 cursor-pointer hover:underline"
        onClick={openModal}
      >
        Mehr erfahren...
      </span>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <BeratungText />
      </Modal>
    </div>
  );
}

export default Beratung;
