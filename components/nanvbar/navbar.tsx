import Image from "next/image";
import React from "react";
import { groq } from "next-sanity";
import { Social } from "@/typings";
import { container, item } from "@/lib/motion";
import ThemeToggle from "@/components/nanvbar/theme-toggle";
import { MotionDiv, MotionSocialIcon } from "@/components/ui/motion-elements";
import { client, sanityFetch } from "@/sanity/lib/client";

// export const revalidate = 10;

// async function getSocial() {
//   const query = groq`*[_type == "social"]{
//     _type,_id,socialTitle,url
//   }`;

//   const data = await client.fetch(query);
//   return data;
// }

async function Navbar() {
  const query = groq`*[_type == "social"]{
    _type,_id,socialTitle,url
  }`;
  const social: Social[] = await sanityFetch({
    query: query,
    tags: ["social"],
  });
  // const social: Social[] = await getSocial();
  return (
    <nav className="sticky top-0 py-1 flex items-start justify-between max-w-7xl mx-auto my-auto z-20 xl:items-center transition-all duration-300 rounded-br-3xl rounded-bl-3xl backdrop-blur-[5px]">
      <MotionDiv
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="flex flex-row items-center"
        aria-label="KMaar logo"
      >
        <a href="#" className="link glow object-scale-down cursor-none">
          <Image src="/kmaar.svg" alt="KMaar" height={50} width={50} />
        </a>
        <p className="sm:text-[#808080] sm:dark:text-white dark:md:text-white md:text-[#808080] text-[20px] font-bold hidden sm:visible sm:inline-flex text-xl">
          KMaar
        </p>
      </MotionDiv>
      <MotionDiv
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-4 sm:flex flex-row link itmes-center justify-center"
        aria-label="Abhishek KMaar Social Links"
      >
        {social?.map((socials) => (
          <MotionSocialIcon
            variants={item}
            key={socials._id}
            url={socials.url}
            fgColor="#808080"
            bgColor="transparent"
            target="_blank"
            className="cursor-none link"
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
          />
        ))}
      </MotionDiv>
      <ThemeToggle />
    </nav>
  );
}

export default Navbar;
