import Image from "next/image";
import Link from "next/link";

interface CommonSocialProps {
  title: string;
  description: string;
  link: string;
  icon: React.ElementType;
  linkTitle: string;
  socialSrc: string;
  socialAlt: string;
}

export default function SocialCommon({
  title,
  description,
  link,
  icon: Icon,
  linkTitle,
  socialSrc,
  socialAlt,
}: CommonSocialProps) {
  return (
    <div className="w-screen h-screen px-8 flex flex-col gap-2">
      <div className="max-w-7xl mx-auto items-center justify-center my-auto">
        <div className="grid grid-flow-col items-center justify-center gap-1">
          <Image
            src={socialSrc}
            alt={socialAlt}
            height="80"
            width="80"
            className="rounded-full"
          />
          <h2 className="font-bold text-6xl">{title}</h2>
        </div>
        <p>{description}</p>
        <Link
          href={link}
          className="bg-slate-200 text-black font-bold items-center w-full rounded-md px-3 py-3 flex gap-2 mt-4 justify-center text-xl"
        >
          <Icon className="w-7 h-7" />
          {linkTitle}
        </Link>
      </div>
    </div>
  );
}
