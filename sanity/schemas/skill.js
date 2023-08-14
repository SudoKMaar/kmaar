import { defineField, defineType } from "sanity";

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "skillTitle",
      title: "Skill Title",
      description: "Name of the Skill",
      type: "string",
    },
    {
      name: "skillImage",
      title: "Skill Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  orderings: [
    {
      title: "Skill Title, A-Z",
      name: "skillTitleAsc",
      by: [{ field: "skillTitle", direction: "asc" }],
    },
  ],
});
