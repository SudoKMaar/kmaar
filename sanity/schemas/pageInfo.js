import { defineField, defineType } from "sanity";

export default defineType({
  name: "pageInfo",
  title: "Page Info",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "role", title: "Role", type: "string" },
    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "profileImage",
      title: "profileImage",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "socials",
      title: "socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    },
    {
      name: "words",
      title: "Words",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
});
