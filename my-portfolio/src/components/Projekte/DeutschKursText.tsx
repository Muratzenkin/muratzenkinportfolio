function DeutschkursPlatformText() {
  return (
    <div className="p-6 text-gray-800 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          Deutschkurs Plattform
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Die Webanwendung bietet eine interaktive Umgebung für Deutschlernende
          und vereint moderne Technologien, Kommunikation und Lernmaterialien
          auf einer Plattform.
        </p>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 gap-12">
        {/* Linke Seite */}
        <div className="space-y-8">
          <div>
            <h3 className="text-blue-900 font-bold text-xl mb-2">
              UNSERE PROJEKTGESCHICHTE
            </h3>
            <p>
              Dieses Projekt wurde im Rahmen meines Kurses am Digital Career
              Institute (DCI) als eine Übungsaufgabe entwickelt. Ziel war es,
              den Umgang mit modernen Technologien wie React, TypeScript und
              Tailwind CSS zu erlernen. Aus diesem Grund habe ich mich
              entschieden, eine praxisnahe Webanwendung zu konzipieren und
              umzusetzen
            </p>
          </div>

          <div>
            <h3 className="text-blue-900 font-bold text-xl mb-2">
              HAUPTFUNKTIONEN
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Benutzerregistrierung und Login-Systeme</li>
              <li>Dark Mode Unterstützung</li>
              <li>Mehrsprachigkeit (DE / TR)</li>
              <li>Responsives und modernes Design</li>
              <li>Benutzerfreundliche Navigation</li>
              <li>Kommentarfunktion & Nutzerbewertungen</li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-900 font-bold text-xl mb-2">
              TECHNISCHE UMSETZUNG
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>React + TypeScript + Vite</li>
              <li>Tailwind CSS für modernes UI</li>
              <li>Zustand für Global State</li>
              <li>TanStack Query für API & Datenfetching</li>
              <li>Deployment via Netlify</li>
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
              <li>Digitale Sprachlernplattform schaffen</li>
              <li>Strukturierter Zugriff auf Lerninhalte</li>
              <li>Verbesserung der Kommunikation (Lehrer/Teilnehmer)</li>
              <li>Motivationsfördernde Features für Lernende</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-900 font-bold text-xl mb-2">
              SPRACHWERKZEUGE
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Wortspiele & Vokabeltrainer</li>
              <li>Grammatik-Quiz mit Auswertung</li>
              <li>Audio-/Videoübungen</li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-900 font-bold text-xl mb-2">
              DEMO & CODE
            </h3>
            <ul className="list-disc ml-5">
              <li>
                Live-Demo:{" "}
                <a
                  href="https://deutschkurs.netlify.app/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  deutschkurs.netlify.app
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a
                  href="https://github.com/Muratzenkin/deutschkurs"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  github.com/deutschkurs-portal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeutschkursPlatformText;
