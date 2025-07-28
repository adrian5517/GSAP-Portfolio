import { useEffect } from "react";
import { animate, useMotionTemplate, useMotionValue } from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AnimateColor = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  // Central radial gradient
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 50%, #020617 50%, ${color})`;

  return {
    color,
    backgroundImage,
  };
};
