# FLŌ Landing Page — V7

## Cambios principales
- Optimización completa para celular (320 px en adelante).
- Selector ES / EN / PT que traduce todos los textos de la landing sin recargar la página.
- Imágenes WebP optimizadas en alta calidad + JPG como fallback.
- Nuevos encuadres responsive mediante `object-position` y `aspect-ratio`.
- Hero móvil separado en imagen + contenido para mejorar legibilidad.
- Ingredientes en grid 2×2 en móvil.
- Trabajo / Gym / Día a día en tarjetas verticales con imagen 4:3.
- Banner final recortado específicamente para móvil.
- CTA conectado al Google Form.
- Se mantienen animaciones, entrada de imágenes, logo y parallax en desktop.

## Publicación
Reemplaza `index.html`, `README.md` y la carpeta `assets/` en la raíz del repositorio.
Haz commit a `main`; Netlify desplegará V7 automáticamente.

## Idiomas
El contenido se encuentra en `assets/main.js`, dentro del objeto `translations`.
Idiomas incluidos: español (`es`), inglés (`en`) y portugués (`pt`).

## Formulario
https://docs.google.com/forms/d/e/1FAIpQLSd46xMNUl24eneWQD7mHaOeVypTG3iFNl2sf6CvDNopho0LCQ/viewform?usp=publish-editor

## Ajustes específicos V7
- CTA superior ampliado a un mínimo de 230 px en desktop y mejor proporción visual.
- Revisión de `object-position` independiente para Hero, producto, los 4 ingredientes y las 3 imágenes lifestyle.
- Breakpoints adicionales para desktop compacto, tablet, móvil y pantallas de 380 px.
- Imágenes WebP reexportadas a calidad 92 y resolución retina.
- Proporciones diferenciadas según dispositivo para evitar cortes incómodos.
- Paleta FLŌ consolidada mediante variables CSS.
