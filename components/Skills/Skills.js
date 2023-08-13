import React from "react";
import BallCanvas from "./Balls";
import { motion } from "framer-motion";
import { urlForImage } from "../../sanity/lib/image";

const Skills = ({ skills }) => {
  return (
    <>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p
          className={
            "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center"
          }
        >
          Power-ups in my Arsenal
        </p>
        <h2
          className={
            "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"
          }
        >
          Skills Carnival
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {skills?.map((skill) => (
          <div className="w-28 h-28" key={skill._id}>
            <BallCanvas icon={urlForImage(skill.skillImage).url().toString()} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
