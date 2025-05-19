import KontaktDetails from "./KontaktDetails.tsx";
import Zertifikats from "./Zertifikats.tsx";
import Language from "./Language.tsx";
import SoftSkills from "./SoftSkills.tsx";
import Expertise from "./Expertise.tsx";
import Titel from "./Titel.tsx";
import Bildung from "./Bildung.tsx";
import BerufsErfahrung from "./BerufsErfahrung.tsx";
import Projekte from "./Projekte/Projekte.tsx";
import Services from "./Services.tsx";
import Bieten from "./WebDesignFeatures.tsx";

const MuratPortfolio = () => {
  return (
<div className="min-h-screen bg-gray-100 flex flex-col">
  {/* Header */}
  <header className="w-full flex flex-col md:flex-row justify-between items-center px-6 py-4">
    {/* Sol Taraf: Logo ve Başlık */}
    <div className="text-center md:text-left mb-4 md:mb-0">
      <div className="text-4xl font-bold">
        <span className="text-orange-500">m</span>
        <span className="text-black">urat</span>
        <span className="text-orange-500">z</span>
        <span className="text-black">enkin</span>
      </div>
      <div className="text-gray-500 text-sm mt-2">
        Webentwicklung & kreative Lösungen
      </div>
    </div>

    {/* Sağ Taraf: Yazı */}
    <div className="text-gray-700 text-lg italic font-light max-w-md md:text-right">
    Moderne Webentwicklung für echte Nutzer
    </div>
  </header>

      {/* Ana İçerik */}
      <div className="flex flex-col md:flex-row justify-center items-center p-4">
        <div className="bg-gray-100 shadow-xl rounded-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden border border-gray-300">
          {/* Linke Seite */}
          <div className="w-full md:w-1/3 bg-gray-200 p-6 flex flex-col items-center">
              <img
              src="/image/profilbild.webp"
              alt="Murat Zenkin"
              className="w-48 h-auto rounded-4xl shadow-md mb-6"
            />
            <KontaktDetails />
            <Zertifikats />
            <Language />
            <SoftSkills />
            <Expertise />
            <Bieten />
          </div>

          {/* Rechte Seite */}
          <div className="w-full md:w-2/3 p-6">
            <Titel />
            <Services />
            <Bildung />
            <BerufsErfahrung />
            <Projekte />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuratPortfolio;