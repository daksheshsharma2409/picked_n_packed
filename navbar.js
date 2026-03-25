const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const [s1, s2, s3] = hamburger.querySelectorAll("span");

hamburger.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("hidden");
  const active = !isOpen;

  s1.classList.toggle("translate-y-[8px]", active);
  s1.classList.toggle("rotate-45", active);
  s2.classList.toggle("opacity-0", active);
  s3.classList.toggle("-translate-y-[8px]", active);
  s3.classList.toggle("-rotate-45", active);

  hamburger.setAttribute("aria-expanded", active);
});
