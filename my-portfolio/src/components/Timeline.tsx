import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const timelineData = [
  {
    date: "2013 - 2023",
    title: "Notfallsanitäter in der Türkei",
    description:
      "Ich habe 10 Jahre als Notfallsanitäter in der Türkei gearbeitet. In dieser Zeit habe ich wertvolle Erfahrungen im Umgang mit Stresssituationen, schneller Problemlösung und Teamarbeit gesammelt.",
  },
  {
    date: "2023",
    title: "Ein neuer Lebensabschnitt in Deutschland",
    description:
      "Im Jahr 2023 bin ich zusammen mit meiner Frau nach Deutschland gezogen – sowohl für unsere persönliche als auch berufliche Weiterentwicklung. Wir wollten neue Herausforderungen meistern und uns in einem internationalen Umfeld weiterentwickeln.",
  },
  {
    date: "2023",
    title: "Der Moment der Entscheidung ",
    description:
      "Kurz nach meiner Ankunft in Deutschland nahm ich an einer TEDx-Veranstaltung teil. Die inspirierende Rede 'Die Welt verändert sich – wo stehst du in dieser Veränderung?' brachte mich zum Nachdenken. Ich erkannte, dass ich meine Karriere in eine völlig neue Richtung lenken wollte: die IT-Welt.",
  },
  {
    date: "2023 - 2024",
    title: "Erste Schritte in der IT-Welt ",
    description:
      "Um meine technischen Fähigkeiten zu verbessern, begann ich eine Weiterbildung im Bereich Webentwicklung. Gleichzeitig arbeitete ich als Notfallsanitäter in einem Pflege-Dienst als Minijob, um die deutsche Kultur besser kennenzulernen und meine Sprachkenntnisse zu verbessern.",
  },
  {
    date: "2024",
    title: "Moderne Technologien & erste Projekte ",
    description:
      "Während meiner Ausbildung bei DCI habe ich moderne Technologien wie React, TypeScript, Node.js und Tailwind CSS gelernt. Ich konnte dieses Wissen direkt in meinen eigenen Projekten umsetzen.",
  },
  {
    date: "2024 - Heute",
    title: "Freelancer & Community-Projekte ",
    description:
      "Zusammen mit meiner Frau betreiben wir eine Instagram-Seite, um Neuankömmlinge in Deutschland zu unterstützen. Zudem arbeite ich als Freelancer an mehreren Projekten, darunter eine Website für ein Online-Sprachcafé und eine Plattform zur Unterstützung von Einwanderern.",
  },
];

function Timeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center w-full px-6">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Mein Weg in die IT-Welt
      </h2>

      <div className="relative w-full max-w-4xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-orange-500 h-full"></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center w-full mb-10 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-5/12 bg-white p-6 rounded-lg shadow-lg relative">
              <p className="text-gray-500 font-medium">{item.date}</p>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>

              <button
                className="absolute top-1/2 right-[-1.5rem] transform -translate-y-1/2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-md hover:bg-orange-600 transition"
                onClick={() => toggleItem(index)}
              >
                {openIndex === index ? (
                  <Minus size={20} color="white" />
                ) : (
                  <Plus size={20} color="white" />
                )}
              </button>

              {openIndex === index && (
                <p className="text-gray-700 mt-4">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
