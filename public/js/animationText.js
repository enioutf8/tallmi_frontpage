document.addEventListener("DOMContentLoaded", () => {
  const textEls = document.querySelectorAll(".text");
  if (!textEls.length) return;

  textEls.forEach((textEl) => {
    const chars = [];

    function wrapChars(node) {
      // Nó de texto
      if (node.nodeType === Node.TEXT_NODE) {
        const fragment = document.createDocumentFragment();
        const text = node.textContent.replace(/^\s+|\s+$/g, "");

        text.split("").forEach((char) => {
          if (char === " ") {
            fragment.appendChild(document.createTextNode(" "));
          } else {
            const span = document.createElement("span");
            span.className = "char";
            span.textContent = char;
            fragment.appendChild(span);
            chars.push(span);
          }
        });

        return fragment;
      }

      // Nó de elemento (span, br, etc)
      if (node.nodeType === Node.ELEMENT_NODE) {
        const clone = node.cloneNode(false);

        node.childNodes.forEach((child) => {
          clone.appendChild(wrapChars(child));
        });

        return clone;
      }

      return node.cloneNode(true);
    }

    const originalNodes = [...textEl.childNodes];
    textEl.innerHTML = "";

    originalNodes.forEach((node) => {
      textEl.appendChild(wrapChars(node));
    });

    // animação estilo SplitText
    gsap.set(textEl, { autoAlpha: 1 });

    gsap.from(chars, {
      x: 150,
      opacity: 0,
      duration: 3,
      ease: "power4.out",
      stagger: 0.04,
      delay: 0.3,
    });
  });
});

// BANNER HOME
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".carousel-video");
  if (video) {
    video.playbackRate = 1.1; // 1.1 = levemente mais rápido | 1.3 já fica bem perceptível
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const videos = document.querySelectorAll(".carousel-video");

  function updateVideos() {
    videos.forEach((video) => {
      const item = video.closest(".carousel-item");

      if (item.classList.contains("active")) {
        video.currentTime = 0;
        video.playbackRate = 1.2; // opcional
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }

  // roda ao carregar
  updateVideos();

  // roda sempre que o slide muda (Bootstrap)
  carousel.addEventListener("slid.bs.carousel", updateVideos);
});

document.addEventListener("DOMContentLoaded", () => {
  new Typed("#typed", {
    strings: ["SITES <br><span class='sub-h1'>QUE VENDEM</span>"],
    typeSpeed: 100,
    showCursor: true,
    cursorChar: "", // 👈 remove o |
    contentType: "html",
  });
});
