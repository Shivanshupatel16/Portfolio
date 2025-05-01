import { motion } from "framer-motion";
import { useEffect } from "react";

const Loader = ({ onFinish }) => {
  const letters = ["L", "O", "A", "D", "I", "N", "G" , "." , "."];

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex space-x-2 text-white text-5xl font-montserrat font-thin">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0, 
            }}
            transition={{
              delay: index * 0.3,    
              duration: 0.6,            
              ease: "easeInOut",        
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
