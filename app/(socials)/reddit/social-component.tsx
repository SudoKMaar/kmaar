"use client";

import { useEffect } from "react";
import { Rabbit } from "lucide-react";
import SocialCommon from "@/components/common-social";

export default function SocialComponent() {
  const url = "https://www.reddit.com/user/abhi2004shek";

  useEffect(() => {
    window.location.href = url;
  }, []);
  return (
    <div className="socialbg-radial-gradient bg-cover flex items-center justify-center text-white h-full absolute top-0">
      <SocialCommon
        title="Reddit"
        description={"Follow me on Reddit and get inspired!"}
        link={url}
        linkTitle="Reddit"
        icon={Rabbit}
        socialSrc="https://cdn.sanity.io/images/x3sf3c46/production/32bcd1ce60182a4d3ad03b416af9aec88ed217bb-768x768.png"
        socialAlt="Abhishek KMaar Reddit"
      />
    </div>
  );
}
