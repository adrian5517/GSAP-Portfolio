import { motion } from "framer-motion";
import { AnimateColor } from "../components/AnimateColor";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiFigma,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import myImage from "../assets/myImage.jpg";
import myCV from "../personalFile/Adrian2025CV.pdf";

// 🧠 Skills Array
const skills = [
  { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
  { icon: <SiExpress className="text-gray-300" />, name: "Express.js" },
  { icon: <SiReact className="text-blue-400" />, name: "React.js" },
  { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
  { icon: <SiFigma className="text-pink-500" />, name: "Figma (UI/UX)" },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
  { icon: <SiHtml5 className="text-orange-500" />, name: "HTML5" },
  { icon: <SiCss3 className="text-blue-500" />, name: "CSS3" },
];

const About = () => {
  const { backgroundImage } = AnimateColor();

  return (
    <motion.section
      id="about"
      style={{
        backgroundImage,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="relative py-24 px-5 md:px-24 overflow-hidden flex items-center justify-center"
    >
      {/* Glass Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl bg-white/10 border border-white/20 backdrop-blur-2xl rounded-3xl p-10 md:p-16 shadow-xl text-white"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-orbitron">
            About Me
          </h1>
          <p className="mt-4 text-lg text-purple-200 font-poppins">
            I'm a MERN Stack developer passionate about building fast, beautiful,
            and scalable web & mobile applications. I also craft UI/UX designs in
            Figma with a modern aesthetic.
          </p>

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
          {/* Image */}
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

          {/* Skills Grid */}
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
                className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/20 transition-all"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-sm text-center font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Final Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 max-w-3xl mx-auto text-center text-purple-200 font-poppins"
        >
          <p className="text-md md:text-lg leading-relaxed">
            My mission is to build tools that drive growth and improve user
            interaction. Whether it's a sleek frontend interface or robust backend
            logic, I enjoy solving problems through clean code and elegant design.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
