import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = ({ clientHeight }) => {
  const quoteRefs = useRef([]);
  const targetSectionRef = useRef([]);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });

    quoteRefs.current = document.querySelectorAll(
      ".about-1, .about-2, .about-3"
    );
    targetSectionRef.current = document.querySelector(".section-container");

    timeline
      .fromTo(quoteRefs.current[0], { opacity: 0.2 }, { opacity: 1 })
      .to(quoteRefs.current[0], { opacity: 0.2, delay: 0.5 })
      .fromTo(quoteRefs.current[1], { opacity: 0.2 }, { opacity: 1 }, "<")
      .to(quoteRefs.current[1], { opacity: 0.2, delay: 1 });
    const scrollTrigger = ScrollTrigger.create({
      trigger: targetSectionRef.current,
      start: "center 80%",
      end: "center top",
      scrub: 0,
      animation: timeline,
    });
    const timeline2 = gsap.timeline({
      defaults: { ease: Linear.easeNone },
    });
    timeline2
      .from(quoteRefs.current, { opacity: 0, duration: 2 }, "<")
      .to(quoteRefs.current, {
        backgroundPositionX: "100%",
        duration: 1,
      });
    ScrollTrigger.create({
      trigger: targetSectionRef.current,
      start: "center bottom",
      end: "center center",
      scrub: 0,
      animation: timeline2,
    });
  }, [quoteRefs, targetSectionRef]);

  return (
    <section className="w-full relative select-none" ref={targetSectionRef}>
      <div
        className={`${
          clientHeight > 650 ? "pt-28 pb-16" : "pt-80 pb-72"
        } section-container`}
      >
        <h1 className="font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center quote">
          <span className="about-2 leading-tight">
            In a range of{" "}
            <span className="about-3 text-strong font-bold">COOL BUILDS</span>{" "}
            and{" "}
            <span className="about-3 text-strong font-bold">CHALLENGES</span>, I
            deliver{" "}
            <span className="about-3 text-strong font-bold">REAL VALUE</span>.
          </span>
          <span className="about-1 leading-tight">
            As a{" "}
            <span className="about-3 font-bold text-strong">
              FULL STACK DEVELOPER
            </span>
            , I specialize in crafting apps that are{" "}
            <span className="about-3 font-bold text-strong">SCALABLE</span> and{" "}
            <span className="about-3 text-strong font-bold">PERFORMANT</span>.{" "}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default About;
