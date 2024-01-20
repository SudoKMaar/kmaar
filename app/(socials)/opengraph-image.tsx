import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "KMaar Social";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
interface USPProps {
  icon: React.ReactNode;
  uspValue: string;
  label: string;
}

const USP = ({ icon, uspValue, label }: USPProps) => (
  <div tw="flex flex-col text-[28px]">
    <div tw="flex flex-row font-bold items-center justify-center mr-6">
      {icon}
      <div tw="flex ml-4">{uspValue}</div>
    </div>
    {label}
  </div>
);

// Image generation
export default async function Image(req: NextRequest) {
  // Font
  const interSemiBold = fetch(new URL("", import.meta.url)).then((res) =>
    res.arrayBuffer()
  );
  const { searchParams } = req.nextUrl;
  const pageName = searchParams.get("title");
  const pageDescription = searchParams.get("description");
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div tw="flex flex-row p-[48px] w-full h-full bg-white">
        <div tw="flex flex-col w-[80%] h-full">
          <h1 tw="text-[72px]">{pageName}</h1>
          <p tw="text-[32px] text-neutral-700">{pageDescription}</p>
          <div tw="flex mt-auto">
            <USP
              label="forks"
              uspValue="2808"
              icon={
                <svg height="24" width="24" viewBox="0 0 16 16" version="1.1">
                  <path
                    fill="black"
                    fill-rule="evenodd"
                    d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  ></path>
                </svg>
              }
            />

            <USP
              label="issues"
              uspValue="69"
              icon={
                <svg
                  fill="black"
                  height="24"
                  width="24"
                  viewBox="0 0 16 16"
                  version="1.1"
                >
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                  ></path>
                </svg>
              }
            />

            <USP
              label="stars"
              uspValue="110044"
              icon={
                <svg
                  fill="black"
                  height="24"
                  width="24"
                  viewBox="0 0 16 16"
                  version="1.1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                  ></path>
                </svg>
              }
            />
          </div>
        </div>
        <div tw="flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            tw="w-32 h-32"
            src="https://cdn.sanity.io/images/x3sf3c46/production/8edd4eeeaff0ffa10002e8718543e0b455d698d6-4000x4000.png"
            alt="Abhishek Kumar"
          />
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
