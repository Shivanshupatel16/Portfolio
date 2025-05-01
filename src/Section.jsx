import { motion } from "framer-motion";
import { Monitor, LayoutDashboard, Camera } from "lucide-react";
const ServiceSection = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:text-4xl font-bold leading-tight mb-4 text-2xl"
      >
        Empowering brands{" "}
        <span className="text-white">to achieve digital excellence</span> with{" "}
        <span className="text-white">Creative Innovation</span>{" "}
        and <span className="text-white"> Full-stack MERN solutions.</span>.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-400 text-lg max-w-3xl mb-10"
      >
        I help brands transform their ideas into dynamic web applications with
        the MERN stack — combining creative design, solid strategy, and
        full-stack expertise..
      </motion.p>

      <div className="space-y-6">
        {[
          {
            title: "Web Design & Development",
            description:
              "Crafting modern, responsive websites with precision and creativity. I blend clean code with aesthetic visuals to deliver seamless user experiences that look great on every device.",
            icon: <Monitor size={28} />,
          },
          {
            title: "UI Design & Experience",
            description:
              "Designing interfaces that don't just look good—but feel right. I focus on intuitive layouts, smooth interactions, and purposeful design to ensure users enjoy every click and scroll.",
            icon: <LayoutDashboard size={28} />,
          },
          {
            title: "Video & Photography",
            description:
              "Capturing stories through cinematic visuals and crisp photography. From editing to color grading, I turn raw footage into engaging content that connects and communicates.",
            icon: <Camera size={28} />,
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="border border-dashed rounded-xl p-6 flex items-start gap-4 bg-[#121212]"
          >
            <div className="text-white mt-1">{service.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
