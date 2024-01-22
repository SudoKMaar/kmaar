import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "KMaar Social";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font
  const robotoRegular = fetch(
    new URL("fontsRoboto-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundImage: "url('/social-og.png')",
          backgroundSize: "cover",
          fontSize: 60,
          letterSpacing: -2,
          fontWeight: 700,
          textAlign: "left",
        }}
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            position: "relative",
            right: 200,
          }}
        >
          Abhishek
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            position: "relative",
            right: 200,
          }}
        >
          Kumar
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            position: "relative",
            right: 200,
          }}
        >
          Instagram
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
          name: "Roboto",
          data: await robotoRegular,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
