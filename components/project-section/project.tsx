import { Projects } from "@/typings";
import { getProject } from "@/sanity/lib/query";
import { SectionHeading, SectionTitle } from "@/components/section-heading";
import MarqueeCards from "@/components/project-section/marquee-card";
import ProjectCard from "@/components/project-section/project-card";

export const revalidate = 10;

async function ProjectSection() {
  const project: Projects[] = await getProject();
  return (
    <>
      <SectionHeading
        color="194,97,254"
        colorDark="53,42,79"
        colorDarkLight="114,9,183"
      >
        <SectionTitle
          title={<>My Work Retrospective</>}
          text="Gaming & Coding Collide"
        />
      </SectionHeading>
      <div className="w-full overflow-hidden flex justify-center">
        <div className="w-full min-h-[800px] flex flex-col xl:w-[70%] mx-auto">
          <div className="xl:border-l-2 xl:border-r-2 xl:border-[#7000ffbf] h-full">
            <div className="relative">
              <div className="absolute top-[45px] w-full h-[1px] bg-[#7000ffbf]"></div>
              <MarqueeCards direction="left">
                <ProjectCard projects={project} />
              </MarqueeCards>
            </div>
            <div className="relative">
              <div className="absolute top-[45px] w-full h-[1px] bg-[#7000ffbf]"></div>
              <MarqueeCards direction="right">
                <ProjectCard projects={project} />
              </MarqueeCards>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectSection;
