import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface AboutProps {
  clientHeight: number;
}

const AboutSection: React.FC<AboutProps> = ({ clientHeight }) => {
  const targetSection = useRef<HTMLElement>(null);

  useEffect(() => {
    const quoteRef = targetSection.current!.querySelector(".quote");

    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });

    timeline
      .fromTo(
        quoteRef!.querySelector(".about-1"),
        { opacity: 0.2 },
        { opacity: 1 }
      )
      .to(quoteRef!.querySelector(".about-1"), {
        opacity: 0.2,
        delay: 0.5,
      })
      .fromTo(
        quoteRef!.querySelector(".about-2"),
        { opacity: 0.2 },
        { opacity: 1 }
      )
      .to(quoteRef!.querySelector(".about-2"), {
        opacity: 0.2,
        delay: 1,
      });

    ScrollTrigger.create({
      trigger: targetSection.current!,
      start: "center bottom",
      end: "center top",
      scrub: 0,
      animation: timeline,
    });

    const about3Elements = targetSection.current!.querySelectorAll(".about-3");

    const timeline2 = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });

    timeline2.from(quoteRef!, { opacity: 0, duration: 2 }).to(about3Elements, {
      backgroundPositionX: "100%",
      duration: 1,
    });

    ScrollTrigger.create({
      trigger: targetSection.current!,
      start: "center bottom",
      end: "center center",
      scrub: 0,
      animation: timeline2,
    });
  }, [targetSection]);

  return (
    <section
      className="w-full relative select-none items-center"
      ref={targetSection}
    >
      <div
        className={`${
          clientHeight > 650 ? "pt-28 pb-16" : "pt-80 pb-72"
        } section-container`}
      >
        <h1 className="font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center quote">
          <span className="about-1 leading-tight">
            As a <span className="about-3 font-bold">FULL STACK DEVELOPER</span>
            , I specialize in crafting apps that are{" "}
            <span className="about-3 font-bold">SCALABLE</span> and{" "}
            <span className="about-3 font-bold">PERFORMANT</span>.{" "}
          </span>
          <span className="about-2 leading-tight">
            In a range of <span className="about-3 font-bold">COOL BUILDS</span>{" "}
            and <span className="about-3 font-bold">CHALLENGES</span>, I deliver{" "}
            <span className="about-3 font-bold">REAL VALUE</span>.
          </span>
        </h1>
      </div>
    </section>
  );
};

export default AboutSection;
