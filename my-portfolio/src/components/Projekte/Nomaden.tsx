import Modal from "../Modal";
import { useState } from "react";
import NomadenText from "./NomadenText";

function Deutschkurs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <p className="text-gray-700 font-semibold">2Nomaden Migrationsberatung</p>
      <p className="text-gray-600">
        Durch dieses Projekt konnte ich meine Fähigkeiten in React, Javascript,
        State-Management und Tailwind CSS praxisnah anwenden, um ein
        funktionales System mit Blog, Produktverkauf und Kontaktmöglichkeiten zu
        realisieren.
      </p>
      <span
        className="text-green-700 cursor-pointer hover:underline"
        onClick={openModal}
      >
        Mehr erfahren...
      </span>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <NomadenText />
      </Modal>
    </div>
  );
}

export default Deutschkurs;
