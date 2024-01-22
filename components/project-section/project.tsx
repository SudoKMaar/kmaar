import { groq } from "next-sanity";
import { Projects } from "@/typings";
import { SectionHeading, SectionTitle } from "@/components/section-heading";
import MarqueeCards from "@/components/project-section/marquee-card";
import ProjectCard from "@/components/project-section/project-card";
import { sanityFetch } from "@/sanity/lib/client";

// export const revalidate = 10;

// async function getProject() {
//   const query = `*[_type == "project"]{
//     projectTitle,
//     projectImage{ "image": asset->url},
//     description,
//     liveLink,
//     gitHubLink
//   }`;
//   const data = await client.fetch(query);
//   return data;
// }

async function ProjectSection() {
  const query = groq`*[_type == "project"]{
    projectTitle,
    projectImage{ "image": asset->url},
    description,
    liveLink,
    gitHubLink
  }`;
  const project: Projects[] = await sanityFetch({
    query: query,
    tags: ["project"],
  });

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
