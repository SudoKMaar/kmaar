import { useState, useEffect } from "react";
import { gsap } from "gsap";
import Meta from "@/components/Seo/Meta";
import Loader from "@/components/Loader/Loader";
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Cursor from "@/components/Cursor/Cursor";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Work from "@/components/Work/Work";
import Collaboration from "@/components/Collaboration/Collaboration";
import Contact from "@/components/Contact/Contact";
import Scripts from "@/components/Scripts/Scripts";
import StarsCanvas from "@/components/Contact/Stars";
import Navbar from "@/components/Header/Navbar";
import ProjectSection from "@/components/Projects/ProjectSection";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const { innerWidth, innerHeight, orientation, history } = window;

    const result =
      typeof orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;
    history.scrollRestoration = "manual";

    setIsDesktop(result);
    setClientHeight(innerHeight);
    setClientWidth(innerWidth);
  }, [isDesktop]);

  return (
    <>
      <Meta>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Cursor isDesktop={isDesktop} className="absolute z-50" />
            <section id="nav" className="h-[10vh] z-50">
              <Navbar />
            </section>
            <ProgressIndicator />
            <div className="h-[90vh] relative z-[-5]" />
            <main className="z-20">
              <section id="hero" className="absoute top-[-10vh] z-0">
                <Hero />
              </section>
              <section id="about" className="min-h-[100vh] z-0">
                <About clientHeight={clientHeight} />
              </section>
              <section
                id="experience"
                className="min-h-[100vh] max-w-7xl mx-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10"
              >
                <Work />
              </section>
              <section
                id="skills"
                className="min-h-[100vh] max-w-7xl mx-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10"
              >
                <Skills />
              </section>
              <section id="project" className="relative z-0">
                <ProjectSection />
              </section>
              <section id="collaboration" className="min-h-[100vh] z-0">
                <Collaboration clientHeight={clientHeight} />
              </section>
              <section
                id="contact"
                className="min-h-[100vh] max-w-7xl mx-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10"
              >
                <StarsCanvas />
                <Contact />
              </section>
            </main>
            <Scripts />
          </>
        )}
      </Meta>
    </>
  );
}
