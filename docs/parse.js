const fs = require("fs");

const cache = fs.readdirSync("./cache");
const pages = [];
let route = "cache";

if (!fs.existsSync(`./docs`)) fs.mkdirSync(`./docs`);

for (let item of cache) {
  if (fs.lstatSync(`./cache/${item}`).isDirectory()) {
    if (!fs.existsSync(`./docs/${item}`)) fs.mkdirSync(`./docs/${item}`);
    const dir = fs.readdirSync(`./cache/${item}`);
    dir.forEach(i => handle(`${item}/${i}`));
  }
  else handle(item);
}

// while (true) {
//   const dir = fs.readdirSync(`./${route}`);
//   const item = dir.filter(i => fs.lstatSync(`./cache/${i}`).isDirectory())
//   if (item.length > 0) {
//     route
//   }
// }

function handle(file) {
  console.log(file)
  let page = fs.readFileSync(`./cache/${file}`, { encoding: "utf-8" });
  if (file.includes(".md")) {
    page = page.replaceAll("\r\n", "\r\n\r\n");
  }
  fs.writeFileSync(`./docs/${file}`, page);
}