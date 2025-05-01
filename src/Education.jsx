import { motion, AnimatePresence } from "framer-motion";

const EducationSection = () => {
  const resumeData = [
    {
      title: "BACHELOR OF TECHNOLOGY (CS)",
      place: "KIET Group of Institutions / 2023 - 2027",
      description:
        "Pursuing a degree in Computer Science with an emphasis on full-stack web development, UI/UX design, and modern JavaScript frameworks. Engaged in hands-on projects and hackathons to solve real-world problems.",
    },
    {
      title: "SENIOR SECONDARY SCHOOL",
      place: "Lucknow Public School / 2020 - 2022",
      description:
        "Specialized in Physics, Chemistry, and Mathematics. Excelled in academic performance while nurturing a passion for technology and design through self-initiated web development projects.",
    },
    {
      title: "HIGH SCHOOL",
      place: "Lucknow Public School / 2018 - 2020",
      description:
        "Developed a strong academic foundation with a focus on Science and Mathematics. Participated in various extracurricular activities, including school exhibitions and coding clubs.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-10">Education</h2>
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-1">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full bg-white/30 rounded-full"
          />
        </div>
        <div className="space-y-14 pl-12">
          {resumeData.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.2 + 0.3,
                duration: 1,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}
                className="absolute -left-[38px] w-4 h-4 rounded-full bg-white"
              />
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{item.place}</p>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default EducationSection;
