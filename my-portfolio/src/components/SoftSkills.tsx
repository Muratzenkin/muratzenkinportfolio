import { CheckCircle } from "lucide-react";

function SoftSkills() {
  return (
    <div className="w-full text-center">
      <h2 className="text-xl font-semibold mt-6 mb-3">SOFT SKILLS</h2>

      <div className="flex flex-col items-center gap-2">
        <p className="text-gray-700 flex items-center gap-2 relative group">
          <CheckCircle size={18} className="text-gray-700 group-hover:text-orange-500 transition-colors duration-300" />
          Teamfähigkeit
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </p>
        <p className="text-gray-700 flex items-center gap-2 relative group">
          <CheckCircle size={18} className="text-gray-700 group-hover:text-orange-500 transition-colors duration-300" />
          Agile Arbeitsweise
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </p>
        <p className="text-gray-700 flex items-center gap-2 relative group">
          <CheckCircle size={18} className="text-gray-700 group-hover:text-orange-500 transition-colors duration-300" />
          Feedbackfähigkeit
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </p>
        <p className="text-gray-700 flex items-center gap-2 relative group">
          <CheckCircle size={18} className="text-gray-700 group-hover:text-orange-500 transition-colors duration-300" />
          Eigeninitiative
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </p>
        <p className="text-gray-700 flex items-center gap-2 relative group">
          <CheckCircle size={18} className="text-gray-700 group-hover:text-orange-500 transition-colors duration-300" />
          Kritisches Denken
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </p>
        <p className="text-gray-700 flex items-center gap-2 relative group">
          <CheckCircle size={18} className="text-gray-700 group-hover:text-orange-500 transition-colors duration-300" />
          Lernbereitschaft
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </p>
      </div>
    </div>
  );
}

export default SoftSkills;