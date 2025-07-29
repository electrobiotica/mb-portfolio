const apps = [
  {
    nombre: "Terapeuta-AI",
    desc: "Asistente psicológico configurable por enfoque terapéutico.",
    link: "https://terapeuta-ai.onrender.com",
    img: "images/tuterapiaai-c.webp",
    categoria: "appdev"
  },
  {
    nombre: "Te Lo Resumo AI Nomás",
    desc: "App para resumir automáticamente texto, artículos o links.",
    link: "https://teloresumoainomas.onrender.com",
    img: "images/teloresumo-c.webp",
    categoria: "appdev"
  },
  {
    nombre: "News Analyzer AI",
    desc: "Análisis de sesgo político y contenido en medios digitales.",
    link: "https://news-analyzer-ai.onrender.com",
    img: "images/newsanalyzerai-c.webp",
    categoria: "appdev"
  },
  {
    nombre: "MultiContratos",
    desc: "Analizador legal para contratos de alquiler, trabajo, música, etc.",
    link: "https://multicontratos.onrender.com",
    img: "images/multicontratos-c.webp",
    categoria: "appdev"
  },
  {
    nombre: "Lyric Explainer AI",
    desc: "Analiza letras de canciones y ofrece interpretación con IA.",
    link: "https://lyricexplainerai.onrender.com",
    img: "images/lyric-c.webp",
    categoria: "musica"
  },
  {
    nombre: "Examnia",
    desc: "Generador de exámenes en PDF y DOCX a partir de temas o textos.",
    link: "https://examnia.onrender.com",
    img: "images/examgen-c.webp",
    categoria: "appdev"
  },
  {
    nombre: "DR.AI Argentina",
    desc: "Agente médico experimental con análisis sintomático local.",
    link: "https://dr-ai-ar.onrender.com",
    img: "images/drai-c.webp",
    categoria: "appdev"
  },
  {
    nombre: "INpulsa Fest",
    desc: "Sitio oficial de organización y multimedia del evento.",
    link: "#",
    img: "images/inpulsa.jpg",
    categoria: "inpulsa"
  }
];

const lang = {
  es: {
    title: "marianobiotico + DevApps",
    subtitle: "Aplicaciones desarrolladas con IA, web y backend",
    see_more: "Ver más",
    about_title: "🧑‍💻 Sobre mí",
    about_intro: "Mariano Biotico – Desarrollador Full Stack especializado en Inteligencia Artificial aplicada. Combino código, datos y visión crítica para crear herramientas útiles, éticas y elegantes.",
    about_focus: "Me enfoco en aplicaciones web con IA para educación, salud, análisis legal y terapias conversacionales. Desarrollo con Flask, GPT-4o, Puter.js, Tailwind y exportación a PDF/DOCX.",
    about_values: "Trabajo con énfasis en privacidad, accesibilidad y diseño minimalista orientado al bienestar social y el pensamiento crítico.",
    coffee: "💖 ¿Te gustan estas apps?"
  },
  en: {
    title: "marianobiotico + DevApps",
    subtitle: "Apps built with AI, web and backend",
    see_more: "See more",
    about_title: "🧑‍💻 About me",
    about_intro: "Mariano Biotico – Full Stack Developer specialized in Applied AI. I combine code, data and critical thinking to create useful, ethical and elegant tools.",
    about_focus: "I focus on web applications with AI for education, health, legal analysis and therapeutic support. Built with Flask, GPT-4o, Puter.js, Tailwind and PDF/DOCX export.",
    about_values: "I work with a focus on privacy, accessibility and minimal design oriented toward social wellbeing and critical thinking.",
    coffee: "💖 Do you like these apps?"
  }
};

let currentLang = 'es';

function setLanguage(langCode) {
  const dict = lang[langCode];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerText = dict[key];
  });
}

// Función para renderizar apps filtradas
function renderApps(categoria) {
  const grid = document.getElementById("app-grid");
  grid.innerHTML = "";

  const filtradas = categoria === "all"
    ? apps
    : apps.filter(app => app.categoria === categoria);

  filtradas.forEach(app => {
    const item = document.createElement("div");
    item.className = "app-item";
    item.innerHTML = `
      <img src="${app.img}" alt="${app.nombre}">
      <div class="description" onclick="location.href='${app.link}'">
        <strong>${app.nombre}</strong><br>
        ${app.desc}
        <a href="${app.link}" target="_blank" data-i18n="see_more">Ver más</a>
      </div>
    `;
    grid.appendChild(item);
  });

  setLanguage(currentLang); // Actualiza traducciones si cambiaste idioma
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
  renderApps("all");

  document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    document.getElementById('langToggle').innerText = currentLang.toUpperCase() === 'ES' ? 'EN' : 'ES';
    setLanguage(currentLang);
  });

  document.querySelectorAll('.categoria-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const categoria = link.getAttribute('data-category');

      // cambia clase activa
      document.querySelectorAll('.categoria-link').forEach(el => el.classList.remove('active'));
      link.classList.add('active');

      renderApps(categoria);
    });
  });
});
