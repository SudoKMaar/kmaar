"use client";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Experience } from "@/typings";

const ExperienceTimeline: React.FC<{ experience: Experience[] }> = ({
  experience,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div ref={ref} className="mt-20 flex flex-col">
      <VerticalTimeline
        animate={true}
        className="[--line-color:#808080] dark:[--line-color:#fff]"
        lineColor="var(--line-color}"
      >
        {experience.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                background: "#1d1836",
                color: "#808080",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <Image
                    src={experience.companyLogo.image}
                    alt={experience.companyLogo.alt}
                    width={60}
                    height={60}
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
                  className="text-[#808080] text-[16px] font-semibold"
                  style={{ margin: 0 }}
                >
                  {experience.companyName}
                </p>
              </div>

              <ul className="mt-5 list-disc ml-5 text-white space-y-2">
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
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ExperienceTimeline;
