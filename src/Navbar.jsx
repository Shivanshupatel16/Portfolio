import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import MobileSidebar from "./MobileSidebar";

const Navbar = ({ setMobileSidebarOpen, isMobileOpen }) => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY <= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`bg-[#1E1F21] text-white flex items-center justify-between px-4 md:px-8 py-2 md:py-3 h-14 md:h-20 mt-4 md:mt-7 rounded-full mx-4 md:mx-8 lg:mx-16 xl:mx-32 sticky top-0 z-50 transition-all duration-500 ease-in-out ml-10 w-full md:w-auto ${
          showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <div className="flex items-center">
          <img
            src="/s1.jpg"
            alt="Logo"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
          />
          <span className="ml-3 text-lg md:text-2xl font-bold font-serif">
            Shivanshu Patel
          </span>
        </div>
        <div className="flex items-center">
          <button className="hidden md:inline-flex bg-[#1E1F21] border border-b-white border-b-4 px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 focus:outline-none focus:ring-2 font-mono focus:ring-opacity-75">
            Hire Me
          </button>

          <button
            className="lg:hidden p-2 mr-2"
            onClick={() => setMobileSidebarOpen(!isMobileOpen)}
          >
            {isMobileOpen ? (
              <IoMdClose className="w-6 h-6 text-white" />
            ) : (
              <FiMenu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;