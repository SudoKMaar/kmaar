"use client";

import { useEffect } from "react";
import { Router } from "lucide-react";
import SocialCommon from "@/components/common-social";

export default function SocialComponent() {
  const url = "https://discord.gg/JHdGfKe7AR";

  useEffect(() => {
    window.location.href = url;
  }, []);
  return (
    <div className="socialbg-radial-gradient bg-cover flex items-center justify-center text-white h-full absolute top-0">
      <SocialCommon
        title="Discord"
        description={"Join my Discord server and hang out with me!"}
        link={url}
        linkTitle="Discord"
        icon={Router}
        socialSrc="https://cdn.sanity.io/images/x3sf3c46/production/276cdf24f8a274a903d4d37c05ea1187365ff550-640x640.png"
        socialAlt="Abhishek KMaar Discord"
      />
    </div>
  );
}
