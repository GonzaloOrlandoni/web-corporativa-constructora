# 🏗️ GO Constructora - Web Corporativa

<p align="center">
  <img src="img/preview.webp" alt="Vista Previa de GO Constructora" width="100%">
</p>

<p align="center">
    <img src="https://img.shields.io/badge/Estado-Terminado-success?style=flat-square" alt="Estado">
    <img src="https://img.shields.io/badge/Estilos-SASS%2FSCSS-hotpink?style=flat-square" alt="SASS">
    <img src="https://img.shields.io/badge/Diseño-Responsive-blue?style=flat-square" alt="Responsive">
</p>

---

Landing page corporativa moderna desarrollada para una empresa de construcción e ingeniería. El proyecto se aleja de las plantillas tradicionales, enfocándose en una identidad visual tecnológica ("Ingeniería Corporativa"), alto rendimiento y una experiencia de usuario fluida adaptada a todos los dispositivos.

## 🚀 Demo Online

Puedes ver el proyecto funcionando aquí:

### 👉 [**Ver Web en Vercel**](https://web-corporativa-constructora.vercel.app)

---

## 🎨 Diseño y Características Visuales

Se desarrolló una identidad visual propia para transmitir confianza y modernidad.

- **Paleta de Colores "Ingeniería":**
  - **Azul Profundo (`#004e92`):** Seriedad y solidez corporativa.
  - **Cian Vibrante (`#00b4db`):** Tecnología, innovación y futuro.
- **Tipografía Técnica:** Combinación de **Barlow** (Títulos robustos) e **Inter** (Lectura optimizada).
- **Experiencia de Usuario (UX):**
  - **Scroll Reveal:** Aparición suave de secciones al navegar.
  - **Contadores Dinámicos:** Animación numérica en tiempo real para estadísticas.
  - **Micro-interacciones:** Feedback visual en botones y campos de formulario.
  - **Texturas:** Fondo con efecto "marca de agua" de planos de ingeniería.
- **Diseño 100% Responsive (Fluido):** Layout completamente fluido y elástico que se adapta desde pantallas 4K hasta móviles de manera orgánica. Utiliza funciones CSS modernas como `clamp()` y `min()` para tipografías fluidas y espaciados dinámicos sin depender exclusivamente de media queries.

## ⚡ Rendimiento y Optimización (V2)

El proyecto ha sido optimizado en todas sus capas (Imágenes, HTML, CSS, JS y SEO) para alcanzar métricas perfectas en Lighthouse:

- **Imágenes Next-Gen:** Todas las fotografías fueron convertidas a formato **WebP**, reduciendo drásticamente su peso, e implementan el atributo `loading="lazy"` para carga diferida.
- **Rendimiento de Renderizado:** Atributos `defer` en los scripts y estilos SCSS minificados (`--style=compressed`) para evitar bloqueos del hilo principal y mejorar el tiempo de primera carga (FCP).
- **Animaciones a 60 FPS:** Event listeners declarados como `{ passive: true }` para habilitar un scroll 100% fluido y animaciones gestionadas por `requestAnimationFrame` guiadas por _timestamps_ en lugar de incrementos fijos.
- **SEO & A11y:** Inclusión de metaetiquetas descriptivas, atributos `aria-label` para botones clave (menú, scroll) y contraste óptimo, asegurando que el contenido sea accesible por todos los usuarios y motores de búsqueda.

## 🛠️ Stack Tecnológico

Este proyecto evita el uso de frameworks pesados para garantizar el máximo rendimiento y control sobre el código.

- **HTML5 Semántico:** Estructura optimizada para accesibilidad y SEO.
- **SASS (SCSS):** Arquitectura modular escalable (patrón 7-1 simplificado), uso de variables globales, mixins para media queries y anidamiento.
- **JavaScript (Vanilla ES6+):** Lógica del menú móvil, observadores de intersección (para animaciones al scroll) y contadores, sin dependencias externas.
- **CSS Moderno:** Uso extensivo de CSS Grid y Flexbox para layouts complejos.

## 📂 Estructura del Proyecto

El código está organizado para ser mantenible y escalable:

```text
/
├── css/
│   └── main.css       # CSS final compilado para producción
├── img/               # Recursos gráficos, capturas y Favicon
├── scss/              # Código fuente SASS
│   ├── base/          # Variables globales, resets y mixins
│   ├── components/    # Módulos UI (Navbar, Botones, Tarjetas, Forms)
│   ├── layout/        # Estructuras mayores (Header, Footer, Secciones)
│   └── main.scss      # Archivo maestro importador
├── index.html         # Maquetado principal
├── web.js             # Lógica de interacción JS
└── README.md          # Documentación
```
