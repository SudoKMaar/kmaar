"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CollaborationSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax w-screen h-screen relative flex items-center justify-center overflow-hidden"
      ref={ref}
    >
      <motion.h1
        className="text-4xl sm:text-7xl text-center text-white"
        style={{ y: yText }}
      >
        Interested in <br />
        COLLABORATION
      </motion.h1>
      <motion.div className="bg-[url('/mountains.webp')] sm:bg-cover bg-bottom w-full h-full absolute z-[3] bg-no-repeat bg-contain"></motion.div>
      <motion.div
        className="bg-[url('/sun.webp')] dark:bg-[url('/planets.webp')] sm:bg-cover bg-bottom w-full h-full absolute z-[2] bg-no-repeat bg-contain"
        style={{
          y: yBg,
        }}
      ></motion.div>
      <motion.div
        style={{ x: yBg }}
        className="bg-[url('/stars.webp')] bg-cover bg-bottom w-full h-full absolute z-[1]"
      ></motion.div>
    </div>
  );
};

export default CollaborationSection;
