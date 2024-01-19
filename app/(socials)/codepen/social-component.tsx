"use client";

import { useEffect } from "react";
import { Codepen } from "lucide-react";
import SocialCommon from "@/components/common-social";

export default function SocialComponent() {
  const url = "https://codepen.io/KMaar44";

  useEffect(() => {
    window.location.href = url;
  }, []);
  return (
    <div className="socialbg-radial-gradient bg-cover flex items-center justify-center text-white h-full absolute top-0">
      <SocialCommon
        title="Codepen"
        description={"Follow me on Codepen and get inspired!"}
        link={url}
        linkTitle="Codepen"
        icon={Codepen}
        socialSrc="https://cdn.sanity.io/images/x3sf3c46/production/94bd3d2a9c5b5dcfb51c9803d0cb6eff3d86c78c-400x400.jpg"
        socialAlt="Abhishek KMaar Codepen"
      />
    </div>
  );
}
