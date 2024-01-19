"use client";
import { useEffect, useState } from "react";

const ProgressIndicator = () => {
  const [progress, setProgress] = useState(0);

  const calculateProgress = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = winScroll / height;
    setProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateProgress);

    return () => window.removeEventListener("scroll", calculateProgress);
  }, [progress]);

  return (
    <div className="h-[0.1875rem] w-full fixed top-0 z-50">
      <div
        className="progressBar"
        style={{ transform: `scaleX(${progress})` }}
      ></div>
    </div>
  );
};

export default ProgressIndicator;
