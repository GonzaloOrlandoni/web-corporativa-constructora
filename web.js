document.addEventListener("DOMContentLoaded", () => {
  // ... (Tu código de navegación y AOS) ...

  // --- LÓGICA DARK MODE (NUEVA) ---
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Función para aplicar la clase y el icono
  function applyTheme(isDark) {
    if (isDark) {
      body.classList.add("dark-mode");
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      body.classList.remove("dark-mode");
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }

  // 1. Cargar la preferencia guardada
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    applyTheme(true);
  } else {
    applyTheme(false);
  }

  // 2. Escuchar el clic del botón
  themeToggle.addEventListener("click", () => {
    const isDark = body.classList.contains("dark-mode");
    // Cambia el tema
    applyTheme(!isDark);
    // Guarda la preferencia en localStorage
    localStorage.setItem("theme", isDark ? "light" : "dark");
  });
  // --- FIN LÓGICA DARK MODE ---

  // ... (El resto de tu código JS) ...
});
