import { Experience } from "@/typings";
import { getExperience } from "@/sanity/lib/query";
import { cn } from "@/lib/utils";
import ExperienceTimeline from "@/components/experience-section/experience-timeline";
import { Container } from "@/components/container";
import { SectionHeading, SectionTitle } from "@/components/section-heading";

export const revalidate = 10;

async function ExperienceSection() {
  const experience: Experience[] = await getExperience();
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
