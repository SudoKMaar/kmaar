import { groq } from "next-sanity";
import { client } from "../../sanity.config";

const query = groq`*[_type == "experience"]`;

export default async function experienceAPI(req, res) {
  const experience = await client.fetch(query);
  res.status(200).json({ experience });
}
