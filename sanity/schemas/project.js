import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "projectTitle",
      title: "Project Title",
      description: "Name of Project",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: "true" },
    },
    { name: "description", title: "Description", type: "text" },
    { name: "liveLink", title: "Live Link", type: "url" },
    { name: "gitHubLink", title: "GitHub Link", type: "url" },
  ],
});
