import { groq } from "next-sanity";
import { client } from "../../sanity.config";

const query = groq`*[_type == "pageInfo"][0]`;

export default async function pageInfoAPI(req, res) {
  const pageInfo = await client.fetch(query);
  res.status(200).json({ pageInfo });
}
