// import { useState } from "react";
import MuratPortfolio from "./components/MyPortfolio";

// import IntroModal from "./components/IntroModal";

function App() {
  // const [showIntro, setShowIntro] = useState(true);

  return (
    // <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
    //   {/* Açılış Animasyonu */}
    //   {showIntro && <IntroModal onClose={() => setShowIntro(false)} />}

    //   {/* Ana İçerik */}
    //   {!showIntro && <MuratPortfolio />}
    // </div>
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
          <MuratPortfolio />
    </div>

  );
}

export default App;
