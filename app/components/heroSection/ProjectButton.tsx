import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";

const ProjectBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <a
        href="#project"
        className="link z-18 relative w-[185px] link h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
        title="This is a link to the projects page"
      >
        <Image
          src="/rounded-text.png"
          alt=""
          width={141}
          height={148}
          className="z-18 animate-spin-slow wfull h-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight className=" z-18 absolute link text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </a>
    </div>
  );
};

export default ProjectBtn;
