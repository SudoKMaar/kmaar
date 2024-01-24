"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Mousewheel, Autoplay } from "swiper/modules";
import { Achievement } from "@/typings";

interface AchievementSliderProps {
  achievements: Achievement[];
}

const AchievementSlider: React.FC<AchievementSliderProps> = ({
  achievements,
}) => {
  return (
    <>
      <div className=" relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="flex  flex-col-reverse sm:flex-row items-center justify-center gap-7 z-10 content">
          <div className="flex flex-col items-center justify-center max-w-[450px] text-justify px-8">
            <p className="font-medium text-base mb-5 leading-normal">
              Welcome to my{" "}
              <span className="achievements-honors">
                Achievements and Honors
              </span>{" "}
              section! This is where I showcase the milestones I&apos;ve reached
              and the recognition I&apos;ve received in my career. From winning
              coding competitions, to being acknowledged for my contributions in
              team projects, each honor holds a special place in my journey.
              These achievements serve as a testament to my dedication, skills,
              and continuous pursuit of excellence. So, take a moment to browse
              through and get to know more about my professional journey.
            </p>

            {/* <button className="btn">Join</button> */}
          </div>
          <Swiper
            className="w-[250px] h-[450px] py-12"
            modules={[EffectCards, Autoplay, Mousewheel]}
            effect="cards"
            mousewheel={{ invert: true }}
            centeredSlides={true}
            grabCursor={true}
            initialSlide={2}
            speed={500}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            {achievements.map((achievement, index) => (
              <SwiperSlide key={index}>
                <div
                  className="swiper-slide relative "
                  style={{
                    background: `linear-gradient(to top, #0f2027, #203a4300, #2c536400), url(${achievement.image.image}) no-repeat 50% 50% / cover`,
                  }}
                >
                  <span className="swiper-slide-span absolute top-0 right-0 text-white px-[18px] py-[7px] m-2">
                    {achievement.year}
                  </span>
                  <h2 className="absolute bottom-0 left-0 text-white font-normal text-lg leading-[1.4] mb-5 ml-5">
                    {achievement.title}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default AchievementSlider;
