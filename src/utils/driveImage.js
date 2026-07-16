/**
 * Convierte un link para compartir de Google Drive
 * (ej: https://drive.google.com/file/d/ID/view?usp=sharing)
 * en un link directo que puede usarse en un <img src="...">.
 *
 * Si la URL recibida no es de Drive, se devuelve tal cual (por si
 * en algún momento se quiere usar una imagen alojada en otro lugar).
 *
 * Para que la imagen cargue correctamente, el archivo en Drive tiene
 * que estar compartido como "Cualquier persona con el enlace: Lector".
 */
export function getDriveImageUrl(url, size = "w1000") {
  if (!url) return "";

  const patterns = [/\/file\/d\/([-\w]{10,})/, /[?&]id=([-\w]{10,})/];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) {
      return `https://drive.google.com/thumbnail?id=${match[1]}&sz=${size}`;
    }
  }

  return url;
}
