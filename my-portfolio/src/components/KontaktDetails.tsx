import { Phone, Mail, MapPin, Github, Linkedin } from "lucide-react";

function KontaktDetails() {
  return (
    <div className="w-full text-center">
      {/* Başlık */}
      <h2 className="text-xl font-semibold mb-3">KONTAKT</h2>

      {/* Bilgiler */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-gray-700 flex items-center gap-2">
          <Phone size={18} />
          017661952054
        </p>
        <p className="text-gray-700 flex items-center gap-2">
          <Mail size={18} />
          <a
            href="mailto:muratzenkin94@gmail.com"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            muratzenkin94@gmail.com
          </a>
        </p>
        <p className="text-gray-700 flex items-center gap-2">
          <MapPin size={18} /> Bilker Allee 196, Düsseldorf
        </p>
        <p className="text-gray-700 flex items-center gap-2">
          <Github size={18} />
          <a
            href="https://github.com/Muratzenkin"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        <p className="text-gray-700 flex items-center gap-2">
          <Linkedin size={18} />
          <a
            href="https://www.linkedin.com/in/murat-zenkin-2a04b32a5/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
}

export default KontaktDetails;
