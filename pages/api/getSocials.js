import { groq } from "next-sanity";
import { client } from "../../sanity.config";

const query = groq`*[_type == "social"]`;

export default async function socialsAPI(req, res) {
  const socials = await client.fetch(query);
  res.status(200).json({ socials });
}
