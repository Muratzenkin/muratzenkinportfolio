// import { useState } from "react";
// import MuratPortfolio from "./components/MyPortfolio";
// import IntroModal from "./components/IntroModal";

// function App() {
//   const [showIntro, setShowIntro] = useState(true);

//   return (
//     <div className="min-h-screen bg-gray-200 flex justify-center items-center p-8">
//       {/* Açılış Animasyonu */}
//       {showIntro && <IntroModal onClose={() => setShowIntro(false)} />}

//       {/* Ana İçerik */}
//       {!showIntro && <MuratPortfolio />}
//     </div>
//   );
// }

// export default App;

import MuratPortfolio from "./components/MyPortfolio";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center p-8">
      <MuratPortfolio />
    </div>
  );
}

export default App;
