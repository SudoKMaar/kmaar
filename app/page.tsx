import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { cn } from "@/lib/utils";
import ProgressIndicator from "@/components/progress-indicator";
import HeroSection from "@/components/hero-section/hero-section";
import SplashScreenLoader from "@/components/splash-screen-loader";
import AboutSection from "@/components/about-section/about";
import ExperienceSection from "@/components/experience-section/experience";
import { StarsIllustration } from "@/components/starts-illustration";
import SkillSection from "@/components/skill-section/skill";
import ProjectSection from "@/components/project-section/project";
import AchievementsSection from "@/components/achievements-section/achievement";
import CollaborationSection from "@/components/collaboration-section/collaboration";
import StarsCanvas from "@/components/contact-section/stars";
import ContactSection from "@/components/contact-section/contact";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  return (
    <>
      {/* crisp  */}
      <SplashScreenLoader />
      {/* Progress Indicator */}
      <ProgressIndicator />
      <main className="max-w-7xl items-center justify-between">
        {/* Hero Section */}
        <section id="hero KMaar">
          <HeroSection />
        </section>

        {/* About */}
        <div className="h-screen w-screen relative"></div>
        <section id="about" className="w-screen relative">
          <AboutSection />
          <div
            className={cn(
              "mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden max-w-7xl mx-auto",
              "dark:[--color:#7877C6] [--color:#7209B7] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
              "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(86,_11,_173,_0.4)] dark:after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
            )}
          >
            <StarsIllustration />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-screen relative">
          <ExperienceSection />
        </section>
        {/* Skills Section */}
        <section id="skill" className="w-screen relative">
          <SkillSection />
        </section>

        {/* Projects Section */}
        <section id="project" className="w-screen relative">
          <ProjectSection />
        </section>

        {/* Achievements */}
        <section id="achievement" className="w-screen relative">
          <AchievementsSection />
        </section>

        {/* Collaboration Text */}
        <section id="collobaration" className="w-screen relative">
          <CollaborationSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-screen relative">
          {/* <StarsCanvas /> */}
          <ContactSection />
        </section>
      </main>
    </>
  );
}
