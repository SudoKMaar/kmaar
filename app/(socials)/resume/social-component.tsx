"use client";

import { useEffect } from "react";
import { View } from "lucide-react";
import SocialCommon from "@/components/common-social";

export default function SocialComponent() {
  const url =
    "https://drive.google.com/file/d/1RR2X5km32x_tTY8OJs0MO6JypQ1Z14Zg";

  useEffect(() => {
    window.location.href = url;
  }, []);
  return (
    <div className="socialbg-radial-gradient bg-cover flex items-center justify-center text-white h-full absolute top-0">
      <SocialCommon
        title="Resume"
        description={"View my resume"}
        link={url}
        linkTitle="Resume"
        icon={View}
        socialSrc="https://cdn.sanity.io/images/x3sf3c46/production/8edd4eeeaff0ffa10002e8718543e0b455d698d6-4000x4000.png"
        socialAlt="Abhishek KMaar Resume"
      />
    </div>
  );
}
