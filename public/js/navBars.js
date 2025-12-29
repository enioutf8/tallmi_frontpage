document.querySelectorAll(".navbar-nav li a").forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelectorAll(".navbar-nav li a")
      .forEach((el) => el.classList.remove("active"));

    this.classList.add("active");
  });
});
