import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MousePointer } from "lucide-react";

function IntroModal({ onClose }: { onClose: () => void }) {
  const [showHand, setShowHand] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowHand(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md text-center relative"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.6, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
          Willkommen zu meinem Portfolio!
        </h2>
        <p className="text-gray-700 text-lg mb-5 leading-relaxed">
          Entdecke meine{" "}
          <span className="font-semibold text-orange-500">
            Karriere, Fähigkeiten
          </span>{" "}
          und <span className="font-semibold text-orange-500">Projekte</span>.
          <br />
          <span className="text-gray-900 font-medium">
            Zögere nicht, auf die verschiedenen Bereiche zu klicken – es gibt
            viel zu erkunden!
          </span>
        </p>

        <motion.button
          onClick={onClose}
          className="bg-orange-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition text-lg font-semibold relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Los geht’s!
        </motion.button>

        {showHand && (
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 mt-4"
            initial={{ y: -10, opacity: 0 }}
            animate={{
              y: [0, -10, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <MousePointer size={40} className="text-orange-500" />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default IntroModal;
