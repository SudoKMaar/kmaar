import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { urlForImage } from "../../sanity/lib/image";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={urlForImage(experience.companyImage).url()}
            alt={experience.companyName}
            width={60}
            height={60}
            layout="responsive"
            objectFit="contain"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {experience.jobTitle}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.companyName}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Work = ({ experience }) => {
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
          Beyond Gaming: Bringing Ideas to life
        </p>
        <h2
          className={
            "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"
          }
        >
          My Full Stack Journey in Code
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experience.map((experienceItem, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experienceItem}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Work;
