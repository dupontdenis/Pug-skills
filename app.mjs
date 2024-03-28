import { readSkills } from "./utils/readSkills.mjs";
import { writeHTML } from "./utils/writeHTML.mjs";
import { writeSkills } from "./utils/createSkills.mjs";

async function main() {
  // First, create the skills.json file
  await writeSkills();

  let skills = await readSkills();

  // Sort the skills by rating in descending order
  skills.sort((a, b) => b.rating - a.rating);

  // Limit the skills to the top 3
  skills = skills.slice(0, 3);

  await writeHTML(skills);
}

main();
