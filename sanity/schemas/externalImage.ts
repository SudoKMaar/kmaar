import { defineField, defineType } from "sanity";

export default defineType({
  name: "external",
  title: "External Image",
  type: "document",
  fields: [
    {
      name: "Title",
      title: "Title",
      description: "Name",
      type: "string",
    },
    {
      name: "Image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  orderings: [
    {
      title: "Title, A-Z",
      name: "TitleAsc",
      by: [{ field: "Title", direction: "asc" }],
    },
  ],
});
