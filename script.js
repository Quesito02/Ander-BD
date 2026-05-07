const views = document.querySelectorAll("[data-view]");
const routeButtons = document.querySelectorAll("[data-route]");
const detailButtons = document.querySelectorAll("[data-detail]");
const navButtons = document.querySelectorAll(".nav-link");

const detailImage = document.getElementById("detail-image");
const detailTitle = document.getElementById("detail-title");
const detailSubtitle = document.getElementById("detail-subtitle");
const detailDescription = document.getElementById("detail-description");

const detailsData = {
  trust: {
    title: "Confianza",
    subtitle: "La paz de sentirse verdaderamente acompanado",
    description:
      "Confiar en ti me da una tranquilidad dificil de explicar: la certeza de poder ser yo, hablar con honestidad y sentirme escuchado sin miedo a ser juzgado. Nuestra relacion se sostiene en esa transparencia que cuida, en la palabra que se cumple y en la calma de saber que caminamos con verdad. Cuando la confianza esta presente, todo se vuelve mas ligero, mas sano y mas fuerte.",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80",
  },
  support: {
    title: "Apoyo Mutuo",
    subtitle: "Un equipo que se impulsa con amor y respeto",
    description:
      "Hemos aprendido que amar tambien es sostener al otro cuando el dia pesa y celebrar con alegria cuando algo sale bien. Tu apoyo me recuerda que no tengo que enfrentar todo en soledad, y espero que siempre sientas lo mismo a mi lado. En cada etapa, nos motivamos a crecer, a intentar de nuevo y a creer en nuestras capacidades. Eso nos convierte en un verdadero equipo.",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
  },
  "quality-time": {
    title: "Tiempo de Calidad",
    subtitle: "Momentos simples que terminan siendo inolvidables",
    description:
      "Entre tantas responsabilidades, descubri que lo mas valioso muchas veces esta en lo pequeno: una salida tranquila, una charla sin prisa, una risa compartida en cualquier esquina. Esos momentos sencillos tienen una fuerza enorme, porque ahi construimos recuerdos reales y cercanos. Nuestro tiempo juntos no siempre necesita planes grandes; necesita presencia, atencion y ganas de estar.",
    image:
      "https://images.unsplash.com/photo-1529336953121-a0ce13a5f2f3?auto=format&fit=crop&w=1200&q=80",
  },
  respect: {
    title: "Respeto",
    subtitle: "La forma mas bonita de cuidar lo que amamos",
    description:
      "Te admiro por quien eres, por tu esencia y por la manera en que enfrentas la vida. El respeto entre nosotros se refleja en escuchar de verdad, en cuidar las palabras y en darle valor a lo que cada uno siente. Amar con respeto es reconocer al otro con dignidad, incluso cuando pensamos distinto. Esa admiracion mutua es una de nuestras fortalezas mas elegantes.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
  },
  growth: {
    title: "Crecimiento",
    subtitle: "Madurar juntos sin perder la ternura",
    description:
      "Desde que estamos juntos, ambos hemos cambiado para bien: mas conscientes, mas serenos y con metas mas claras. Nuestra relacion nos ha ensenado a aprender del proceso, a tener paciencia y a mirar el futuro con intencion. Crecer contigo no significa dejar de ser quienes somos, sino construir una mejor version de nosotros. Y eso hace que lo que viene se vea aun mas bonito.",
    image:
      "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=1200&q=80",
  },
};

function updateActiveNav(viewName) {
  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.route === viewName);
  });
}

function showView(viewName) {
  views.forEach((view) => {
    const isCurrent = view.dataset.view === viewName;
    view.classList.toggle("active", isCurrent);
  });
  updateActiveNav(viewName);
  window.scrollTo({ top: 0, behavior: "smooth" });
  playEntranceAnimation();
}

function showDetail(detailKey) {
  const selected = detailsData[detailKey];
  if (!selected) return;

  detailTitle.textContent = selected.title;
  detailSubtitle.textContent = selected.subtitle;
  detailDescription.textContent = selected.description;
  detailImage.src = selected.image;
  detailImage.alt = `Imagen descriptiva de ${selected.title}`;
  showView("detail");
}

function playEntranceAnimation() {
  document.querySelectorAll(".animate-in, .animate-in-delayed").forEach((item) => {
    item.classList.remove("is-visible");
    requestAnimationFrame(() => {
      item.classList.add("is-visible");
    });
  });
}

routeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextView = button.dataset.route;
    if (!nextView) return;
    showView(nextView);
  });
});

detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const detailKey = button.dataset.detail;
    showDetail(detailKey);
  });
});

const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

showView("home");
