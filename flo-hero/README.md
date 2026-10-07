# FLŌ — Hero / Landing V1

Primera versión publicable del hero de FLŌ. Sitio estático en HTML/CSS/JS, listo para GitHub + Netlify.

## Antes de publicar
1. Abre `assets/main.js`.
2. Sustituye `https://forms.google.com/REPLACE-WITH-YOUR-FORM` por el enlace real del Google Form.
3. Si cuentas con fotografía/render definitivo del producto, reemplaza `assets/images/brand-reference.jpg` manteniendo el mismo nombre, o actualiza la ruta en `index.html`.

## Publicar en GitHub
Crea un repositorio (por ejemplo `flo-landing-page`) y sube todo el contenido de esta carpeta conservando la estructura.

## Publicar en Netlify
Importa el repositorio desde GitHub. Para esta versión estática no se requiere build command. El directorio de publicación es la raíz del repositorio (`.`).

## Contenido actual
- Hero responsive desktop/mobile
- CTA a waiting list
- Animaciones de entrada
- Parallax con cursor en desktop
- Microinteracción del CTA
- Movimiento ambiental
- Respeta `prefers-reduced-motion` por accesibilidad
