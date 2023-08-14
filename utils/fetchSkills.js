export const fetchSkils = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hello`);
  const data = await res.json();
  const skills = data.skills;
  return skills;
};
