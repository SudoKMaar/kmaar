import { groq } from "next-sanity";
import { client } from "../../sanity.config";

const query = groq`*[_type == "experience"]`;
const cleanedQuery = query.replace(/\s/g, "");

export default async function experienceAPI(req, res) {
  const experience = await client.fetch(cleanedQuery);
  res.status(200).json({ experience });
}
