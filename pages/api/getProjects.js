import { groq } from "next-sanity";
import { client } from "../../sanity.config";
const query = groq`*[_type == "project"]`;

export default async function projectsAPI(req, res) {
  const projects = await client.fetch(query);
  res.status(200).json({ projects });
}
