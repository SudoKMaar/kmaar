"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import ProgressIndicator from "./components/ProgressIndicator";
import Cursor from "./components/Cursor";
import HeroSection from "./components/heroSection/HeroSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AboutSection from "./components/AboutSection";
import CollaborationSection from "./components/CollaborationSection";
import ExperienceSection from "./components/ExperienceSection";
import StarsCanvas from "./components/Stars";
import ContactMe from "./components/ContactMe";
import ProjectSection from "./components/project/Projects";
import Tech from "./components/skill/Tech";

export const isSmallScreen = (): boolean => document.body.clientWidth < 767;
export const NO_MOTION_PREFERENCE_QUERY =
  "(prefers-reduced-motion: no-preference)";
export interface IDesktop {
  isDesktop: boolean;
}
const DEBOUNCE_TIME = 100;
export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isDesktop, setisDesktop] = useState(true);
  const [clientHeight, setClientHeight] = useState(0);
  let timer = null;

  const debouncedDimensionCalculator = () => {
    const timer = setTimeout(() => {
      const isDesktopResult =
        typeof window.orientation === "undefined" &&
        navigator.userAgent.indexOf("IEMobile") === -1;

      window.history.scrollRestoration = "manual";

      setisDesktop(isDesktopResult);
    }, DEBOUNCE_TIME);
  };

  useEffect(() => {
    debouncedDimensionCalculator();

    window.addEventListener("resize", debouncedDimensionCalculator);
    return () =>
      window.removeEventListener("resize", debouncedDimensionCalculator);
  }, [timer]);

  useEffect(() => {
    const { innerHeight } = window;

    setClientHeight(innerHeight);
  }, []);
  return (
    // <>
    //   {isLoading ? (
    //     <Image src="/kmaar.svg" alt="loader" width="200" height="200" />
    //   ) : (
    <>
      <ProgressIndicator />
      <Cursor isDesktop={isDesktop} />
      <Navbar />
      <main className="items-center justify-between font-logo">
        <section id="hero" className="snap-start">
          <HeroSection />
        </section>
        <section id="empty" className="h-[90vh] -z-2"></section>
        <section id="about" className="min-h-[100vh]">
          <AboutSection clientHeight={clientHeight} />
        </section>
        <section
          id="experience"
          className="min-h-[100vh] max-w-7xl mx-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10"
        >
          <ExperienceSection />
        </section>
        <section
          id="skills"
          className="min-h-[100vh] max-w-7xl mx-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10"
        >
          <Tech />
        </section>
        <section id="project" className="relative">
          <ProjectSection />
        </section>
        <section id="collaboration" className="min-h-[100vh]">
          <CollaborationSection />
        </section>
        <section
          id="contact"
          className="min-h-[100vh] max-w-7xl mx-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10"
        >
          {/* <StarsCanvas /> */}
          <ContactMe />
        </section>
        Build still in progress suffering from creativity or ctrl c+ ctrl v
        block
      </main>
    </>
    // )
    // }
    // </>
  );
}
