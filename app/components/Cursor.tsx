import { MutableRefObject, useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";

const isSmallScreen = (): boolean => document.body.clientWidth < 767;
const NO_MOTION_PREFERENCE_QUERY = "(prefers-reduced-motion: no-preference)";
interface IDesktop {
  isDesktop: boolean;
}

const Cursor = ({ isDesktop }: IDesktop) => {
  const cursor = useRef<HTMLDivElement>(null);
  const follower = useRef<HTMLDivElement>(null);

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
    if (cursor.current && follower.current) {
      follower.current.classList.remove("hidden");
      cursor.current.classList.remove("hidden");

      document.addEventListener("mousemove", moveCircle);

      document.querySelectorAll(".link").forEach((el) => {
        el.addEventListener("mouseenter", onHover);
        el.addEventListener("mouseleave", onUnhover);
      });
    }
  };

  useEffect(() => {
    if (isDesktop && !isSmallScreen()) {
      initCursorAnimation();
    }
  }, [cursor, follower, isDesktop]);

  return (
    <>
      <div
        ref={cursor}
        className={
          "cursor fixed hidden bg-[#fff] w-4 h-4 select-none pointer-events-none z-50"
        }
      ></div>
      <div
        ref={follower}
        className={
          "cursorFollower fixed hidden h-8 w-8 select-none pointer-events-none z-50"
        }
      ></div>
    </>
  );
};

export default Cursor;
