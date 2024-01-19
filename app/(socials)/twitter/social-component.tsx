"use client";

import { useEffect } from "react";
import { Twitter } from "lucide-react";
import SocialCommon from "@/components/common-social";

export default function SocialComponent() {
  const url = "https://twitter.com/kmaar44";

  useEffect(() => {
    window.location.href = url;
  }, []);
  return (
    <div className="socialbg-radial-gradient bg-cover flex items-center justify-center text-white h-full absolute top-0">
      <SocialCommon
        title="Twitter"
        description={"See my latest tweets and thoughts on Twitter!"}
        link={url}
        linkTitle="Twitter"
        icon={Twitter}
        socialSrc="https://cdn.sanity.io/images/x3sf3c46/production/230b0fd7bdc92f3763c42f196260cf1f46632dba-400x400.jpg"
        socialAlt="Abhishek KMaar Twitter"
      />
    </div>
  );
}
