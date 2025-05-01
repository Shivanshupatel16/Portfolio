import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast, Toaster } from "sonner";
import { useForm, ValidationError } from "@formspree/react";
import HomeSection from "./Home";
import {
  FiHome,
  FiUser,
  FiSettings,
  FiBriefcase,
  FiFileText,
  FiMail,
} from "react-icons/fi";
import ReactSnowfall from "react-snowfall";
import AboutSection from "./About";
import ServiceSection from "./Section";
import ProjectsSection from "./Projects";
import SkillsSection from "./Skills";
import EducationSection from "./Education";
import ContactSection from "./Contact";
import Navbar from "./Navbar";
import Loader from "./Loader";
import MobileSidebar from "./MobileSidebar";
import Particles from "@tsparticles/react";
// import { loadFull } from "@tsparticles/engine";
import { loadFull } from 'tsparticles';



function App() {
  const sidebarItems = [
    { name: "HOME", icon: <FiHome /> },
    { name: "ABOUT ME", icon: <FiUser /> },
    { name: "SERVICES", icon: <FiSettings /> },
    { name: "PROJECTS", icon: <FiBriefcase /> },
    { name: "SKILLS", icon: <FiBriefcase /> },
    { name: "EDUCATION", icon: <FiFileText /> },
    { name: "CONTACT", icon: <FiMail /> },
  ];

  const floatingMessages = [
    "Hi there!",
    "I am Shivanshu",
    "I am a Web Developer",
  ];

  const [activeItem, setActiveItem] = useState("HOME");
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [state, handleSubmit] = useForm("mdkgkzop");
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [lowerLeftSidebarOpen, setLowerLeftSidebarOpen] = useState(true);

  const handleLoaderFinish = () => {
    setLoadingFinished(true);
  };

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thanks for sending message! Will reply you asap!");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }
  }, [state.succeeded]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY <= 10) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionRefs = useRef({});

  const handleMobileSidebarToggle = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const handleLowerLeftSidebarToggle = () => {
    setLowerLeftSidebarOpen(!lowerLeftSidebarOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % floatingMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      for (const item of sidebarItems) {
        const el = sectionRefs.current[item.name];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveItem(item.name);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!loadingFinished && <Loader onFinish={handleLoaderFinish} />}

      {loadingFinished && (
        <div>
          <Toaster
            position="bottom-right"
            theme="dark"
            toastOptions={{
              classNames: {
                toast:
                  "text-white border border-zinc-700 shadow-md bg-[#121212] text-sm md:text-base",
              },
            }}
          />
          <div className="relative w-full min-h-screen">
            <div
              className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
              style={{
                backgroundImage: `url('https://up2client.com/envato/arya-stark/html/main-file/dark-mode/layout_one/background-img-snow/assets/images/home-images/snow-img2.jpg')`,
              }}
            >
              <ReactSnowfall snowflakeCount={300} />
            </div>

            <Navbar setMobileSidebarOpen={setMobileSidebarOpen} />
            <MobileSidebar
              isOpen={mobileSidebarOpen}
              setIsOpen={setMobileSidebarOpen}
              sectionRefs={sectionRefs}
            />

            <div className="flex lg:mx-32 ml-10">
              <div
                className="flex-col space-y-7 w-72 sticky transition-all duration-300 hidden md:block"
                style={{
                  top: showNavbar ? "8rem" : "4rem",
                  height: "calc(100vh - 10rem)",
                  zIndex: 40,
                }}
              >
                <div
                  className={`fixed top-0 left-0 w-64 h-full bg-[#1E1F21] shadow-lg transition-transform transform ${
                    mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
                  } md:hidden`}
                >
                  <MobileSidebar
                    isOpen={mobileSidebarOpen}
                    setIsOpen={setMobileSidebarOpen}
                    sectionRefs={sectionRefs}
                  />
                </div>
                <motion.div
                  className="bg-[#1E1F21] shadow-2xl rounded-3xl h-max p-2  "
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  style={{
                    position: "sticky",
                    top: "4rem",
                    zIndex: 10,
                  }}
                >
                  <div className="space-y-2 ml-3 mr-3 mt-3 mb-3 ">
                    {sidebarItems.map((item) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex justify-between items-center p-3 rounded-xl cursor-pointer transition-all
              ${
                activeItem === item.name
                  ? "bg-white text-black"
                  : "text-gray-300 hover:bg-white hover:text-black"
              }
              font-sans font-medium uppercase tracking-wide text-sm`}
                        onClick={() =>
                          sectionRefs.current[item.name]?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          })
                        }
                      >
                        <span>{item.name}</span>
                        <span
                          className={`text-xl ${
                            activeItem === item.name
                              ? "text-blue-600"
                              : "text-gray-400"
                          }`}
                        >
                          {item.icon}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="bg-[#1E1F21] shadow-2xl rounded-t-3xl p-6 h-72 "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  style={{
                    position: "sticky",
                    top: "calc(27rem )",
                    zIndex: 9,
                  }}
                >
                  <div className="flex flex-col justify-between items-center text-white">
                    <div className="flex flex-col ml-2">
                      <span className="text-gray-400 text-lg">
                        Phone:
                        <br />
                      </span>
                      <span className="text-white">+(91) 888 192 1897</span>
                      <span className="text-gray-400 mt-2 text-lg">
                        Email:
                        <br />
                      </span>
                      <span className="text-white">
                        shivanshupatel2004@gmail.com
                      </span>
                    </div>
                    <div>
                      <div className="flex justify-center items-center gap-3 mt-5">
                        <a
                          href="https://www.instagram.com/shivanshu1.1/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="https://skillicons.dev/icons?i=instagram"
                            className="w-8 h-8"
                          />
                        </a>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="https://skillicons.dev/icons?i=twitter"
                            className="w-8 h-8"
                          />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/shivanshupatel2004/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="https://skillicons.dev/icons?i=linkedin"
                            className="w-8 h-8"
                          />
                        </a>
                         <a
                          href="https://github.com/Shivanshupatel16"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="https://skillicons.dev/icons?i=github"
                            className="w-8 h-8"
                          />
                        </a> 
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-center items-center gap-3 mt-5">
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="flex-1 order-1 lg:order-2 space-y-8 lg:ml-6 xl:ml-10 mt-6 md:p-4 ">
              {sidebarItems.map((item) => (
                  <section
                    key={item.name}
                    ref={(el) => (sectionRefs.current[item.name] = el)}
                    className="bg-[#1E1F21] p-4 md:p-8 lg:p-12 rounded-3xl shadow-2xl text-white min-h-[80vh] flex flex-col justify-center"
                  >
                    {item.name === "HOME" && <HomeSection />}
                    {item.name === "ABOUT ME" && <AboutSection />}
                    {item.name === "SERVICES" && <ServiceSection />}
                    {item.name === "PROJECTS" && <ProjectsSection />}
                    {item.name === "SKILLS" && <SkillsSection />}
                    {item.name === "EDUCATION" && <EducationSection />}
                    {item.name === "CONTACT" && (
                      <ContactSection
                        handleSubmit={handleSubmit}
                        state={state}
                      />
                    )}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
