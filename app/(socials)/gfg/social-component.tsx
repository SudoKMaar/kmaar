"use client";

import { useEffect } from "react";
import { User } from "lucide-react";
import SocialCommon from "@/components/common-social";

export default function SocialComponent() {
  const url = "https://auth.geeksforgeeks.org/user/KMaar";

  useEffect(() => {
    window.location.href = url;
  }, []);
  return (
    <div className="socialbg-radial-gradient bg-cover flex items-center justify-center text-white h-full absolute top-0">
      <SocialCommon
        title="GFG"
        description={"Follow me on GFG and get inspired!"}
        link={url}
        linkTitle="GFG"
        icon={User}
        socialSrc="https://cdn.sanity.io/images/x3sf3c46/production/8edd4eeeaff0ffa10002e8718543e0b455d698d6-4000x4000.png"
        socialAlt="Abhishek KMaar GFG"
      />
    </div>
  );
}
