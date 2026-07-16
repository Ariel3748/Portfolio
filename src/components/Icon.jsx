/**
 * Renderiza un ícono de Bootstrap Icons como SVG real, usando el sprite
 * que copia scripts/copy-icons.js a /public/bootstrap-icons.svg.
 *
 * Lista completa de nombres disponibles: https://icons.getbootstrap.com
 * Ejemplos usados en este proyecto: sun-fill, moon-stars-fill, github,
 * envelope-fill, linkedin, file-earmark-pdf-fill, box-arrow-up-right,
 * x-lg, chevron-left, chevron-right, geo-alt-fill, arrow-right
 */
export default function Icon({ name, className = "" }) {
  return (
    <svg className={className} fill="currentColor" aria-hidden="true">
      <use href={`/bootstrap-icons.svg#${name}`} xlinkHref={`/bootstrap-icons.svg#${name}`} />
    </svg>
  );
}
