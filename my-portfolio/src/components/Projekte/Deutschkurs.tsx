import Modal from "../Modal";
import { useState } from "react";
import DeutschKursText from "./DeutschKursText";

function Deutschkurs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <p className="text-gray-700 font-semibold mt-4">Deutschkurs-Portal</p>
      <p className="text-gray-600">
        Hierbei habe ich meine Fähigkeiten in React, TypeScript und
        State-Management vertieft sowie das Design mit Tailwind CSS gestaltet.
      </p>
      <span
        className="text-green-700 cursor-pointer hover:underline"
        onClick={openModal}
      >
        Mehr erfahren...
      </span>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <DeutschKursText />
      </Modal>
    </div>
  );
}

export default Deutschkurs;
