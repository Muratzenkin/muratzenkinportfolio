function Projekte() {
  return (
    <div>
      {/* Projekte */}
      <h2 className="text-2xl font-semibold text-green-600 border-b-2 border-green-400 pb-2 mt-6 mb-4">
        PERSÖNLICHE PROJEKTE
      </h2>
      <p className="text-gray-700 font-semibold">
        2023 - 2025 | DCI (DIGITAL CAREER INSTITUTE)
      </p>
      <p className="text-gray-700 font-semibold">Deutschkurs-Portal</p>
      <p className="text-gray-600">
        Hierbei habe ich meine Fähigkeiten in React, TypeScript und
        State-Management vertieft sowie das Design mit Tailwind CSS gestaltet.
      </p>
      <a
        href="https://deutschkurs.netlify.app/"
        className="text-blue-500 hover:underline"
      >
        Live ansehen
      </a>
      <p className="text-gray-700 font-semibold mt-4">Kältehandschuh</p>
      <p className="text-gray-600">
        Dieses Projekt hat mir geholfen, mein Wissen in responsive Design,
        Bootstrap und der Integration von Formularen zu erweitern.
      </p>
      <a
        href="https://coolcare.netlify.app/"
        className="text-blue-500 hover:underline"
      >
        Live ansehen
      </a>
    </div>
  );
}

export default Projekte;
