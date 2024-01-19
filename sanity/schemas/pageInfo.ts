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
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "profileImage",
      title: "profile Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "socials",
      title: "socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    },
    {
      name: "words",
      title: "Typed Words",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
});
