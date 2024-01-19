import { defineField, defineType } from "sanity";

export default defineType({
  name: "skill4",
  title: "Skill4",
  type: "document",
  fields: [
    {
      name: "skillTitle",
      title: "Skill Title",
      description: "Name of the Skill",
      type: "string",
    },
    {
      name: "skillLogo",
      title: "Skill Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "skillHeight",
      title: "Skill Height",
      description: "Height of the Skill",
      type: "number",
    },
    {
      name: "skillWidth",
      title: "Skill Width",
      description: "Name of the Skill",
      type: "number",
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
