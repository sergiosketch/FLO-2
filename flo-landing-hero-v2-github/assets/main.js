// Replace this URL when the final Google Form is ready.
const WAITLIST_URL = "https://forms.google.com/";

document.querySelectorAll(".js-waitlist").forEach((link) => {
  link.href = WAITLIST_URL;
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const parallaxItems = [...document.querySelectorAll(".parallax")];

if (!reduceMotion && window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener("pointermove", (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    parallaxItems.forEach((item) => {
      const depth = Number(item.dataset.depth || 0.02);
      item.style.transform =
        `translate3d(${x * depth * 900}px, ${y * depth * 700}px, 0)`;
    });
  }, { passive: true });

  document.querySelector(".hero")?.addEventListener("pointerleave", () => {
    parallaxItems.forEach((item) => {
      item.style.transition = "transform .7s cubic-bezier(.2,.7,.2,1)";
      item.style.transform = "translate3d(0,0,0)";
      setTimeout(() => item.style.transition = "", 700);
    });
  });
}
