import { motion } from "framer-motion";
import { AnimateColor } from "../components/AnimateColor";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiFigma,
} from "react-icons/si";
import myImage from "../assets/myImage.jpg"; // replace with your actual image path

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
      className="relative py-16 px-5 md:px-24 text-white overflow-hidden"
    >
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold font-orbitron">
          About Me
        </h1>
        <p className="mt-4 text-lg text-purple-200 font-poppins">
          I'm a MERN Stack web and mobile developer with a passion for crafting
          modern, responsive applications. I also specialize in UI/UX design
          using Figma.
        </p>
      </motion.div>

      {/* Image & Skills */}
      <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-52 h-52 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg"
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
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-md"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-md border border-white/20"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm text-center font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
