import React from "react";
import MarqueeCards from "./MarqueeCards";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const ProjectSection = () => {
  return (
    <div className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
        <div className="w-full">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p
              className={
                "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center"
              }
            >
              Gaming and Coding Collide
            </p>
            <h2
              className={
                "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"
              }
            >
              My work retrospective
            </h2>
          </motion.div>
        </div>
        <div className="xl:border-l-2 xl:border-r-2 xl:border-[#7000ffbf] h-fit">
          <div className="relative">
            <div className="absolute top-[45px] w-full h-[1px] bg-[#7000ffbf]"></div>
            <MarqueeCards direction="left">
              <ProjectCard />
            </MarqueeCards>
          </div>
          <div className="relative">
            <div className="absolute top-[45px] w-full h-[1px] bg-[#7000ffbf]"></div>
            <MarqueeCards direction="right">
              <ProjectCard />
            </MarqueeCards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
