document.addEventListener("DOMContentLoaded", function () {
  // ==========================================
  // 1. MENÚ HAMBURGUESA (Para Versión Móvil)
  // ==========================================
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      // Alternar clase para mostrar/ocultar menú
      navLinks.classList.toggle("show");

      // Opcional: Animación del icono hamburguesa
      hamburger.classList.toggle("active");
    });
  }

  // ==========================================
  // 2. BOTÓN SCROLL TO TOP (Volver Arriba)
  // ==========================================
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  if (scrollTopBtn) {
    // Escuchar el evento de scroll de la ventana
    window.addEventListener("scroll", () => {
      // Si bajamos más de 300px, mostramos el botón
      if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    });

    // Al hacer clic, subir suavemente
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // ==========================================
  // 3. ANIMACIÓN DE APARICIÓN (Scroll Reveal)
  // ==========================================
  const observerOptions = {
    root: null, // Observar respecto a la ventana
    rootMargin: "0px", // Sin márgenes extra
    threshold: 0.1, // Se activa cuando el 10% del elemento es visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // Si el elemento entra en pantalla
      if (entry.isIntersecting) {
        // Agregamos la clase que lo hace visible (definida en CSS)
        entry.target.classList.add("is-visible");

        // Dejamos de observar este elemento (ya apareció, no necesitamos más)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Seleccionamos todos los elementos que tengan la clase 'fade-in-section'
  const sections = document.querySelectorAll(".fade-in-section");

  sections.forEach((section) => {
    observer.observe(section);
  });
});
