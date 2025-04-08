# G-Look - Barbería en Puebla

**G-Look** es una landing page profesional para una barbería moderna ubicada en Puebla. El sitio presenta información clara sobre servicios, ubicación, horarios, redes sociales y un estilo visual impactante con enfoque en rendimiento y SEO local.

## 🌟 Características

- 👤 Sección de equipo con animaciones y cards personalizadas
- 🎓 Tabla de servicios dividida en dos columnas con versión optimizada para móvil
- 🌟 Hero reutilizable con imagen de fondo optimizada
- 📊 SEO optimizado (meta tags, sitemap.xml, robots.txt, JSON-LD)
- 🌐 Integración de mapa e información de contacto
- 📅 CTA y enlaces directos a WhatsApp, Instagram y Facebook

## 🚀 Tecnologías utilizadas

- [Astro](https://astro.build/) (con soporte para Islands y `astro:assets`)
- [TailwindCSS](https://tailwindcss.com/)
- [Preact](https://preactjs.com/) (para componentes interactivos)
- [CountUp.js](https://inorganik.github.io/countUp.js/) (para animaciones de número)
- Deployment friendly para [Vercel](https://vercel.com/) o [Netlify](https://netlify.com/)

## 📄 Instalación local

```bash
pnpm install
pnpm dev
```

## 🚤 Comandos disponibles

```bash
pnpm dev         # Ejecuta el entorno local
pnpm build       # Genera la build estática
pnpm preview     # Previsualiza la build final
```

## 🌍 Estructura de carpetas

```
/
├─ public/                  # Archivos estáticos (favicon, robots.txt, sitemap.xml)
├─ src/
│  ├─ components/           # Componentes reutilizables (cards, botones, iconos)
│  ├─ layouts/              # Layout principal con metaetiquetas SEO
│  ├─ pages/                # index.astro
│  ├─ sections/             # Secciones de la landing (Hero, About, Team, etc.)
│  └─ styles/               # Tailwind + estilos globales
```

## 📁 Archivos SEO relevantes

- `public/robots.txt`
- `public/sitemap.xml`
- JSON-LD en el `<footer>`

## 📣 Creditos

Desarrollado por [@Victor](https://github.com/) con amor por el detalle y un enfoque especial en rendimiento, accesibilidad y diseño responsive.

---

Si te gustó este proyecto o te ayudó, considera dejar una estrella ⭐ o compartirlo con otros barberos que buscan destacar online.

> "G-Look: Donde el estilo encuentra la precisión."
