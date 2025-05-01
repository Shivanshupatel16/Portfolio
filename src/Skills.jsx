import { motion} from "framer-motion";

const SkillsSection = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-16 text-center"
      >
        Technical Mastery
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          {[
            {
              name: "Coding & Algorithms",
              percentage: 92,
              icon: (
                <img
                  src="https://skillicons.dev/icons?i=leetcode"
                  className="w-6 h-6"
                  alt="Coding"
                />
              ),
            },
            {
              name: "Frontend Development",
              percentage: 94,
              icon: (
                <img
                  src="https://skillicons.dev/icons?i=frontend"
                  className="w-6 h-6"
                  alt="Frontend"
                />
              ),
            },
            {
              name: "Backend Architecture",
              percentage: 88,
              icon: (
                <img
                  src="https://skillicons.dev/icons?i=backend"
                  className="w-6 h-6"
                  alt="Backend"
                />
              ),
            },
            {
              name: "Database Systems",
              percentage: 85,
              icon: (
                <img
                  src="https://skillicons.dev/icons?i=database"
                  className="w-6 h-6"
                  alt="Database"
                />
              ),
            },
            {
              name: "API Development",
              percentage: 88,
              icon: <a className="w-6 h-6 ml-5" />,
            },
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="border border-dashed rounded-xl p-6 bg-[#121212]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-blue-400">{skill.icon}</div>
                  <span className="text-lg font-semibold">{skill.name}</span>
                </div>
                <span className="text-blue-400 font-mono">
                  {skill.percentage}%
                </span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-2 bg-gray-700 rounded-full overflow-hidden"
              >
                <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            {
              name: "HTML",
              percentage: 98,
              icon: (
                <img
                  src="https://skillicons.dev/icons?i=html"
                  className="w-6 h-6"
                  alt="HTML5"
                />
              ),
            },
            {
              name: "CSS",
              percentage: 95,
              icon: (
                <img
                  src="https://skillicons.dev/icons?i=css"
                  className="w-6 h-6"
                  alt="CSS3"
                />
              ),
            },
            {
              name: "Tailwind CSS",
              percentage: 95,
              icon: (
                <img
                  src="https://skillicons.dev/icons?i=tailwind"
                  className="w-6 h-6"
                  alt="Tailwind CSS"
                />
              ),
            },
            {
              name: "JavaScript",
              percentage: 94,
              icon: (
                <img
                  src="https://skillicons.dev/icons?i=javascript"
                  className="w-6 h-6"
                  alt="JavaScript"
                />
              ),
            },
            {
              name: "React",
              percentage: 92,
              icon: (
                <img
                  src="https://skillicons.dev/icons?i=react"
                  className="w-6 h-6"
                  alt="React"
                />
              ),
            },
            {
              name: "Node.js",
              percentage: 90,
              icon: (
                <img
                  src="https://skillicons.dev/icons?i=nodejs"
                  className="w-6 h-6"
                  alt="Node.js"
                />
              ),
            },
            {
              name: "Postman",
              percentage: 85,
              icon: (
                <img
                  src="https://skillicons.dev/icons?i=postman"
                  className="w-6 h-6"
                  alt="Postman"
                />
              ),
            },
            {
              name: "MongoDB",
              percentage: 87,
              icon: (
                <img
                  src="https://skillicons.dev/icons?i=mongodb"
                  className="w-6 h-6"
                  alt="MongoDB"
                />
              ),
            },
            {
              name: "SQL",
              percentage: 89,
              icon: (
                <img
                  src="https://skillicons.dev/icons?i=mysql"
                  className="w-6 h-6"
                  alt="SQL"
                />
              ),
            },
            {
              name: "Docker",
              percentage: 85,
              icon: (
                <img
                  src="https://skillicons.dev/icons?i=docker"
                  className="w-6 h-6"
                  alt="Docker"
                />
              ),
            },
            {
              name: "Redux Toolkit",
              percentage: 90,
              icon: (
                <img
                  src="https://skillicons.dev/icons?i=redux"
                  className="w-6 h-6"
                  alt="Redux Toolkit"
                />
              ),
            },
            {
              name: "Nginx",
              percentage: 83,
              icon: (
                <img
                  src="https://skillicons.dev/icons?i=nginx"
                  className="w-6 h-6"
                  alt="Nginx"
                />
              ),
            },
            {
              name: "C/C++",
              percentage: 86,
              icon: (
                <img
                  src="https://skillicons.dev/icons?i=cpp"
                  className="w-6 h-6 "
                  alt="C/C++"
                />
              ),
            },
            {
              name: "Ubuntu",
              percentage: 91,
              icon: (
                <img
                  src="https://skillicons.dev/icons?i=ubuntu"
                  className="w-6 h-6"
                  alt="Ubuntu"
                />
              ),
            },
          ].map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="border border-dashed rounded-xl p-6 bg-[#121212]"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div>{tech.icon}</div>
                  <span className="font-medium">{tech.name}</span>
                </div>
                <span className="text-gray-400 text-sm font-mono">
                  {tech.percentage}%
                </span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${tech.percentage}%` }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="h-1 bg-gray-700 rounded-full overflow-hidden"
              >
                <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;
