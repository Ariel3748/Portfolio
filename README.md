# Mi Portfolio

Portfolio simple y responsive hecho en React + Vite (JavaScript). Modo claro/oscuro,
íconos SVG de [Bootstrap Icons](https://icons.getbootstrap.com), y proyectos
gestionados desde un archivo JSON (sin tocar código).

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí la URL que te muestra la terminal (por defecto `http://localhost:5173`).

Al hacer `npm install` se copia automáticamente el sprite de íconos de Bootstrap
a `public/bootstrap-icons.svg` (lo hace el script `scripts/copy-icons.js`, definido
como `postinstall`). Si por algún motivo no aparecen los íconos, corré:

```bash
node scripts/copy-icons.js
```

## Cómo agregar o quitar proyectos

Todo se edita en **`src/data/projects.json`**. Es un array: cada objeto es un
proyecto. Para agregar uno nuevo, copiá un bloque y modificalo; para quitar uno,
borrá su bloque.

```json
{
  "id": "id-unico-sin-espacios",
  "title": "Nombre del proyecto",
  "shortDescription": "Frase corta que aparece en la tarjeta del listado.",
  "description": "Descripción más larga que aparece en el detalle del proyecto.",
  "technologies": ["React", "Node.js"],
  "images": [
    "https://drive.google.com/file/d/ID_DEL_ARCHIVO/view?usp=sharing"
  ],
  "demoUrl": "https://tu-proyecto-desplegado.com",
  "repoUrl": "https://github.com/tu-usuario/tu-repo"
}
```

Campos:

- **id**: identificador único (no se muestra, solo se usa internamente).
- **title / shortDescription**: se ven en la tarjeta del listado de proyectos.
- **description**: texto completo que se ve al abrir el detalle del proyecto.
- **technologies**: lista de tecnologías, se muestran como etiquetas.
- **images**: uno o más links de Google Drive (ver abajo cómo compartirlos).
  La primera imagen es la que aparece en la tarjeta del listado.
- **demoUrl**: link al proyecto desplegado (botón "Ver desplegado"). Si lo dejás
  vacío o lo borrás, ese botón no se muestra.
- **repoUrl**: link al repositorio de GitHub (botón "Ver repositorio"). Mismo
  comportamiento que `demoUrl` si lo borrás.

## Cómo compartir imágenes desde Google Drive

1. Subí la imagen a Drive.
2. Click derecho → **Compartir** → cambiar el acceso a **"Cualquier persona con
   el enlace"** con rol **Lector**.
3. Copiá el link que te da Drive (algo como
   `https://drive.google.com/file/d/1AbCd.../view?usp=sharing`) y pegalo tal cual
   en el array `images` del proyecto.

El código convierte automáticamente ese link en uno que se puede usar como
imagen (`src/utils/driveImage.js`), no hace falta transformarlo a mano.

## Cómo editar tus datos personales y el link al CV

Se editan en **`src/data/profile.json`**:

```json
{
  "name": "Tu Nombre",
  "role": "Desarrollador/a Web",
  "location": "Ciudad, País",
  "bio": "Texto breve sobre vos.",
  "email": "tu-email@ejemplo.com",
  "github": "https://github.com/tu-usuario",
  "linkedin": "https://www.linkedin.com/in/tu-usuario",
  "resumeUrl": "https://drive.google.com/file/d/TU_ID_DE_ARCHIVO/view?usp=sharing"
}
```

`resumeUrl` es el botón "Ver CV" de la sección de inicio: subí tu CV en PDF a
Drive, compartilo igual que las imágenes (cualquier persona con el enlace,
Lector) y pegá ese link ahí.

## Compilar para producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para subir a Vercel, Netlify, GitHub Pages, etc.

## Estructura del proyecto

```
src/
  components/     Componentes de UI (Header, About, Projects, ProjectCard,
                   ProjectModal, Contact, Footer, Icon)
  context/        ThemeContext (modo claro/oscuro)
  data/           projects.json y profile.json — lo único que necesitás editar
  utils/          driveImage.js — helper para links de Google Drive
```
