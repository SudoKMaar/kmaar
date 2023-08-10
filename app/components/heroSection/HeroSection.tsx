import React from "react";
import ProjectBtn from "./ProjectButton";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import Avatar from "./Avatar";
import ParticlesContainer from "./ParticlesContainer";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

function HeroSection({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "A Pragmatic Full Stack Developer",
      "Guy who creates aesthetic & modern app",
      "A Fierce Gamer by Passion",
      "From Coding Domains to Virtual Realms, I Conquer all Landscape",
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 1,
  });
  return (
    <div className=" absolute h-screen w-full mx-auto top-0">
      <div className="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#7000ffbf]" />
          <div className="w-1 sm:h-80 h-40 purple-gradient" />
        </div>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <h1 className="text-white font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, Its me
            <br />
            <span className="text-[#7000ffbf]">Abhishek Kumar</span>
          </h1>
          <p className=" font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100 max-w-[75%]">
            <span>{text}</span>
            <Cursor cursorColor="white" />
          </p>
        </motion.div>
      </div>
      <div className="w-[100vw] h-[100vh] absolute right-0 bottom-0">
        {/* <ParticlesContainer /> */}
        <div className="bg-none md:bg-explosion md:bg-cover md:bg-right md:bg-no-repeat w-full h-full absolute mix-bleed-color-dodge translate-z-0 -z-10"></div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="z-5 absolute bottom-10 sm:px-36 px-26 max-w-7xl mx-auto gap-5"
        >
          <ProjectBtn />
        </motion.div>
        <a href="#about">
          <div className="absolute bottom-0 right-[50%] w-[35px] h-[64px] rounded-3xl border-4 border-[#aaa6c3] flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#aaa6c3] mb-1"
            />
          </div>
        </a>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className=" z-18 w-full h-full max-w-[400px] max-h-[400px] absolute right-[8%] bottom-0"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
