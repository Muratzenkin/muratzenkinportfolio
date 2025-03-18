import { CheckCircle } from "lucide-react";

function SoftSkills() {
  return (
    <div className="w-full text-center">
      <h2 className="text-xl font-semibold mt-6 mb-3">SOFT SKILLS</h2>

      <div className="flex flex-col items-center gap-2">
        <p className="text-gray-700 flex items-center gap-2">
          <CheckCircle size={18} /> Teamfähigkeit
        </p>
        <p className="text-gray-700 flex items-center gap-2">
          <CheckCircle size={18} /> Kritisches Denken
        </p>
        <p className="text-gray-700 flex items-center gap-2">
          <CheckCircle size={18} /> Lernbereitschaft
        </p>
      </div>
    </div>
  );
}

export default SoftSkills;
