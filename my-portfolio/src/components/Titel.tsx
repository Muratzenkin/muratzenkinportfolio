import { useState } from "react";
import Modal from "./Modal";
import Timeline from "./Timeline";

function Titel() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <h1 className="text-4xl font-bold">Murat Zenkin</h1>
      <h2 className="text-2xl text-gray-600 font-semibold mb-4">
        FULLSTACK WEB ENTWICKLER
      </h2>
      <p className="text-gray-700 mb-6">
        Ich wurde am 18.04.1994 in der Türkei geboren und bin vor zwei Jahren
        nach Deutschland gezogen. Ich bin ein motivierter und lernbereiter
        Webentwickler mit Erfahrung in React, Node.js und modernen
        Webtechnologien. Durch meine frühere Arbeit als Notfallsanitäter habe
        ich Stressmanagement und schnelles Problemlösen gelernt. Jetzt möchte
        ich meine Fähigkeiten in einem professionellen IT-Team einsetzen.
        <span
          className="text-green-700 cursor-pointer hover:underline"
          onClick={openModal}
        >
          Mehr über mich...
        </span>
      </p>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Timeline />
      </Modal>
    </div>
  );
}

export default Titel;
