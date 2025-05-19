function BerufsErfahrung() {
  return (
    <div>
      {/* Berufserfahrung */}
      <h2 className="text-2xl font-semibold text-green-900 border-b-2 border-green-900 pb-2 mt-6 mb-4">
        BERUFSERFAHRUNG
      </h2>

      {/* Freiberuflich */}
      <p className="text-gray-700 font-semibold">01.2025 - Heute | Freiberuflich</p>
      <p className="text-gray-600">Full Stack Web Entwickler (Junior)</p>
      <ul className="list-disc ml-6">
        <li className="text-gray-700">
          Konzeption, Entwicklung und Betreuung von Webanwendungen für Selbstständige, kleine Unternehmen und soziale Projekte.
        </li>
        <li className="text-gray-700">
          Einsatz moderner Technologien wie React, TypeScript, Node.js und MongoDB.
        </li>
        <li className="text-gray-700">
          Schwerpunkte: responsive Websites, API-Integration, Benutzerfreundlichkeit und technische Umsetzung individueller Anforderungen.
        </li>
        <li className="text-gray-700">
          Zusammenarbeit mit Kund:innen in verschiedenen Branchen (z.B. Bildung, Gesundheit, Coaching).
        </li>
      </ul>

      {/* DCI Praktikum */}
      <p className="text-gray-700 font-semibold mt-4">03.2025 - 05-2025 | DCI (Digital Career Institute)</p>
      <p className="text-gray-600">Full Stack Web Entwickler (Praktikant)</p>
      <ul className="list-disc ml-6">
        <li className="text-gray-700">
          Teilnahme am Internship Support Program im Rahmen der Webentwicklungsausbildung
        </li>
        <li className="text-gray-700">
          Umsetzung kleinerer Webprojekte mit HTML, CSS, JavaScript, React und Node.js
        </li>
        <li className="text-gray-700">Teamarbeit im agilen Umfeld (Scrum)</li>
        <li className="text-gray-700">
          Einblick in Projektplanung, Bug-Fixing und Code Reviews
        </li>
        <li className="text-gray-700">
          Anwendung von Git & GitHub im Entwicklungsprozess
        </li>
      </ul>

      {/* Heinzelmännchen */}
      <p className="text-gray-700 font-semibold mt-4">
        05.2024 - Bis Heute | Pflege und Beratung Heinzelmännchen GmbH
      </p>
      <p className="text-gray-600">Notfallsanitäter (MiniJob)</p>
      <ul className="list-disc ml-6">
        <li className="text-gray-700">
          Diese Tätigkeit hilft mir, meine Deutschkenntnisse sowie meine
          sozialen Kompetenzen im Umgang mit Menschen weiterzuentwickeln.
        </li>
      </ul>

      {/* Türkei */}
      <p className="text-gray-700 font-semibold mt-4">
        01.2013 - 04.2023 | Gesundheitsministerium der Türkei
      </p>
      <p className="text-gray-600">Notfallsanitäter</p>
      <ul className="list-disc ml-6">
        <li className="text-gray-700">
          Zehn Jahre Erfahrung als Notfallsanitäter im Einsatz bei medizinischen
          Notfällen
        </li>
        <li className="text-gray-700">
          Kompetenter Umgang mit medizinischen Geräten und Patientenbetreuung
        </li>
        <li className="text-gray-700">
          Stressbewältigung und Führung in intensiven, hochdynamischen
          Notfallsituationen
        </li>
      </ul>
    </div>
  );
}

export default BerufsErfahrung;