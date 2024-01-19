"use client";
import Image from "next/image";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Projects } from "@/typings";

const ProjectCard: React.FC<{ projects: Projects[] }> = ({ projects }) => {
  return (
    <div className="flex">
      <LazyMotion features={domAnimation} strict>
        {projects.map((projectItem, index) => (
          <m.div
            initial={{ scale: 0.8 }}
            animate={{
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
            key={index}
            className="w-[300px] h-[350px] flex flex-col items-center bg-[#560BAD] rounded-xl border-4 border-[#480CA8] link"
          >
            <div className="w-full h-14 flex items-center z-10 gap-1 p-1 flex-col">
              <Image
                className="p-image"
                loading="lazy"
                src={projectItem.projectImage.image}
                alt={projectItem.projectTitle}
                width={240}
                height={135}
              />
              <span className="text-xl font-bold text-amber-100">
                {projectItem.projectTitle}
              </span>
              <span className="text-center h-max bg-primary text-primary-foreground rounded-xl text-sm p-1 font-normal">
                {projectItem.description}
              </span>

              <span className="absolute bottom-[1px] flex flex-row link gap-3 z-20 link">
                <Button
                  variant="primary"
                  onClick={() => window.open(projectItem.gitHubLink, "_blank")}
                  className="p-1 w-[120px] text-white text-center rounded-md bottom-0"
                >
                  GitHub
                </Button>
                <Button
                  variant="primary"
                  onClick={() => window.open(projectItem.liveLink, "_blank")}
                  className="p-1 w-[120px] text-white text-center rounded-md bottom-0"
                >
                  Live
                </Button>
              </span>
            </div>
          </m.div>
        ))}
      </LazyMotion>
    </div>
  );
};

export default ProjectCard;
