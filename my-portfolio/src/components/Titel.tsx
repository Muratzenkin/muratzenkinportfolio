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
          className="text-orange-500 cursor-pointer hover:underline"
          onClick={openModal}
        >
          Mehr über mich...
        </span>
      </p>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* <h2 className="text-2xl font-semibold mb-4">Über mich</h2>

        <p className="text-gray-700">
          Mein Name ist Murat Zenkin. Ich wurde am 18.04.1994 in der Türkei
          geboren und habe viele Jahre als Notfallsanitäter gearbeitet. Während
          dieser Zeit konnte ich wertvolle Fähigkeiten in Stressmanagement,
          schnellem Problemlösen und Teamarbeit entwickeln.
        </p>

        <p className="text-gray-700 mt-4">
          Nach zehn Jahren in der Notfallmedizin entschied ich mich für eine
          neue Herausforderung und begann meine Reise in die Welt der
          Webentwicklung. Ich wollte nicht nur lebensrettende Maßnahmen
          durchführen, sondern auch digitale Lösungen schaffen, die Menschen im
          Alltag helfen.
        </p>

        <p className="text-gray-700 mt-4">
          2024 begann ich meine Ausbildung als Full-Stack-Webentwickler beim
          Digital Career Institute (DCI). Während dieser Zeit habe ich moderne
          Technologien wie HTML, CSS, JavaScript, React, Node.js und MongoDB
          erlernt und verschiedene Projekte realisiert.
        </p>

        <p className="text-gray-700 mt-4">
          Heute bin ich hoch motiviert, mein Wissen in einem professionellen
          IT-Team einzusetzen und innovative digitale Produkte zu entwickeln.
          Meine Erfahrungen als Notfallsanitäter haben mir beigebracht, unter
          Druck effizient zu arbeiten – eine Fähigkeit, die ich nun in die Welt
          der Technologie einbringe.
        </p>

        <p className="text-gray-700 mt-4">
          Mein Ziel ist es, sowohl technisch als auch menschlich einen Mehrwert
          zu schaffen. Ich bin bereit, weiter zu lernen, mich neuen
          Herausforderungen zu stellen und in der IT-Welt einen Unterschied zu
          machen.
        </p> */}
        <Timeline />
      </Modal>
    </div>
  );
}

export default Titel;
