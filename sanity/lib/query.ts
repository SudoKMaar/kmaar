import { groq } from "next-sanity";
import { client } from "./client";

export async function getSocial() {
  return client.fetch(
    groq`*[_type == "social"]{
        _type,_id,socialTitle,url
      }`,
    { next: { revalidate: 10 } }
  );
}

export async function getPageInfo() {
  return client.fetch(
    groq`*[_type == "pageInfo"][0]{
      name,
      role,
      words,
      heroImage  {alt, "image": asset->url},
      profileImage {alt, "image": asset->url},
    }`,
    { next: { revalidate: 10 } }
  );
}

export async function getExperience() {
  return client.fetch(
    groq`*[_type == "experience"]{
            date,
            jobTitle,
            iconBg,
            companyName, 
            companyLogo{alt, "image": asset->url},
            points}`,
    { next: { revalidate: 10 } }
  );
}

export async function getSkill() {
  return client.fetch(
    groq`*[_type == "skill"]{
            skillTitle, 
            skillLogo{ "image": asset->url},
            skillHeight,
            skillWidth}`,
    { next: { revalidate: 10 } }
  );
}

export async function getSkill1() {
  return client.fetch(
    groq`*[_type == "skill1"]{
            skillTitle, 
            skillLogo{ "image": asset->url},
            skillHeight,
            skillWidth}`,
    { next: { revalidate: 10 } }
  );
}

export async function getSkill2() {
  return client.fetch(
    groq`*[_type == "skill2"]{
            skillTitle, 
            skillLogo{ "image": asset->url},
            skillHeight,
            skillWidth}`,
    { next: { revalidate: 10 } }
  );
}

export async function getSkill3() {
  return client.fetch(
    groq`*[_type == "skill3"]{
            skillTitle, 
            skillLogo{ "image": asset->url},
            skillHeight,
            skillWidth}`,
    { next: { revalidate: 10 } }
  );
}

export async function getSkill4() {
  return client.fetch(
    groq`*[_type == "skill4"]{
            skillTitle, 
            skillLogo{ "image": asset->url},
            skillHeight,
            skillWidth}`,
    { next: { revalidate: 10 } }
  );
}

export async function getProject() {
  return client.fetch(
    groq`*[_type == "project"]{
    projectTitle,
    projectImage{ "image": asset->url},
    description,
    liveLink,
    gitHubLink
  }`,
    { next: { revalidate: 10 } }
  );
}

export async function getAchievement() {
  return client.fetch(
    groq`*[_type == "achievement"]{
              title, 
              image{ "image": asset->url},
              year}`,
    { next: { revalidate: 10 } }
  );
}
