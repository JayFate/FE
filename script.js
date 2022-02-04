// 获取 GitHub issue 内容
import path, { dirname } from "path";
import { fileURLToPath } from 'url';
import fs from "fs-extra";
import axios from "axios";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const jsons = await axios.get("https://api.github.com/repos/JayFate/FE/issues")

const targetDir = path.resolve(__dirname, "articles")
fs.ensureDirSync(targetDir)
fs.emptyDirSync(targetDir)
jsons.data.forEach(json => {
  const title = json.title.replaceAll(" ", "")
  console.log(title)
  const content = json.body || "content is null."
  const filepath = path.resolve(targetDir, title + ".md")
  fs.ensureFileSync(filepath)
  fs.writeFileSync(filepath, content)
  debugger
});