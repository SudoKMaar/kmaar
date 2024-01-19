import { Metadata } from "next";
import SocialComponent from "./social-component";

export const metadata: Metadata = {
  title: "Instagram",
  description:
    "Connect with Abhishek KMaar Kumar on Instagram to engage in insightful tech discussions, get updates on my latest work, and explore the world of full stack development. Click to visit my Instagram page and let's code the future together!",
};

export default function SocialPage() {
  return <SocialComponent />;
}