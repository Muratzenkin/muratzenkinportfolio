function BeratungText() {
  return (
    <div className="p-6 text-gray-800 max-w-6xl mx-auto">
      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          Beratungsplattform für Neuanfänger in Deutschland
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Diese Plattform unterstützt Personen, die neu nach Deutschland ziehen,
          bei der Suche nach geeigneten Beratern für verschiedene
          Lebensbereiche.
        </p>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 gap-12">
        {/* Linke Seite */}
        <div className="space-y-8">
          <div>
            <h3 className="text-blue-900 font-bold text-xl mb-2">
              PROJEKTBESCHREIBUNG
            </h3>
            <p>
              Diese Plattform soll Neuanfängern den Einstieg in Deutschland
              erleichtern. Sie bietet die Möglichkeit, mit passenden Beratern in
              Kontakt zu treten, Gespräche zu vereinbaren und gezielte
              Unterstützung zu erhalten. Entwickelt wird das Backend mit Node.js
              und MongoDB, um eine moderne und skalierbare Lösung zu
              gewährleisten.
            </p>
          </div>

          <div>
            <h3 className="text-blue-900 font-bold text-xl mb-2">
              HAUPTFUNKTIONEN
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Benutzerregistrierung & Anmeldung (JWT Authentifizierung)</li>
              <li>Benutzerprofil-Erstellung und Bearbeitung</li>
              <li>Berater-Registrierung & Profilverwaltung</li>
              <li>
                Suche nach Beratern nach Fachgebiet, Sprache oder Standort
              </li>
              <li>Terminvereinbarung mit Kalender-Synchronisation</li>
              <li>Bewertungs- & Feedbacksystem</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-900 font-bold text-xl mb-2">
              TECHNOLOGIE-STACK
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Backend: Node.js mit Express.js</li>
              <li>Datenbank: MongoDB</li>
              <li>Authentifizierung: JSON Web Tokens (JWT)</li>
            </ul>
          </div>
        </div>

        {/* Rechte Seite */}
        <div className="space-y-8">
          <div>
            <h3 className="text-blue-900 font-bold text-xl mb-2">
              PROJEKTZIELE
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Orientierungshilfe für Neuanfänger in Deutschland</li>
              <li>Zugriff auf qualifizierte Beratung</li>
              <li>
                Stärkung der Selbstständigkeit durch gezielte Informationen
              </li>
              <li>Effiziente Verbindung zwischen Beratern und Ratsuchenden</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-900 font-bold text-xl mb-2">CODE</h3>
            <ul className="list-disc ml-5">
              <li>
                GitHub:{" "}
                <a
                  href="https://github.com/Muratzenkin/backend-final-project-beratung?tab=readme-ov-file#beratungsplattform-f%C3%BCr-neuanf%C3%A4nger-in-deutschland"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  github.com/beratungsplattform
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeratungText;
