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
    subtitle: "La paz de sentirse verdaderamente complementados",
    description:
      "Confíar en ti me da una tranquilidad total. La oportunidad de poder ser yo, hablar con honestidad y sentirme escuchado sin miedo a ser juzgado. Nuestra relacion se sostiene en esa transparencia que cuida, en la palabra que se cumple y en la calma de saber que caminamos con verdad. Cuando la confianza esta presente, todo se vuelve mas ligero, mas sano y mas fuerte.",
    image:
      "assets/grani.jpeg",
  },
  support: {
    title: "Apoyo Mutuo",
    subtitle: "Un nosotros que se impulsa con amor y respeto",
    description:
      "Hemos aprendido que amar tambien es sostener al otro cuando el día pesa y celebrar con alegría cuando algo sale bien. Tu apoyo me recuerda que no tengo que enfrentar todo en soledad, y espero que siempre sientas lo mismo a mi lado. En cada etapa, nos motivamos a crecer, a intentar de nuevo y a creer en nuestras capacidades. Eso nos convierte en un verdadero equipo.",
    image: 
      "assets/777.jpeg",
  },
  "quality-time": {
    title: "Tiempo de Calidad",
    subtitle: "Momentos simples que terminan siendo inolvidables",
    description:
      "Entre tantas responsabilidades, descubrí que lo más valioso muchas veces esta en lo sencillo. Una salida tranquila, una conversación profunda, una risa compartida en cualquier lugar. Esos momentos sencillos tienen una fuerza enorme, porque ahí construimos recuerdos reales y cercanos. Nuestro tiempo juntos no siempre necesita planes grandes. Lo que necesita es presencia, atencion y ganas de estar.",
    image:
      "assets/helado.jpeg",
  },
  respect: {
    title: "Respeto",
    subtitle: "La forma mas bonita de cuidar lo que amamos",
    description:
      "Te admiro por quien eres, por tu esencia y por la manera en que enfrentas la vida. El respeto entre nosotros se refleja en escuchar de verdad, en cuidar las palabras y en darle valor a lo que cada uno siente. Amar con respeto es reconocer al otro con dignidad, incluso cuando pensamos distinto. Esa admiracion recíproca es una de nuestras fortalezas mas hermosas.",
    image:
      "assets/steak house.jpeg",
  },
  growth: {
    title: "Crecimiento",
    subtitle: "Madurar juntos sin perder la ternura",
    description:
      "Desde que estamos juntos, ambos hemos cambiado para bien. Más conscientes, más serenos y con metas mas claras. Nuestra relacion nos ha ensenado a aprender del proceso, a tener paciencia y a mirar el futuro con intencion. Crecer contigo no significa dejar de ser quienes somos, sino construir una mejor version de nosotros. Y eso hace que lo que viene se vea aún mas bonito.",
    image:
      "assets/Hell stars.jpeg",
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
