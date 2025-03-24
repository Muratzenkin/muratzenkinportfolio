function KältehandschuhText() {
  return (
    <div className="p-6 text-gray-800 max-w-6xl mx-auto">
      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          Kältehandschuh
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Speziell für Krebspatient:innen entwickelte Handschuhe und Socken zur
          Kälteanwendung
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
              Dieses Projekt wurde im Rahmen meines HTML/CSS-Finalprojekts
              während meiner Weiterbildung am DCI erstellt. Ziel war es, ein
              praktisches Produkt mit echtem Mehrwert für Betroffene zu
              entwerfen und dabei die Grundlagen der modernen Webentwicklung zu
              erlernen und anzuwenden.
            </p>
          </div>

          <div>
            <h3 className="text-blue-900 font-bold text-xl mb-2">
              HAUPTFUNKTIONEN
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Verwendung von HTML & CSS-Grundlagen</li>
              <li>Einbindung von Bootstrap-Komponenten</li>
              <li>Responsive Design mit Mobile-First-Ansatz</li>
              <li>Nutzung von Hover-Effekten für Interaktion</li>
              <li>Erstellung eines Navigationsmenüs (Navbar)</li>
              <li>Gestaltung und Integration eines Kontaktformulars</li>
              <li>Design basierend auf selbst erstelltem Wireframe</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-900 font-bold text-xl mb-2">
              TECHNISCHE UMSETZUNG
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>HTML5 & CSS3</li>
              <li>Bootstrap für schnelle Layouts und Komponenten</li>
              <li>Responsives Design mit Media Queries</li>
              <li>Formularvalidierung mit HTML5</li>
              <li>Deployment via Netlify</li>
            </ul>
          </div>
        </div>

        {/* Rechte Seite */}
        <div className="space-y-8">
          <div>
            <h3 className="text-blue-900 font-bold text-xl mb-2">
              PRODUKTBESCHREIBUNG
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Kältehandschuh mit weichem Innenmaterial</li>
              <li>Kältefäustling für sensible Bereiche</li>
              <li>Kältesocken zur Anwendung an den Füßen</li>
              <li>Linderung von Schmerzen durch Kälte</li>
              <li>Einfach anzuwenden & wiederverwendbar</li>
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
                  href="https://coolcare.netlify.app/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  coolcare.netlify.app
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a
                  href="https://github.com/Muratzenkin/html-css-final-project"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  github.com/kältehandschuh
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KältehandschuhText;
