import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Spline from "@splinetool/react-spline";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
//   const border = useMotionTemplate`1px solid ${color}`;
//   const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="h-screen flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden bg-gray-950 text-gray-200"
    >
      {/* Left Section */}
      <div className="flex-1 z-10 xl:pr-8 mb-8 xl:mb-0">
        <motion.h1
        initial={{ opacity: 0 , y: 80}}
        animate={{ opacity : 1, y: 0}}
        transition={{
          type: "spring",
          stiffness: 40,
          delay: 1.3,
          duration: 1.5,
        }}
        className="text-5xl md:text-7xl
        lg:text-8xl font-bold z-10 mb-6 font-mrsSheppards tracking-widest">Web & Mobile <br /> Developer
         </motion.h1>

        <motion.p 
        initial={{ opacity: 0 , y: 80}}
        animate={{ opacity : 1, y: 0}}
        transition={{
          type: "spring",
          stiffness: 40,
          delay: 1.8,
          duration: 1.5,
        }}
        className="text-lg md:text-1xl font-poppins
        lg:text-2xl text-purple-200 max-w-2xl">I’m a web and mobile developer specializing
           in the MERN stack, creating responsive, use
           -friendly websites and mobile applications
            that solve real-world problems and help
             businesses grow. With a strong foundation
              in both front-end and back-end development, 
              I enjoy transforming ideas into functional
              , high-quality digital solutions. 
              My focus is on writing clean, 
              maintainable code and delivering 
              reliable products that meet client
               needs and exceed user expectations.</motion.p>

      </div>

      {/* Right Section */}
      <div className="flex-1 z-10 xl:pl-8 flex items-center justify-center">
        <div className="w-full h-96 xl:h-[500px] max-w-lg xl:max-w-none">
          {/* <Spline 
            scene="https://prod.spline.design/ZH0N0X5EF3nNQdC1/scene.splinecode"
            "
          /> */}

           <Spline scene="https://prod.spline.design/mQS8G3uOJRpGC30W/scene.splinecode" />
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};