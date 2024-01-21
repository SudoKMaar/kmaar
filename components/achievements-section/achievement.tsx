import { Achievement } from "@/typings";
import AchievementsSlider from "@/components/achievements-section/slider";
import { client } from "@/sanity/lib/client";

export const revalidate = 10;

async function getAchievement() {
  const query = `*[_type == "achievement"]{
    title, 
    image{ "image": asset->url},
    year}`;
  const data = await client.fetch(query);
  return data;
}

async function AchievementsSection() {
  const achievements: Achievement[] = await getAchievement();
  return (
    <>
      <AchievementsSlider achievements={achievements} />
    </>
  );
}

export default AchievementsSection;
