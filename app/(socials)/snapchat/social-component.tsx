"use client";

import { useEffect } from "react";
import { MessagesSquare } from "lucide-react";
import SocialCommon from "@/components/common-social";

export default function SocialComponent() {
  const url = "https://www.snapchat.com/add/kmaar44";

  useEffect(() => {
    window.location.href = url;
  }, []);
  return (
    <div className="socialbg-radial-gradient bg-cover flex items-center justify-center text-white h-full absolute top-0">
      <SocialCommon
        title="Snapchat"
        description={"Join me on Snapchat and share your thoughts!"}
        link={url}
        linkTitle="Snapchat"
        icon={MessagesSquare}
        socialSrc="https://cdn.sanity.io/images/x3sf3c46/production/6f351f0781dc7ea4c694ca44aacb38aa4d9c09de-320x320.svg"
        socialAlt="Abhishek KMaar Snapchat"
      />
    </div>
  );
}
