import Image from "next/image";
import { MotionArrowLeft } from "@/components/ui/motion-elements";

const ProjectBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 max-w-7xl">
      <a
        href="#project"
        className="link z-0 relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group cursor-none"
        title="This is a link to the projects section"
      >
        <Image
          src="/rounded-text.png"
          alt="My Project"
          width={141}
          height={148}
          className="z-20 animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <MotionArrowLeft
          className="z-20 absolute link text-white/50 h-10 w-10"
          whileHover={{
            scale: 1.5,
            rotate: 360,
          }}
          whileTap={{ scale: 0.8, rotate: -360 }}
        />
      </a>
    </div>
  );
};

export default ProjectBtn;
