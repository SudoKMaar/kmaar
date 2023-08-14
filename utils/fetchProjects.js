export const fetchProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hello`);
  const data = await res.json();
  const projects = data.projects;
  return projects;
};
