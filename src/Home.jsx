import { motion, AnimatePresence } from "framer-motion";
import { GoDownload } from "react-icons/go";
import { useState,useEffect } from "react";

const HomeSection = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const floatingMessages = [
    "Hi there!",
    "I am Shivanshu",
    "I am a Web Developer",
  ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentMessage((prev) => (prev + 1) % floatingMessages.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
            Hi there!{" "}
            <motion.span
              animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block origin-bottom-left"
            >
              👋
            </motion.span>
          </h1>
          <p className="text-4xl md:text-5xl lg:text-6xl text-white mt-4 font-nunito">
            Creative and Passionate Web Developer.
          </p>
          <p className="text-md text-gray-500 mt-6 max-w-2xl leading-relaxed">
            I am a creative web developer, dedicated to building powerful and
            engaging digital solutions. I transform ideas into beautiful,
            high-performing websites, combining sleek design, cutting-edge
            technology, and user-focused experiences that leave a lasting
            impact.
          </p>
        </motion.div>
        <div className="flex">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Resume.pdf"
            target="_blank"
            className="bg-[#1E1F21] border border-b-white border-b-4 px-8 py-4 rounded-full text-xl font-bold text-white shadow-lg hover:shadow-xl transition-all font-serif flex items-center h-12 ml-12 lg:h-20 lg:-mx-4"
          >
            Download CV
            <GoDownload className="text-white ml-2 size-7" />
          </motion.a>
        </div>
      </div>

      {/* Profile Image Section */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 lg:ml-12 border-[#1E1F21] ">
        <motion.img
          src="/me.jpg"
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
        />
        <div className="relative ">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessage}
              className="absolute bottom-8 left-0 bg-gray-900/20 backdrop-blur-sm rounded-full overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              exit={{ width: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <motion.div
                className="px-6 py-3 whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {floatingMessages[currentMessage]
                  .split(" ")
                  .map((word, index) => (
                    <motion.span
                      key={index}
                      className="text-white text-md font-semibold font-mono tracking-wide mr-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 150,
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="absolute bottom-8 -translate-x-1/2 h-12 backdrop-blur-sm bg-gray-900/20 rounded-full"
            animate={{
              scaleX: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
