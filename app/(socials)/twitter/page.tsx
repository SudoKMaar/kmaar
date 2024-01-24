import { Metadata } from "next";
import SocialComponent from "./social-component";

export const metadata: Metadata = {
  title: "Twitter",
  description:
    "Connect with Abhishek KMaar Kumar on Twitter to engage in insightful tech discussions, get updates on my latest work, and explore the world of full stack development. Click to visit my Twitter page and let's code the future together!",
  robots: "index,follow",
};

export default function SocialPage() {
  return <SocialComponent />;
}
