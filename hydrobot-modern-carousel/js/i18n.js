
window.I18N = {
  pt: {
    nav_home: "Início",
    nav_about: "Sobre nós",
    nav_idea: "Nossa ideia",
    nav_gallery: "Galeria",
    nav_cases: "Casos de incêndio",
    nav_testimonial: "Depoimento",
    nav_contact: "Contato",
    hero_title: "Hydro Bot",
    hero_sub: "Tecnologia para salvar vidas",
    about_title: "Sobre nós",
    about_text: "Somos a equipe Hydro Bot, unindo inovação e responsabilidade para apoiar o combate a incêndios.",
    idea_title: "Nossa ideia",
    idea_text: "Um sistema inteligente para detectar, prevenir e auxiliar no combate a incêndios com eficiência.",
    gallery_title: "Galeria",
    gallery_cap1: "Prototipagem do sistema em campo",
    gallery_cap2: "Teste de sensores de temperatura",
    gallery_cap3: "Integração com equipe de resposta",
    cases_title: "Casos de incêndio",
    cases_intro: "Alguns registros de ocorrências que inspiraram nosso projeto:",
    testimonial_title: "Depoimento de um bombeiro",
    contact_title: "Entre em contato",
    contact_text: "Envie um e-mail para contato@hydrobot.com ou ligue (11) 99999-9999.",
    copyright: "© 2025 Hydro Bot. Todos os direitos reservados."
  },
  en: {
    nav_home: "Home",
    nav_about: "About us",
    nav_idea: "Our idea",
    nav_gallery: "Gallery",
    nav_cases: "Fire cases",
    nav_testimonial: "Testimonial",
    nav_contact: "Contact",
    hero_title: "Hydro Bot",
    hero_sub: "Technology to save lives",
    about_title: "About us",
    about_text: "We are the Hydro Bot team, combining innovation and responsibility to support firefighting.",
    idea_title: "Our idea",
    idea_text: "An intelligent system to detect, prevent and assist in firefighting efficiently.",
    gallery_title: "Gallery",
    gallery_cap1: "System prototyping in the field",
    gallery_cap2: "Temperature sensor testing",
    gallery_cap3: "Integration with response team",
    cases_title: "Fire cases",
    cases_intro: "Some incident records that inspired our project:",
    testimonial_title: "Firefighter testimonial",
    contact_title: "Get in touch",
    contact_text: "Send an email to contato@hydrobot.com or call +55 11 99999-9999.",
    copyright: "© 2025 Hydro Bot. All rights reserved."
  },
  es: {
    nav_home: "Inicio",
    nav_about: "Sobre nosotros",
    nav_idea: "Nuestra idea",
    nav_gallery: "Galería",
    nav_cases: "Casos de incendio",
    nav_testimonial: "Testimonio",
    nav_contact: "Contacto",
    hero_title: "Hydro Bot",
    hero_sub: "Tecnología para salvar vidas",
    about_title: "Sobre nosotros",
    about_text: "Somos el equipo Hydro Bot, uniendo innovación y responsabilidad para apoyar la lucha contra incendios.",
    idea_title: "Nuestra idea",
    idea_text: "Un sistema inteligente para detectar, prevenir y ayudar a combatir incendios de forma eficiente.",
    gallery_title: "Galería",
    gallery_cap1: "Prototipado del sistema en campo",
    gallery_cap2: "Pruebas de sensores de temperatura",
    gallery_cap3: "Integración con equipo de respuesta",
    cases_title: "Casos de incendio",
    cases_intro: "Algunos registros de incidentes que inspiraron nuestro proyecto:",
    testimonial_title: "Testimonio de un bombero",
    contact_title: "Ponte en contacto",
    contact_text: "Envía un correo a contato@hydrobot.com o llama al +55 11 99999-9999.",
    copyright: "© 2025 Hydro Bot. Todos los derechos reservados."
  }
};

(function() {
  const setLang = (lang) => {
    const dict = window.I18N[lang] || window.I18N['pt'];
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.innerText = dict[key];
    });
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("site_lang", lang);
  };
  window.setSiteLanguage = setLang;
  document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("site_lang") || "pt";
    setLang(saved);
    document.querySelectorAll("[data-lang]").forEach(btn => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
    });
  });
})();
