import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    { name: "jobTitle", title: "Job Title", type: "string" },
    {
      name: "companyImage",
      title: "Company Image",
      type: "image",
      options: { hotspot: true },
    },
    { name: "companyName", title: "Comapny Name", type: "string" },
    { name: "iconBg", title: "Icon Background", type: "string" },
    { name: "date", title: "date", type: "string" },
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
  ],
});
