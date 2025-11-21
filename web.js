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
  // ==========================================
  // 4. ANIMACIÓN DE CONTADORES (Números que suben)
  // ==========================================

  const runCounterAnimation = (el) => {
    const target = +el.getAttribute('data-target'); // El número final (el + convierte string a numero)
    const duration = 2000; // Duración en milisegundos (2 segundos)
    const increment = target / (duration / 16); // 60 FPS (1000ms / 60 ≈ 16ms)

    let current = 0;

    const updateCounter = () => {
      current += increment;

      if (current < target) {
        el.innerText = Math.ceil(current); // Redondeamos hacia arriba
        requestAnimationFrame(updateCounter); // Siguiente frame
      } else {
        el.innerText = target; // Aseguramos que termine en el número exacto
      }
    };

    updateCounter();
  };

  // Observer específico para los contadores
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        runCounterAnimation(counter);
        observer.unobserve(counter); // Solo animar una vez
      }
    });
  }, { threshold: 0.5 }); // Se activa cuando el 50% del número es visible

  // Seleccionamos todos los números y los observamos
  const counters = document.querySelectorAll('.number');
  counters.forEach(counter => {
    counterObserver.observe(counter);
  });
});
