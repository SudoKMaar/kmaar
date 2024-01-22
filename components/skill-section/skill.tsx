import { groq } from "next-sanity";
import { Skill } from "@/typings";
import SkillDataProvider from "@/components/skill-section/skill-data-provider";
import { SectionHeading, SectionTitle } from "@/components/section-heading";
import { Container } from "@/components/container";
import { sanityFetch } from "@/sanity/lib/client";

// export const revalidate = 10;

// async function getSkill() {
//   const query = `*[_type == "skill"]{
//     skillTitle,
//     skillLogo{ "image": asset->url},
//     skillHeight,
//     skillWidth}`;
//   const data = await client.fetch(query);
//   return data;
// }
// async function getSkill1() {
//   const query = `*[_type == "skill1"]{
//     skillTitle,
//     skillLogo{ "image": asset->url},
//     skillHeight,
//     skillWidth}`;
//   const data = await client.fetch(query);
//   return data;
// }
// async function getSkill2() {
//   const query = `*[_type == "skill2"]{
//     skillTitle,
//     skillLogo{ "image": asset->url},
//     skillHeight,
//     skillWidth}`;
//   const data = await client.fetch(query);
//   return data;
// }
// async function getSkill3() {
//   const query = `*[_type == "skill3"]{
//     skillTitle,
//     skillLogo{ "image": asset->url},
//     skillHeight,
//     skillWidth}`;
//   const data = await client.fetch(query);
//   return data;
// }
// async function getSkill4() {
//   const query = `*[_type == "skill4"]{
//     skillTitle,
//     skillLogo{ "image": asset->url},
//     skillHeight,
//     skillWidth}`;
//   const data = await client.fetch(query);
//   return data;
// }

async function SkillSection() {
  const skillQuery = groq`*[_type == "skill"]{
    skillTitle, 
    skillLogo{ "image": asset->url},
    skillHeight,
    skillWidth}`;
  const skill: Skill[] = await sanityFetch({
    query: skillQuery,
    tags: ["skill"],
  });
  const skill1Query = groq`*[_type == "skill1"]{
    skillTitle, 
    skillLogo{ "image": asset->url},
    skillHeight,
    skillWidth}`;
  const skill1: Skill[] = await sanityFetch({
    query: skill1Query,
    tags: ["skill1"],
  });
  const skill2Query = groq`*[_type == "skill2"]{
    skillTitle, 
    skillLogo{ "image": asset->url},
    skillHeight,
    skillWidth}`;
  const skill2: Skill[] = await sanityFetch({
    query: skill2Query,
    tags: ["skill2"],
  });
  const skill3Query = groq`*[_type == "skill3"]{
    skillTitle, 
    skillLogo{ "image": asset->url},
    skillHeight,
    skillWidth}`;
  const skill3: Skill[] = await sanityFetch({
    query: skill3Query,
    tags: ["skill3"],
  });
  const skill4Query = groq`*[_type == "skill4"]{
    skillTitle, 
    skillLogo{ "image": asset->url},
    skillHeight,
    skillWidth}`;
  const skill4: Skill[] = await sanityFetch({
    query: skill4Query,
    tags: ["skill4"],
  });

  return (
    <>
      <SectionHeading
        color="194,97,254"
        colorDark="53,42,79"
        colorDarkLight="114,9,183"
      >
        <SectionTitle
          title={<>Skills Carnival</>}
          text="Power-Ups In My Arsenal"
        />
      </SectionHeading>
      <Container className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20 ">
        <div className="relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]">
          <div
            className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center max-w-7xl mx-auto"
            style={{ transform: "scale(0.9)" }}
          >
            {skill.map((skill, index) => (
              <SkillDataProvider
                key={index}
                src={skill.skillLogo.image}
                alt={skill.skillTitle}
                height={skill.skillHeight}
                width={skill.skillWidth}
                index={index}
              />
            ))}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center max-w-7xl mx-auto">
            {skill1.map((skill, index) => (
              <SkillDataProvider
                key={index}
                src={skill.skillLogo.image}
                alt={skill.skillTitle}
                height={skill.skillHeight}
                width={skill.skillWidth}
                index={index}
              />
            ))}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center max-w-7xl mx-auto">
            {skill2.map((skill, index) => (
              <SkillDataProvider
                key={index}
                src={skill.skillLogo.image}
                alt={skill.skillTitle}
                height={skill.skillHeight}
                width={skill.skillWidth}
                index={index}
              />
            ))}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center max-w-7xl mx-auto">
            {skill3.map((skill, index) => (
              <SkillDataProvider
                key={index}
                src={skill.skillLogo.image}
                alt={skill.skillTitle}
                height={skill.skillHeight}
                width={skill.skillWidth}
                index={index}
              />
            ))}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center max-w-7xl mx-auto">
            {skill4.map((skill, index) => (
              <SkillDataProvider
                key={index}
                src={skill.skillLogo.image}
                alt={skill.skillTitle}
                height={skill.skillHeight}
                width={skill.skillWidth}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
        </div>
        <hr className="mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
      </Container>
    </>
  );
}

export default SkillSection;
