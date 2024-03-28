import fs from "fs/promises";

export async function readSkills() {
  let rawdata = await fs.readFile("./models/skills.json");
  let skills = JSON.parse(rawdata);
  return skills;
}
