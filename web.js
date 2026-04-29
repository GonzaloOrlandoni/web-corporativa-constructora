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
    // Escuchar el evento de scroll de la ventana, con passive true para mejor rendimiento
    window.addEventListener("scroll", () => {
      // Si bajamos más de 300px, mostramos el botón
      if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    }, { passive: true });

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
    const target = +el.getAttribute("data-target"); // El número final (el + convierte string a numero)
    const duration = 2000; // Duración en milisegundos (2 segundos)
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      el.innerText = Math.floor(progress * target);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.innerText = target;
      }
    };

    window.requestAnimationFrame(step);
  };

  // Observer específico para los contadores
  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          runCounterAnimation(counter);
          observer.unobserve(counter); // Solo animar una vez
        }
      });
    },
    { threshold: 0.5 }
  ); // Se activa cuando el 50% del número es visible

  // Seleccionamos todos los números y los observamos
  const counters = document.querySelectorAll(".number");
  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });
  // ==========================================
  // 5. BARRA DE PROGRESO DE LECTURA
  // ==========================================
  const progressBar = document.getElementById("progress-bar");
  if (progressBar) {
    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      progressBar.style.width = ((scrolled / total) * 100) + "%";
    }, { passive: true });
  }

  // ==========================================
  // 6. FORMULARIO DE CONTACTO (Async + Toast)
  // ==========================================
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Honeypot check
      const honeypot = contactForm.querySelector('input[name="website"]');
      if (honeypot && honeypot.value.trim() !== "") {
        setTimeout(() => showToast("¡Mensaje enviado con éxito!", "success"), 1500);
        contactForm.reset();
        return;
      }

      const submitBtn = document.getElementById("submit-btn");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Enviando...";
      }

      try {
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: new FormData(contactForm),
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          showToast("¡Consulta enviada! Un asesor te contactará pronto.", "success");
          contactForm.reset();
        } else {
          showToast("Error al enviar. Intentá nuevamente.", "error");
        }
      } catch {
        showToast("Error de conexión. Verificá tu internet.", "error");
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Enviar Consulta";
        }
      }
    });
  }
});

// ==========================================
// SISTEMA DE TOASTS
// ==========================================
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  let icon = "ℹ️";
  if (type === "success") icon = "✅";
  if (type === "error") icon = "❌";

  toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-message"></span><button class="toast-close">✕</button>`;
  toast.querySelector(".toast-message").textContent = message;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);
  const timeout = setTimeout(() => closeToast(toast), 5000);
  toast.querySelector(".toast-close").addEventListener("click", () => {
    clearTimeout(timeout);
    closeToast(toast);
  });
}

function closeToast(toast) {
  toast.classList.remove("show");
  toast.classList.add("hide");
  toast.addEventListener("transitionend", () => toast.remove(), { once: true });
}
