import { groq } from "next-sanity";
import { Experience } from "@/typings";
import ExperienceTimeline from "@/components/experience-section/experience-timeline";
import { Container } from "@/components/container";
import { SectionHeading, SectionTitle } from "@/components/section-heading";
import { sanityFetch } from "@/sanity/lib/client";

// export const revalidate = 10;

// async function getExperience() {
//   const query = `*[_type == "experience"]{
//     date,
//     jobTitle,
//     iconBg,
//     companyName,
//     companyLogo{alt, "image": asset->url},
//     points}`;
//   const data = await client.fetch(query);
//   return data;
// }

async function ExperienceSection() {
  const query = groq`*[_type == "experience"] | order(sortOrder desc){
    date,
    jobTitle,
    iconBg,
    companyName, 
    companyLogo{alt, "image": asset->url},
    points}`;
  const experience: Experience[] = await sanityFetch({
    query: query,
    tags: ["experience"],
  });

  return (
    <>
      <SectionHeading
        color="194,97,254"
        colorDark="53,42,79"
        colorDarkLight="114,9,183"
      >
        <SectionTitle
          title={
            <>
              Beyond Gaming:
              <br />
              Bringing Ideas to life
            </>
          }
          text="My Full Stack Journey in Code"
        />
      </SectionHeading>
      <div className="">
        <Container>
          <ExperienceTimeline experience={experience} />
        </Container>
      </div>
    </>
  );
}

export default ExperienceSection;
