"use client";

import { useEffect } from "react";
import { Github } from "lucide-react";
import SocialCommon from "@/components/common-social";

export default function SocialComponent() {
  const url = "https://github.com/SudoKMaar/";

  useEffect(() => {
    window.location.href = url;
  }, []);
  return (
    <div className="socialbg-radial-gradient bg-cover flex items-center justify-center text-white h-full absolute top-0">
      <SocialCommon
        title="Github"
        description={"Explore my GitHub projects and code!"}
        link={url}
        linkTitle="Github"
        icon={Github}
        socialSrc="https://cdn.sanity.io/images/x3sf3c46/production/94bd3d2a9c5b5dcfb51c9803d0cb6eff3d86c78c-400x400.jpg"
        socialAlt="Abhishek KMaar Github"
      />
    </div>
  );
}
