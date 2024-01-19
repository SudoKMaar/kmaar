import { Metadata } from "next";
import SocialComponent from "./social-component";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Explore the professional journey of Abhishek Kumar, a dynamic and innovative full stack develpoer with a proven track record in developemnt. Dive into a detailed resume showcasing skills, experiences, and accomplishments that underline KMaar's expertise and contribution to development. Discover projects, certifications, and accolades that highlight KMaar's commitment to excellence and continuous learning.",
};

export default function SocialPage() {
  return <SocialComponent />;
}
