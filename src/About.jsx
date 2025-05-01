import { motion, AnimatePresence } from "framer-motion";
import { GoDownload } from "react-icons/go";
import { useState } from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-12 text-white">
      <div className="w-full md:w-1/3 space-y-8">
        <div>
          <h1 className="text-2xl font-light leading-tight">
            I’m{" "}
            <span className="text-white text-4xl font-extrabold">
              Shivanshu
            </span>{" "}
            <br />
            <span className="text-white text-4xl font-extrabold">Patel</span>
          </h1>
        </div>
        <div className="space-y-6">
          {[
            { value: "Ongoing", label: "Learning Journey" },
            { value: "10k+", label: "Hours Practiced" },
            { value: "10+", label: "Projects Done" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="border border-dashed rounded-xl p-6 text-center"
            >
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="text-gray-400 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-2/3 space-y-6">
        <p className="text-xl text-gray-300 leading-relaxed">
          Hello! <span className="text-white font-semibold">I’m Shivanshu</span>
          , a self-taught & hardworking{" "}
          <span className="text-white font-semibold">Web Developer</span>{" "}
          currently pursuing{" "}
          <span className="text-white font-semibold">
            B.Tech in Computer Science
          </span>
          . Started in my childhood room as a hobby quickly turned into a
          mission{" "}
          <span className="text-white font-semibold">
            to create stunning, mern stack projects.
          </span>
          .
        </p>
        <p className="text-sm text-gray-400 leading-relaxed">
          Though I’m early in my professional journey, I’ve spent countless
          hours in mastering frontend and backend technologies, and building
          real-world projects that solve real problems. I'm a creative and
          curious developer who loves turning ideas into smooth, beautiful web
          experiences, using the MERN stack to bring them to life.
        </p>

        <div className="space-y-4">
          {[
            ["Name", "Shivanshu Patel"],
            ["Nationality", "India"],
            ["Phone", "+91 8881 921 897"],
            ["Email", "shivanshupatel2004@gmail.com"],
            ["Freelance", "Available"],
            ["Language", "English, Hindi"],
          ].map(([label, value], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-between text-lg"
            >
              <span className="text-gray-400">{label}</span>
              <span className="text-white font-medium">{value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
