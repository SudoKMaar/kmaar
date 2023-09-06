import { urlForImage } from "../../sanity/lib/image";

const Avatar = ({ pageInfo }) => {
  return (
    <div className="hidden md:flex lg:flex lg:max-w-none">
      <img
        src={urlForImage(pageInfo.heroImage).url()}
        width={400}
        height={400}
        alt="Abhishek KMaar"
        className="translate-z-0 bottom-0 w-full h-full align-right -z-8"
      />
    </div>
  );
};

export default Avatar;
