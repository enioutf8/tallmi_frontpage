document.addEventListener("DOMContentLoaded", () => {
  const areaChat = document.querySelector(".area-btn-chat");
  const btnChat = document.querySelector(".btn-chat");
  const btnClose = document.querySelector(".btn-close");
  const btnMinimize = document.querySelector(".btn-minimize");

  const CHAT_KEY = "chatbotOpened";

  function openChat() {
    areaChat.classList.add("area-btn-chat-active");
    
    localStorage.setItem(CHAT_KEY, "true");
  }

  function closeChat() {
    areaChat.classList.add("chat-closing");

    setTimeout(() => {
      areaChat.classList.remove("area-btn-chat-active");
      areaChat.classList.remove("chat-closing");
      btnChat.classList.add("anime-open-chat")
    }, 350); // mesmo tempo da animação
  }

  // Botão flutuante
  btnChat.addEventListener("click", openChat);

  // Fechar (X)
  btnClose.addEventListener("click", closeChat);

  // Minimizar (–)
  btnMinimize.addEventListener("click", closeChat);

  // Auto abertura
  const alreadyOpened = localStorage.getItem(CHAT_KEY);

  if (!alreadyOpened) {
    setTimeout(openChat, 1000);
  } else {
    setTimeout(openChat, 1000);
  }

  const chatTree = {
    start: {
      message: "Olá 👋 Como posso te ajudar hoje?",
      options: [
        { label: "Criar um site", next: "site" },
        { label: "Valores", next: "prices" },
        { label: "Falar com um especialista", next: "contact" },
      ],
    },

    site: {
      message: "Que tipo de site você precisa?",
      options: [
        { label: "Site institucional", next: "site_inst" },
        { label: "Landing page", next: "landing" },
        { label: "Ecommece", next: "ecommece" },
        { label: "Semi Loja", next: "semiloja" },
      ],
    },
    ecommece: {
      message: "Perfeito! Lojas virtuais são ideais para vender online 🚀",
      options: [
        { label: "Ver exemplos", next: "portfolio" },
        { label: "Solicitar orçamento", next: "contact" },
      ],
    },
    semiloja: {
      message:
        "Ótima escolha! A **Semi Loja** é ideal para apresentar produtos, validar ideias e direcionar clientes para o contato ou pagamento 💡",
      options: [
        { label: "Ver exemplos de Semi Loja", next: "portfolio" },
        { label: "Solicitar orçamento", next: "contact" },
      ],
    },

    site_inst: {
      message: "Perfeito! Sites institucionais são ideais para autoridade.",
      options: [
        { label: "Ver exemplos", next: "portfolio" },
        { label: "Solicitar orçamento", next: "contact" },
      ],
    },

    prices: {
      message: "Os valores variam conforme o projeto.",
      options: [
        { label: "Ver planos", next: "plans" },
        { label: "Falar com especialista", next: "contact" },
      ],
    },

    contact: {
      message: "Você pode falar direto com um especialista 👇",
      options: [{ label: "WhatsApp", next: "whatsapp" }],
    },

    whatsapp: {
      message: "Clique abaixo para falar no WhatsApp:",
      options: [],
    },
  };

  const messageEl = document.querySelector(".chat-message");
  const optionsEl = document.querySelector(".chat-options");

  let history = [];
  let currentNode = "start";

  function renderNode(nodeKey) {
    const node = chatTree[nodeKey];
    if (!node) return;

    messageEl.innerHTML = node.message;
    optionsEl.innerHTML = "";

    // Render opções
    node.options.forEach((option) => {
      const btn = document.createElement("button");
      btn.className = "chat-option";
      btn.textContent = option.label;
      btn.onclick = () => {
        history.push(currentNode);
        currentNode = option.next;
        renderNode(currentNode);
      };
      optionsEl.appendChild(btn);
    });

    // Botão voltar
    if (history.length > 0) {
      const backBtn = document.createElement("button");
      backBtn.className = "chat-back";
      backBtn.textContent = "← Voltar";
      backBtn.onclick = () => {
        currentNode = history.pop();
        renderNode(currentNode);
      };
      optionsEl.appendChild(backBtn);
    }
  }

  // Inicialização
  renderNode("start");
});
