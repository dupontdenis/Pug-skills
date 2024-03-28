import fs from "fs/promises";
import pug from "pug";

export async function writeHTML(skills) {
  console.log(skills);
  const html = await pug.renderFile("./views/skills-list.pug", {
    skills
  });
  await fs.writeFile("index.html", html);
}
