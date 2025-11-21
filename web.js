document.addEventListener("DOMContentLoaded", () => {
  // --- MENÚ HAMBURGUESA ---
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      const isExpanded = navLinks.classList.contains("show");
      hamburger.setAttribute("aria-expanded", isExpanded);
    });
  } // --- FAQ INTERACTIVO (ACORDEÓN) ---

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const header = item.querySelector("h3");
    if (header) {
      header.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        item.classList.toggle("active");
        header.setAttribute("aria-expanded", !isActive);
      });
    }
  }); // --- TOGGLE MENSUAL/ANUAL ---

  const monthlyBtn = document.getElementById("monthly-btn");
  const annualBtn = document.getElementById("annual-btn");
  const prices = document.querySelectorAll(".plan-card .price");

  if (monthlyBtn && annualBtn && prices.length > 0) {
    function updatePrices(period) {
      prices.forEach((priceElement) => {
        if (priceElement.dataset[period]) {
          priceElement.textContent = priceElement.dataset[period];
        }
      });
    }

    monthlyBtn.addEventListener("click", () => {
      monthlyBtn.classList.add("active");
      annualBtn.classList.remove("active");
      updatePrices("monthly");
    });

    annualBtn.addEventListener("click", () => {
      annualBtn.classList.add("active");
      monthlyBtn.classList.remove("active");
      updatePrices("annual");
    });
  }

  // --- CARRUSEL DE TESTIMONIOS ---
  // El carrusel ahora es 100% CSS (ver style.css)
  // No se necesita JavaScript, lo que elimina el lag/traba.
});
