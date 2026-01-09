document.querySelectorAll(".navbar-nav li a").forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelectorAll(".navbar-nav li a")
      .forEach((el) => el.classList.remove("active"));

    this.classList.add("active");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const field = document.querySelector(".stars-field");

  function createStar() {
    const star = document.createElement("span");
    star.classList.add("star");

    const size =
      Math.random() < 0.2
        ? Math.random() * 3 + 3 // estrelas grandes
        : Math.random() * 2 + 2; // estrelas normais

    const duration = Math.random() * 3 + 3;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${duration}s`;

    field.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, duration * 1000);
  }

  setInterval(createStar, 120);
});
