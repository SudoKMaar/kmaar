import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    { name: "jobTitle", title: "Job Title", type: "string" },
    {
      name: "companyLogo",
      title: "Company Logo",
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
    { name: "companyName", title: "Comapny Name", type: "string" },
    { name: "iconBg", title: "Icon Background Color", type: "string" },
    { name: "date", title: "Date", type: "string" },
    {
      name: "technologies",
      title: "technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "points",
      title: "points",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "sortOrder", title: "Sort Order", type: "number" },
  ],
});
