import { useEffect } from "react";
import { animate, useMotionTemplate, useMotionValue } from "framer-motion";

// Bright dynamic color palette
const COLORS_TOP = [ "#1E67C6", "#CE84CF", "#DD335C"];

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

  // Bigger and smoother central radial background
  const backgroundImage = useMotionTemplate`
    radial-gradient(125% 125% at 50% 50%, ${color} 0%, #020617 60%)
  `;

  return {
    color,
    backgroundImage,
  };
};
