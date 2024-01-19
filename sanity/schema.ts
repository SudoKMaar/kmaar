import { type SchemaTypeDefinition } from "sanity";

import social from "./schemas/social";
import pageInfo from "./schemas/pageInfo";
import skill from "./schemas/skill";
import skill1 from "./schemas/skill1";
import skill2 from "./schemas/skill2";
import skill3 from "./schemas/skill3";
import skill4 from "./schemas/skill4";
import experience from "./schemas/experience";
import project from "./schemas/project";
import externalImage from "./schemas/externalImage";
import achievement from "./schemas/achievement";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    skill,
    skill1,
    skill2,
    skill3,
    skill4,
    experience,
    social,
    pageInfo,
    project,
    externalImage,
    achievement,
  ],
};
