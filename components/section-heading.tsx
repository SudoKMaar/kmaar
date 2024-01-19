"use client";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";

type SectionHeadingProps = {
  children: React.ReactNode;
  color: string;
  colorDark: string;
  colorDarkLight: string;
};

export const SectionHeading = ({
  children,
  color,
  colorDark,
  colorDarkLight,
}: SectionHeadingProps) => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: false });

  return (
    <section
      ref={ref}
      className={cn(
        "after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent) relative flex flex-col items-center overflow-x-clip before:pointer-events-none before:absolute before:h-[40rem] before:w-full before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark-light))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark-light)),#000212)] dark:before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-1000 before:ease-in before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)] before:[background-size:50%_100%,50%_100%] before:[background-position:1%_0%,99%_0%] after:pointer-events-none after:absolute after:inset-0",
        inView &&
          "is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]",
        !inView && "before:rotate-180 before:opacity-40"
      )}
      style={
        {
          "--feature-color": color,
          "--feature-color-dark": colorDark,
          "--feature-color-dark-light": colorDarkLight,
        } as React.CSSProperties
      }
    >
      <div className="mt-[9rem] w-full md:mt-[21rem]">{children}</div>
    </section>
  );
};

type SectionTitleProps = {
  text: string;
  title: React.ReactNode;
};

export const SectionTitle = ({ title, text }: SectionTitleProps) => {
  return (
    <>
      <div className="relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]">
        <Container className={cn("max-w-[90%] text-center")}>
          <h2 className="text-gradient-dark dark:text-gradient-light mb-11 translate-y-[40%] pt-[12rem] text-center text-5xl [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:pt-0 md:text-7xl [.is-visible_&]:translate-y-0">
            {title}
          </h2>
        </Container>
      </div>
      <Container className="w-[78rem] max-w-[90%] text-center">
        <p className="mx-auto my-10 text-2xl leading-tight text-[#808080] dark:text-white md:w-[80%] md:text-4xl">
          {text}
        </p>
        {/* <hr className="mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" /> */}
      </Container>
    </>
  );
};
