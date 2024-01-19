"use client";

import { useEffect } from "react";
import { Facebook } from "lucide-react";
import SocialCommon from "@/components/common-social";

export default function SocialComponent() {
  const url = "https://www.facebook.com/AbhishekKMaar";

  useEffect(() => {
    window.location.href = url;
  }, []);
  return (
    <div className="socialbg-radial-gradient bg-cover flex items-center justify-center text-white h-full absolute top-0">
      <SocialCommon
        title="Facebook"
        description={"See what I'm up to on Facebook!"}
        link={url}
        linkTitle="Facebook"
        icon={Facebook}
        socialSrc="https://cdn.sanity.io/images/x3sf3c46/production/0647508ffd3dd9277e12d4418c5459e236d131b3-1080x1080.jpg"
        socialAlt="Abhishek KMaar Facebook"
      />
    </div>
  );
}
