import { defineField, defineType } from "sanity";

export default defineType({
  name: "social",
  title: "Social",
  type: "document",
  fields: [
    {
      name: "socialTitle",
      title: "Social Title",
      description: "Social Media Platform",
      type: "string",
    },
    { name: "url", title: "Url", type: "url" },
  ],
});
