import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden md:flex lg:flex lg:max-w-none">
      <Image
        src="/hero/hero-image.png"
        width={400}
        height={400}
        alt=""
        className="translate-z-0 bottom-0 w-full h-full align-right -z-8"
      />
    </div>
  );
};
export default Avatar;
