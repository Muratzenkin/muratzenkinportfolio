import Deutschkurs from "./Deutschkurs";
import Kältehandschuh from "./Kältehandschuh";

function Projekte() {
  return (
    <div>
      {/* Projekte */}
      <h2 className="text-2xl font-semibold text-green-900 border-b-2 border-green-900 pb-2 mt-6 mb-4">
        PERSÖNLICHE PROJEKTE
      </h2>
      <p className="text-gray-700 font-semibold">
        2023 - 2025 | DCI (DIGITAL CAREER INSTITUTE)
      </p>
      <Deutschkurs />
      <Kältehandschuh />
    </div>
  );
}

export default Projekte;
