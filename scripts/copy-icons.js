// Copia el sprite SVG de bootstrap-icons a /public para poder usarlo
// con <svg><use xlinkHref="/bootstrap-icons.svg#nombre-icono" /></svg>
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const src = resolve(root, "node_modules/bootstrap-icons/bootstrap-icons.svg");
const destDir = resolve(root, "public");
const dest = resolve(destDir, "bootstrap-icons.svg");

try {
  if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
  if (existsSync(src)) {
    copyFileSync(src, dest);
    console.log("bootstrap-icons.svg copiado a /public");
  } else {
    console.warn("No se encontró bootstrap-icons en node_modules. Corré 'npm install' de nuevo.");
  }
} catch (err) {
  console.warn("No se pudo copiar bootstrap-icons.svg:", err.message);
}
