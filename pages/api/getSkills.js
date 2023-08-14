import { groq } from "next-sanity";
import { client } from "../../sanity.config";

const query = groq`*[_type == "skill"]{skillTitle,"skillImage": skillImage.asset->url}`;

export default async function skillsAPI(req, res) {
  const skills = await client.fetch(query);
  res.status(200).json({ skills });
}
