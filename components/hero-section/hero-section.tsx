import React from "react";
import { getPageInfo } from "@/sanity/lib/query";
import { PageInfo } from "@/typings";
import { fadeIn } from "@/lib/motion";
import { MotionDiv } from "@/components/ui/motion-elements";
import ProjectBtn from "@/components/hero-section/project-button";
import Avatar from "@/components/hero-section/avatar";
// import ParticlesContainer from "@/components/hero-section/particles-container";
import TypeWriter from "@/components/hero-section/typewriter";
import TopLeftImage from "@/components/hero-section/top-left-image";

export const revalidate = 10;

async function HeroSection() {
  const pageInfo: PageInfo = await getPageInfo();
  return (
    <div className="absolute h-screen w-full mx-auto top-0">
      <div className="w-[100vw] h-[100vh] absolute z-5 right-0 bottom-0">
        <div className="bg-explosion bg-cover bg-left md:bg-right bg-no-repeat w-full h-full absolute mix-bleed-color-dodge translate-z-0">
          {/* <ParticlesContainer /> */}
        </div>
        <TopLeftImage />
        <MotionDiv
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 3,
          }}
          className="z-10 absolute bottom-10 sm:px-36 px-26 mx-auto gap-5"
        >
          <ProjectBtn />
        </MotionDiv>
        <a href="#about">
          <div className="absolute bottom-0 right-[50%] w-[35px] h-[64px] rounded-3xl border-4 border-[#aaa6c3] flex justify-center items-start z-40 p-2 link cursor-none">
            <MotionDiv
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

        <MotionDiv
          variants={fadeIn("up", "tween", 2.4, 1.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="z-18 w-full h-full max-w-[400px] max-h-[400px] absolute md:right-[0%] lg:right-[17%] xl:right-[15%] 2xl:right-[18%] bottom-0 "
        >
          <Avatar
            heroImageUrl={pageInfo.heroImage.image}
            heroImageAlt={pageInfo.heroImage.alt}
          />
        </MotionDiv>
      </div>
      <div className="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#7000E1]" />
          <div className="w-1 sm:h-80 h-40 purple-gradient visible" />
        </div>
        <MotionDiv
          variants={fadeIn("up", "tween", 2.4, 1.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <h1 className="text-white font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, Its me
            <br />
            <span className="text-[#7000E1] text-gradient text-shadow">
              {pageInfo.name}
            </span>
          </h1>
          <TypeWriter words={pageInfo.words} />
        </MotionDiv>
      </div>
    </div>
  );
}

export default HeroSection;
