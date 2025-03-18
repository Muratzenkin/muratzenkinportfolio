import Modal from "../Modal";
import { useState } from "react";
import KältehandschuhText from "./KältehandschuhText";

function Kältehandschuh() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <p className="text-gray-700 font-semibold mt-4">Kältehandschuh</p>
      <p className="text-gray-600">
        Dieses Projekt hat mir geholfen, mein Wissen in responsive Design,
        Bootstrap und der Integration von Formularen zu erweitern.
      </p>
      <span
        className="text-orange-500 cursor-pointer hover:underline"
        onClick={openModal}
      >
        Mehr über mich...
      </span>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <KältehandschuhText />
      </Modal>
    </div>
  );
}

export default Kältehandschuh;
