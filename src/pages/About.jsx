import { motion } from "framer-motion";
import { AnimateColor } from "../components/AnimateColor";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiFigma,
} from "react-icons/si";
import myImage from "../assets/myImage.jpg";
import myCV from "../personalFile/Adrian2025CV.pdf"; // 👈 Make sure you have your CV in this path

const skills = [
  { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
  { icon: <SiExpress className="text-gray-300" />, name: "Express.js" },
  { icon: <SiReact className="text-blue-400" />, name: "React.js" },
  { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
  { icon: <SiFigma className="text-pink-500" />, name: "Figma (UI/UX)" },
];

const About = () => {
  const { backgroundImage } = AnimateColor();

  return (
    <section
      id="about"
      style={{ backgroundImage }}
      className="relative py-24 px-5 md:px-24 text-white overflow-hidden min-h-screen"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold font-orbitron">
          About Me
        </h1>
        <p className="mt-4 text-lg text-purple-200 font-poppins">
          I'm a MERN Stack web and mobile developer with a passion for crafting
          fast, beautiful, and functional applications. I also design modern
          UI/UX interfaces in Figma with a focus on usability and aesthetics.
        </p>

        {/* Download Button */}
        <a
          href={myCV}
          download="Adrian-CV.pdf"
          className="inline-block mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 transition-all text-white font-semibold rounded-lg shadow-lg"
        >
          Download My CV
        </a>
      </motion.div>

      {/* Image & Skills */}
      <div className="mt-20 flex flex-col lg:flex-row items-center justify-center gap-16">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-52 h-52 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl"
        >
          <img
            src={myImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Skills Cards */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-md"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-md border border-white/20 transition-all"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm text-center font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Additional Description */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-24 max-w-3xl mx-auto text-center text-purple-200 font-poppins"
      >
        <p className="text-md md:text-lg leading-relaxed">
          My goal is to build tools and solutions that elevate businesses and
          improve user experiences. Whether it's creating interactive interfaces
          or powerful backend systems, I take pride in writing clean,
          maintainable code and continuously learning new technologies.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
