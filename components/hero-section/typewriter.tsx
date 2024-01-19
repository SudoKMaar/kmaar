"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type TypeWriterProps = {
  words: string[];
};

const TypeWriter: React.FC<TypeWriterProps> = ({ words }) => {
  const [text, count] = useTypewriter({
    words: words,
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 200,
  });
  return (
    <p className="font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 max-w-[75%] text-white">
      <span>{text}</span>
      <Cursor cursorColor="white" />
    </p>
  );
};

export default TypeWriter;
