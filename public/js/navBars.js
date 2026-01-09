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

    const size = Math.random() * 3 + 2;
    const duration = Math.random() * 2.5 + 2.5;

    const dx = (Math.random() - 0.5) * 30; // -15px a 15px
    const dy = (Math.random() - 0.5) * 30;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${duration}s`;
    star.style.setProperty("--dx", `${dx}px`);
    star.style.setProperty("--dy", `${dy}px`);

    field.appendChild(star);

    setTimeout(() => star.remove(), duration * 1000);
  }

  setInterval(createStar, 120);
});
