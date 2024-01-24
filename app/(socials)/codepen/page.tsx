import { Metadata } from "next";
import SocialComponent from "./social-component";

export const metadata: Metadata = {
  title: "Codepen",
  description:
    "Connect with Abhishek KMaar Kumar on Codepen to engage in insightful tech discussions, get updates on my latest work, and explore the world of full stack development. Click to visit my Codepen page and let's code the future together!",
  robots: "index,follow",
};

export default function SocialPage() {
  return <SocialComponent />;
}
