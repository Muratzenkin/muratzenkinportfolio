import { Mail, Github, Linkedin } from "lucide-react";

function KontaktDetails() {
  return (
    <div className="w-full text-center">
      <h2 className="text-xl font-semibold mb-3">KONTAKT</h2>
      <div className="flex flex-col items-center gap-2">
        {/* E-Mail */}
        <p className="text-gray-700 flex items-center gap-2 relative group">
          <Mail size={18} className="text-gray-700 group-hover:text-orange-500 transition-colors duration-300" />
          <a
            href="mailto:muratzenkin94@gmail.com"
            className="group-hover:text-orange-500 transition-colors duration-300 relative"
            target="_blank"
            rel="noopener noreferrer"
          >
            muratzenkin94@gmail.com
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </p>

        {/* GitHub */}
        <p className="text-gray-700 flex items-center gap-2 relative group">
          <Github size={18} className="text-gray-700 group-hover:text-orange-500 transition-colors duration-300" />
          <a
            href="https://github.com/Muratzenkin"
            className="group-hover:text-orange-500 transition-colors duration-300 relative"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </p>

        {/* LinkedIn */}
        <p className="text-gray-700 flex items-center gap-2 relative group">
          <Linkedin size={18} className="text-gray-700 group-hover:text-orange-500 transition-colors duration-300" />
          <a
            href="https://www.linkedin.com/in/murat-zenkin-2a04b32a5/"
            className="group-hover:text-orange-500 transition-colors duration-300 relative"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default KontaktDetails;