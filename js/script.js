// Main Site Functionality
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for navigation links
  setupSmoothScroll();

  // Scroll indicator click
  setupScrollIndicator();

  // Add scroll reveal animations
  setupScrollReveal();
});

// Smooth Scroll Setup
function setupSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");

      if (targetId === "#") return;

      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const headerOffset = 80;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Scroll Indicator Setup
function setupScrollIndicator() {
  const scrollIndicator = document.querySelector(".scroll-indicator");

  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
      const gallerySection = document.querySelector("#gallery");
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

// Scroll Reveal Animation
function setupScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, observerOptions);

  // Observe sections for fade-in animation
  const sections = document.querySelectorAll(
    ".studio-presentation, .gallery-section"
  );
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(section);
  });

  // Add revealed class styling
  const style = document.createElement("style");
  style.textContent = `
    .revealed {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
}

// Header background on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(13, 13, 15, 1)";
  } else {
    header.style.backgroundColor = "rgba(13, 13, 15, 0.95)";
  }
});
