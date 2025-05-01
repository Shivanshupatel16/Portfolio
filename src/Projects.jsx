import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

const ProjectsSection = () => {
  const projects = [
    {
      title: "EMS Portal",
      type: "Enterprise System",
      image:"https://static1.squarespace.com/static/629e0ace5f3f521cdb763056/t/62b468b0b15ed0503285c55e/1655990448564/ems-portal-logo.png?format=1500w",
      description:
        "Comprehensive employee management system with real-time analytics.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      github: "#",
    },
    {
      title: "Page Turn",
      type: "Web Animation",
      image:
        "https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png",
      description:
        "A peer-to-peer platform to buy/sell used books with interactive UI and best experience.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      github: "#",
    },
    {
      title: "FileBin Cloud",
      type: "File Storage",
      image:"https://cdn-icons-png.flaticon.com/512/28/28875.png",
      description:
        "Secure cloud storage with encrypted file sharing with interactive and attractive UI.",
      tech: ["Next.js", "AWS S3", "Node.js"],
      github: "#",
    },
  ];

  const ProjectCard = ({ project }) => (
    <motion.div
      whileHover={{ rotateY: 5, rotateX: -3 }}
      style={{ transformStyle: "preserve-3d" }}
      className="perspective-1000 rounded-2xl"
    >
      <a
        href="https://github.com/Shivanshupatel16"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden transform transition-all duration-300 cursor-pointer">
          <div className="h-64 overflow-hidden relative">
            <img
              src={project.image}
              className="w-full h-full object-cover"
              alt={project.title}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-sm text-cyan-400">{project.type}</span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {project.title}
                </h3>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-full bg-white/5"
              >
                <FiGithub className="text-xl text-white" />
              </motion.div>
            </div>

            <p className="text-gray-300 mt-3">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-300"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );

  return (
    <section className="min-h-screen  py-2 px-4 rounded-lg ">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl font-bold text-white text-center mb-16"
        >
          Featured <span className="text-cyan-400">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 100,
                scale: 0.9,
                filter: "blur(4px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
