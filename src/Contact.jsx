import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "sonner";
import { FiPhone, FiMessageCircle, FiMapPin } from "react-icons/fi";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mdkgkzop");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thanks for sending message! Will reply you asap!");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }
  }, [state.succeeded]);

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="lg:text-5xl font-bold mb-4 text-3xl" >
          Let's Talk With Us
          <span className="block text-2xl text-gray-400 mt-4">
            Got Ideas? We've got the skills
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We are the top creative agency for branding corp. We offer a full
          range of services to help clients improve their search engine rankings
          and drive more traffic to their websites.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="border border-dashed rounded-xl p-8 bg-[#121212]"
        >
          <div className="space-y-6">
            <form onSubmit={handleSubmit}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <label
                  htmlFor="name"
                  className="text-gray-400 text-sm block mb-2"
                >
                  NAME*
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full bg-[#1E1F21] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <label
                  htmlFor="email"
                  className="text-gray-400 text-sm block mb-2 mt-2"
                >
                  EMAIL*
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full bg-[#1E1F21] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="message"
                  className="text-gray-400 text-sm block mb-2 mt-2"
                >
                  MESSAGE*
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full bg-[#1E1F21] rounded-lg px-4 py-3 text-white h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Write your message..."
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-[#1E1F21] border border-b-white flex border-b-4 px-8 py-3 mt-4 rounded-full text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 focus:outline-none focus:ring-2 font-mono focus:ring-opacity-75"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 overflow-auto"
        >
          {[
            {
              icon: <FiPhone size={28} />,
              title: "Call Us",
              content: "Monday to Friday 8:30 - 17:00\n(+91) 8881 921 897",
            },
            {
              icon: <FiMessageCircle size={28} />,
              title: "Chat to Us",
              content: "shivanshupatel2004@gmail.com",
            },
            {
              icon: <FiMapPin size={28} />,
              title: "Visit Us",
              content: "SS-150 Sector C-1 LKO",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="border border-dashed rounded-xl p-8 bg-[#121212]"
            >
              <div className="flex items-start gap-6">
                <div className="text-blue-400 p-3 bg-[#1E1F21] rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default ContactSection;
