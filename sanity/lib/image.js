import imageUrlBuilder from "@sanity/image-url";

import { client } from "../../sanity.config.js";

const builder = imageUrlBuilder(client);

export const urlForImage = (source) => {
  return builder.image(source).auto("format").fit("max");
};
