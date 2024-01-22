import { groq } from "next-sanity";
import { Achievement } from "@/typings";
import { sanityFetch } from "@/sanity/lib/client";
import AchievementsSlider from "@/components/achievements-section/slider";

// export const revalidate = 10;

// async function getAchievement() {
//   const query = `*[_type == "achievement"]{
//     title,
//     image{ "image": asset->url},
//     year}`;
//   const data = await client.fetch(query);
//   return data;
// }

async function AchievementsSection() {
  const query = groq`*[_type == "achievement"] | order(year desc){
         title,
         image{ "image": asset->url},
         year}`;
  const achievements: Achievement[] = await sanityFetch({
    query: query,
    tags: ["achievement"],
  });
  return (
    <>
      <AchievementsSlider achievements={achievements} />
    </>
  );
}

export default AchievementsSection;
