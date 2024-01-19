import { Metadata } from "next";
import SocialComponent from "./social-component";

export const metadata: Metadata = {
  title: "Reddit",
  description:
    "Connect with Abhishek KMaar Kumar on Reddit to engage in insightful tech discussions, get updates on my latest work, and explore the world of full stack development. Click to visit my Reddit page and let's code the future together!",
};

export default function SocialPage() {
  return <SocialComponent />;
}
