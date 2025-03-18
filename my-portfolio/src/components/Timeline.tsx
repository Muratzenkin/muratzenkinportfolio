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
    title: "Mein Wechsel zur IT-Welt",
    description:
      "Nach meiner Karriere im medizinischen Bereich entschied ich mich für eine neue Herausforderung: die Welt der Webentwicklung.",
  },
  {
    date: "2024",
    title: "DCI - Web Development Ausbildung",
    description:
      "Ich begann meine Ausbildung als Full-Stack-Entwickler beim Digital Career Institute (DCI), wo ich HTML, CSS, JavaScript, React, Node.js und MongoDB lernte.",
  },
  {
    date: "2025",
    title: "Freelance & Erste Projekte",
    description:
      "Ich begann, meine ersten Projekte als Webentwickler umzusetzen und in realen Anwendungen zu arbeiten.",
  },
];

function Timeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center w-full px-6">
      <h2 className="text-4xl font-bold mb-12">Mein Weg in die IT-Welt</h2>

      <div className="relative w-full max-w-4xl">
        {/* Orta Çizgi */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-orange-500 h-full"></div>

        {/* Timeline İçeriği */}
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center w-full mb-10 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* İçerik Kutusu */}
            <div className="w-5/12 bg-white p-6 rounded-lg shadow-lg relative">
              <p className="text-gray-500 font-medium">{item.date}</p>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>

              {/* Aç/Kapat Butonu */}
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

              {/* Açılır İçerik */}
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
