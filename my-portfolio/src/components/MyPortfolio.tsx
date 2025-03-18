import KontaktDetails from "./KontaktDetails.tsx";
import Zertifikats from "./Zertifikats.tsx";
import Language from "./Language.tsx";
import SoftSkills from "./SoftSkills.tsx";
import Expertise from "./Expertise.tsx";
import Titel from "./Titel.tsx";
import Bildung from "./Bildung.tsx";
import BerufsErfahrung from "./BerufsErfahrung.tsx";
import Projekte from "./Projekte.tsx";

const MuratPortfolio = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center p-8">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-5xl flex overflow-hidden border border-gray-300">
        {/* Linke Seite */}
        <div className="w-1/3 bg-gray-100 p-6 flex flex-col items-center">
          {/* Profil Bild */}
          <img
            src="/image/profilbild.webp"
            alt="Murat Zenkin"
            className="w-60 h-76 rounded border-4 border-gray-500 shadow-md mb-6"
          />
          <KontaktDetails />
          <Zertifikats />
          <Language />
          <SoftSkills />
          <Expertise />
        </div>

        {/* Rechte Seite  */}
        <div className="w-2/3 p-8">
          <Titel />
          <Bildung />
          <BerufsErfahrung />
          <Projekte />
        </div>
      </div>
    </div>
  );
};

export default MuratPortfolio;
