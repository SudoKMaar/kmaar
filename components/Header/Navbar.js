import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";

function Navbar() {
  return (
    <nav className="sticky top-0 py-5 h-[10vh] flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center bg-gradient-to-b from-[#120e16] to-[rgba(18,14,22,0)] transition-all duration-300">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <a href="#hero" className="link glow object-scale-down">
          <Image src="/kmaar.svg" alt="kmaar" height={50} width={50} />
        </a>
        <p className="text-white text-[20px] font-bold uppercase hidden md:inline-flex text-sm">
          KMaar
        </p>
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex link flex-row link itmes-center"
      >
        <SocialIcon
          url="https://instagram.com/kmaar44"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com/kmaar44"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com/kmaar44"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
    </nav>
  );
}

export default Navbar;
