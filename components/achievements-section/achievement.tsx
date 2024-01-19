import { Achievement } from "@/typings";
import { getAchievement } from "@/sanity/lib/query";
import AchievementsSlider from "@/components/achievements-section/slider";

export const revalidate = 10;

async function AchievementsSection() {
  const achievements: Achievement[] = await getAchievement();
  return (
    <>
      <AchievementsSlider achievements={achievements} />
    </>
  );
}

export default AchievementsSection;
