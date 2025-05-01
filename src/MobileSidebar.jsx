import { IoMdClose } from "react-icons/io";

const MobileSidebar = ({ isOpen, setIsOpen, sectionRefs }) => {
  const sidebarItems = [
    "HOME", "ABOUT ME", "SERVICES", "PROJECTS", 
    "SKILLS", "EDUCATION", "CONTACT"
  ];

  const handleScroll = (section) => {
    if (sectionRefs.current[section]) {
      sectionRefs.current[section].scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#1E1F21] shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-50`}
      >
        <div className="p-4 text-right">
          <IoMdClose 
            size={30} 
            className="text-white cursor-pointer" 
            onClick={() => setIsOpen(false)}
          />
        </div>

        <div className="space-y-6 p-4">
          {sidebarItems.map((item) => (
            <div
              key={item}
              onClick={() => handleScroll(item)}
              className="text-white text-lg font-medium py-2 px-4 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default MobileSidebar;