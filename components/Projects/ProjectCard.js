import { m, LazyMotion, domAnimation } from "framer-motion";
import { projects } from "../../utils/constants";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="flex">
      <LazyMotion features={domAnimation} strict>
        {projects?.map((project, index) => (
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
            className="card w-[300px] h-[350px] flex flex-col items-center bg-[#7000ffbf] rounded-xl border-4 border-primary-600 link"
          >
            <div className="w-full h-14 flex items-center gap-1 p-1 flex-col">
              <img
                className="p-image"
                loading="lazy"
                src={project.image}
                alt={project.name}
              />
              <span
                className="text-xl"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                }}
              >
                {project.name}
              </span>
              <span
                className="text-center h-max bg-[#7000ffbf] text-[#16161b] rounded-xl text-sm p-1 "
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                }}
              >
                {project.description}
              </span>
              <span className="absolute bottom-1 flex flex-row link gap-3 z-20 link">
                <a
                  href={project.source_code_link}
                  className="link primaryButton p-1 h-[30px] w-[120px] text-center drop-shadow-md bottom-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.demo_link}
                  className="link primaryButton p-1 h-[30px] w-[120px] text-center shadow-md bottom-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </span>
            </div>
          </m.div>
        ))}
      </LazyMotion>
    </div>
  );
};

export default ProjectCard;
