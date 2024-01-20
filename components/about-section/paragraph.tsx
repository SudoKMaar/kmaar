import React, { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

interface WordProps {
  children: React.ReactNode;
  progress: MotionValue;
  range: [number, number];
}

interface ParagraphProps {
  paragraph: string;
}

export default function Paragraph({ paragraph }: ParagraphProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.65", "start 0.25"],
  });
  const words = paragraph.split(" ");
  return (
    <div className="max-w-7xl justify-center items-center content-center pt-[10%] ">
      <p
        ref={container}
        className="flex text-3xl sm:text-4xl md:text-6xl leading-none m-auto max-w-7xl flex-wrap justify-center items-center"
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const isSpecialWord =
    typeof children === "string" &&
    [
      "scalable",
      "performant",
      "real",
      "value",
      "cool",
      "builds",
      "challenges",
      "impactful",
    ].includes(children);
  const wordStyle = isSpecialWord ? "text-[#7000E1] font-medium uppercase" : "";

  return (
    <span
      className={`relative mr-3 mt-2 justify-center items-center  ${wordStyle}`}
    >
      <span className="absolute opacity-20 justify-center items-center">
        {children}
      </span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
