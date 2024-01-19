interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface Social extends SanityBody {
  _type: "social";
  url: string;
  socialTitle: string;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  words: string[];
  role: string;
  profileImage: {
    alt: string;
    image: string;
  };
  heroImage: {
    alt: string;
    image: string;
  };
}

export interface Experience extends SanityBody {
  _type: "experience";
  date: string;
  jobTitle: string;
  iconBg: string;
  companyName: string;
  companyLogo: {
    alt: string;
    image: string;
  };
  points: string[];
}

export interface Skill extends SanityBody {
  _type: "skill";
  skillTitle: string;
  skillLogo: {
    image: string;
  };
  skillHeight: number;
  skillWidth: number;
}

export interface Projects extends SanityBody {
  _type: "project";
  projectTitle: string;
  projectImage: {
    image: string;
  };
  description: string;
  liveLink: string;
  gitHubLink: string;
}

export interface Achievement extends SanityBody {
  _type: "achievement";
  title: string;
  year: number;
  image: {
    image: string;
  };
}
