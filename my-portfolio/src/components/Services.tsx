function Services() {
    return (
      <div>
        {/* Dienstleistungen */}
        <h2 className="text-2xl font-semibold text-green-900 border-b-2 border-green-900 pb-2 mt-6 mb-4">
          MEINE DIENSTLEISTUNGEN
        </h2>
  
        {/* Webseiten für Selbstständige */}
        <p className="text-gray-700 font-semibold">Webseiten für Selbstständige & kleine Unternehmen</p>
        <ul className="list-disc ml-6">
          <li className="text-gray-700">
            Entwicklung moderner und benutzerfreundlicher Websites – z.B. für Coaches, Trainer:innen oder Studios.
          </li>
          <li className="text-gray-700">
            Mobile-optimierte Seiten, die auf Handy, Tablet und PC perfekt funktionieren.
          </li>
          <li className="text-gray-700">
            Individuelles Design mit Ihren Farben, Texten, Fotos und Logo.
          </li>
          <li className="text-gray-700">
            Auf Wunsch mit Funktionen wie <strong>Kurskalender</strong>, <strong>Kontaktformular</strong> oder <strong>Instagram-Integration</strong>.
          </li>
          <li className="text-gray-700 mb-4">
            Beratung zur Struktur, Benutzerführung und Technik.
          </li>
        </ul>
      </div>
    );
  }
  
  export default Services;
  