import { gsap, Linear } from "gsap";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const isSmallScreen = (): boolean => document.body.clientWidth < 767;
const NO_MOTION_PREFERENCE_QUERY = "(prefers-reduced-motion: no-preference)";

const CollaborationSection = () => {
  const quoteRef = useRef<HTMLDivElement | null>(null);
  const targetSection = useRef<HTMLDivElement | null>(null);

  const [willChange, setWillChange] = useState(false);

  const initTextGradientAnimation = (
    targetSection: MutableRefObject<HTMLDivElement | null>
  ): ScrollTrigger => {
    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    timeline
      .from(quoteRef.current!, { opacity: 0, duration: 2 })
      .to(quoteRef.current!.querySelector(".text-strong"), {
        backgroundPositionX: "100%",
        duration: 1,
      });

    return ScrollTrigger.create({
      trigger: targetSection.current!,
      start: "top bottom",
      end: "center center",
      scrub: 0,
      animation: timeline,
      onToggle: (self) => setWillChange(self.isActive),
    });
  };

  const initSlidingTextAnimation = (
    targetSection: MutableRefObject<HTMLDivElement | null>
  ) => {
    const slidingTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });

    slidingTl
      .to(targetSection.current!.querySelector(".ui-left"), {
        xPercent: isSmallScreen() ? -500 : -150,
      })
      .from(
        targetSection.current!.querySelector(".ui-right"),
        { xPercent: isSmallScreen() ? -500 : -150 },
        "<"
      );

    return ScrollTrigger.create({
      trigger: targetSection.current!,
      start: "top bottom",
      end: "bottom top",
      scrub: 0,
      animation: slidingTl,
    });
  };

  useEffect(() => {
    const textBgAnimation = initTextGradientAnimation(targetSection);
    let slidingAnimation: ScrollTrigger | undefined;

    const { matches } = window.matchMedia(NO_MOTION_PREFERENCE_QUERY);

    if (matches) {
      slidingAnimation = initSlidingTextAnimation(targetSection);
    }

    return () => {
      textBgAnimation.kill();
      slidingAnimation?.kill();
    };
  }, []);

  const renderSlidingText = (text: string, layoutClasses: string) => (
    <p
      className={`${layoutClasses} opacity-20 text-5xl md:text-7xl font-bold whitespace-nowrap`}
    >
      {Array(5)
        .fill(text)
        .reduce((str, el) => str.concat(el), "")}
    </p>
  );

  const renderTitle = () => (
    <h1
      ref={quoteRef}
      className="mt-6 md:mt-8 font-medium text-4xl md:text-5xl text-center"
    >
      Interested in <span className="text-strong font-bold">COLLABORATION</span>
      ?
    </h1>
  );

  return (
    <section
      className="w-full relative select-none tall:py-36 py-48 section-container flex flex-col"
      ref={targetSection}
    >
      {renderSlidingText(
        " Full Stack Developer Problem Solving Teaching ",
        "ui-left"
      )}

      {renderTitle()}

      {renderSlidingText(
        "Effective Communicator Agile Development Gamer ",
        "mt-6 md:mt-8 ui-right"
      )}
    </section>
  );
};

export default CollaborationSection;
