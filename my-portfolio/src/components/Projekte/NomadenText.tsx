function NomadenText() {
  return (
    <div className="p-6 text-gray-800 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          2Nomaden Migrationsberatung
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Unsere Plattform bietet eine umfassende und benutzerfreundliche
          Umgebung für Migrant:innen, um Informationen, Unterstützung und
          Beratungsangebote digital und strukturiert zu nutzen.
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
              Dieses Projekt entstand im Rahmen einer praxisorientierten
              Ausbildung mit dem Ziel, digitale Lösungen für reale
              Herausforderungen von Migrant:innen zu entwickeln. Mit Hilfe
              moderner Technologien wie React, Javascript und Tailwind CSS wurde
              die Plattform aufgebaut, um Beratung und Services effizient online
              zugänglich zu machen.
            </p>
          </div>

          <div>
            <h3 className="text-blue-900 font-bold text-xl mb-2">
              HAUPTFUNKTIONEN
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Mehrsprachigkeit (DE / TR)</li>
              <li>Modernes und responsives Design</li>
              <li>Intuitive Navigation und Benutzerfreundlichkeit</li>
              <li>Blogsystem für Informationsartikel</li>
              <li>Produktverkaufssystem für Beratungsservices & Materialien</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-900 font-bold text-xl mb-2">
              TECHNISCHE UMSETZUNG
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>React + Javascript + Vite</li>
              <li>Tailwind CSS für UI-Komponenten</li>
              <li>Zustand für State-Management</li>
              <li>TanStack Query für API-Requests</li>
              <li>Deployment über Netlify</li>
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
              <li>Digitale Beratungsplattform für Migrant:innen schaffen</li>
              <li>Strukturierter Zugang zu relevanten Inhalten</li>
              <li>Förderung von Kommunikation & Austausch</li>
              <li>Motivierende und unterstützende Tools bieten</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-900 font-bold text-xl mb-2">
              BERATUNGSWERKZEUGE
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Interaktive Checklisten & Formulare</li>
              <li>Quiz zu bürokratischen Prozessen</li>
              <li>Audio-/Video-Erklärungen</li>
              <li>Blogbeiträge mit Tipps & Erfahrungsberichten</li>
              <li>Digitale Produkte & Buchungen direkt über die Plattform</li>
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
                  href="https://2nomaden.netlify.app/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  2nomaden.netlify.app
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a
                  href="https://github.com/Muratzenkin/2nomaden"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  github.com/2nomaden
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NomadenText;
