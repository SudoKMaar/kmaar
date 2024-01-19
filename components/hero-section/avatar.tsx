import Image from "next/image";

interface AvatarProps {
  heroImageUrl: string;
  heroImageAlt: string;
}

const Avatar: React.FC<AvatarProps> = ({ heroImageUrl, heroImageAlt }) => {
  return (
    <div className="hidden md:flex lg:flex lg:max-w-none">
      <Image
        src={heroImageUrl}
        width={400}
        height={400}
        alt={heroImageAlt}
        className="translate-z-0 bottom-0 w-full h-full align-right -z-8"
      />
    </div>
  );
};

export default Avatar;
