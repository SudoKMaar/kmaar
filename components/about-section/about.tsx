"use client";
import Paragraph from "@/components/about-section/paragraph";

const paragraph =
  "I specialize in crafting apps that are scalable and performant . In range of cool builds and challenges , I deliver real value . In the landscape of tech, I contribute with impactful builds .";

const AboutSection = () => {
  const words = paragraph.split(" ");
  return (
    <div className="mx-auto max-w-7xl justify-center items-center ">
      <Paragraph paragraph={paragraph} />
    </div>
  );
};

export default AboutSection;
