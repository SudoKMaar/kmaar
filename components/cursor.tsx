"use client";
import { MutableRefObject, useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";

const Cursor = () => {
  //@ts-ignore
  const cursor: MutableRefObject<HTMLDivElement> = useRef(null);
  //@ts-ignore
  const follower: MutableRefObject<HTMLDivElement> = useRef(null);
  const isDesktop = (): boolean => document.body.clientWidth > 640;

  const onHover = () => {
    gsap.to(cursor.current, {
      scale: 0.5,
      duration: 0.3,
    });
    gsap.to(follower.current, {
      scale: 3,
      duration: 0.3,
    });
  };

  const onUnhover = () => {
    gsap.to(cursor.current, {
      scale: 1,
      duration: 0.3,
    });
    gsap.to(follower.current, {
      scale: 1,
      duration: 0.3,
    });
  };

  const moveCircle = (e: MouseEvent) => {
    gsap.to(cursor.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: Linear.easeNone,
    });
    gsap.to(follower.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: Linear.easeNone,
    });
  };

  const initCursorAnimation = () => {
    follower.current.classList.remove("hidden");
    cursor.current.classList.remove("hidden");

    document.addEventListener("mousemove", moveCircle);

    document.querySelectorAll(".link").forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onUnhover);
    });
  };

  useEffect(() => {
    if (isDesktop()) {
      initCursorAnimation();
    }
  }, [cursor, follower]);

  return (
    <>
      <div
        ref={cursor}
        className="rounded-full mix-blend-difference fixed hidden bg-white w-4 h-4 select-none pointer-events-none z-50"
      ></div>
      <div
        ref={follower}
        className="cursorFollower fixed hidden h-10 w-10 select-none pointer-events-none z-50 border-2 dark:border-white/20 border-zinc-700/20 rounded-full"
      ></div>
    </>
  );
};

export default Cursor;
