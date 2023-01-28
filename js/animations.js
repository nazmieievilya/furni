const menu = document.querySelector(".menu");
menu.addEventListener("click", scrollTo);

function scrollTo(e) {
  if (!e) return;
  if (!e.target.classList.contains("menu__item-link")) return;
  const element = e.target.closest(".menu__item-link");
  const attribute = element.getAttribute("href");
  document
    .querySelector(`.${attribute.slice(1)}`)
    .scrollIntoView({ behavior: "smooth", inline: "center", block: "start" });
  document.querySelector(".burger").classList.remove("active");
  document.querySelector(".menu").classList.remove("active");
  document.querySelector(".main__body").classList.remove("locked");
}

gsap.registerPlugin(ScrollTrigger);

const tlLoader = gsap.timeline();
tlLoader
  .set(".loader__title", { opacity: 0 })
  .to(".loader__title", {
    opacity: 1,
    duration: 1.5,
    scale: 1.5,
  })

  .to(".loader", {
    yPercent: -100,
    duration: 0.5,
  });

// щоб повернути лоадер підключити назад style.min.css замість звичайного css
if (window.matchMedia("(min-width: 992px)").matches) {
  /// section materials

  gsap.from(".materials_title", {
    scrollTrigger: {
      trigger: ".section_materials",
      start: "-350 top",
    },
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  });

  gsap.from(".materials_text", {
    scrollTrigger: {
      trigger: ".section_materials",
      start: "-250 top",
    },
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  });
  gsap.from(".materials_btn", {
    scrollTrigger: {
      trigger: ".section_materials",
      start: "-200 top",
    },
    y: 40,
    autoAlpha: 0,
    duration: 0.5,
  });

  // section choose
  gsap.from(".choose_title", {
    scrollTrigger: {
      trigger: ".choose_section",
      start: "-350 top",
    },
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  });

  gsap.from(".choose_text", {
    scrollTrigger: {
      trigger: ".choose_section",
      start: "-250 top",
    },
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  });
  gsap.from(".help_img-1", {
    scrollTrigger: {
      trigger: ".help_section",
      start: "-650 top",
      scrub: true,
      end: "+=300",
    },
    yPercent: 60,
    duration: 0.5,
  });

  gsap.from(".help_img-2", {
    scrollTrigger: {
      trigger: ".help_section",
      start: "-650 top",
      scrub: true,
      end: "+=300",
    },
    xPercent: -60,
    duration: 0.5,
  });

  gsap.from(".help_img-3", {
    scrollTrigger: {
      trigger: ".help_section",
      start: "-650 top",
      scrub: true,
      end: "+=250",
    },
    yPercent: 50,
    duration: 0.5,
  });

  gsap.from(".help_title", {
    scrollTrigger: {
      trigger: ".help_section",
      start: "-350 top",
    },
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  });

  gsap.from(".help_text", {
    scrollTrigger: {
      trigger: ".help_section",
      start: "-250 top",
    },
    y: 50,
    autoAlpha: 0,
    duration: 0.5,
  });

  gsap.from(".help_item_grid", {
    scrollTrigger: {
      trigger: ".help_section",
      start: "-250 top",
    },
    stagger: 0.1,
    xPercent: 20,
    autoAlpha: 0,
    duration: 0.5,
  });

  gsap.from(".product_item_chair", {
    scrollTrigger: {
      trigger: ".products_section",
      start: "-600 top",
    },
    xPercent: -20,
    stagger: 0.19,
    opacity: 0,
  });

  gsap.from(".blog_item", {
    scrollTrigger: {
      trigger: ".blog_section",
      start: "-600 top",
    },
    stagger: 0.19,
    yPercent: 20,
    opacity: 0,
  });
}

if (!window.matchMedia("(min-width: 992px)").matches) {
  gsap.from(".materials_title", {
    scrollTrigger: {
      trigger: ".section_materials",
      start: "-550 top",
    },
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  });

  gsap.from(".materials_text", {
    scrollTrigger: {
      trigger: ".section_materials",
      start: "-450 top",
    },
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  });
  gsap.from(".materials_btn", {
    scrollTrigger: {
      trigger: ".section_materials",
      start: "-400 top",
    },
    y: 40,
    autoAlpha: 0,
    duration: 0.5,
  });

  // section choose
  gsap.from(".choose_title", {
    scrollTrigger: {
      trigger: ".choose_section",
      start: "-650 top",
    },
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  });

  gsap.from(".choose_text", {
    scrollTrigger: {
      trigger: ".choose_section",
      start: "-550 top",
    },
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  });
  gsap.from(".help_img-1", {
    scrollTrigger: {
      trigger: ".help_section",
      start: "-250 top",
      scrub: true,
      end: "+=300",
    },
    yPercent: 60,
    duration: 0.5,
  });

  gsap.from(".help_img-2", {
    scrollTrigger: {
      trigger: ".help_section",
      start: "-250 top",
      scrub: true,
      end: "+=300",
    },
    xPercent: -60,
    duration: 0.5,
  });

  gsap.from(".help_img-3", {
    scrollTrigger: {
      trigger: ".help_section",
      start: "-250 top",
      scrub: true,
      end: "+=250",
    },
    yPercent: 50,
    duration: 0.5,
  });

  gsap.from(".help_title", {
    scrollTrigger: {
      trigger: ".help_section",
      start: "-650 top",
    },
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  });

  gsap.from(".help_text", {
    scrollTrigger: {
      trigger: ".help_section",
      start: "-550 top",
    },
    y: 50,
    autoAlpha: 0,
    duration: 0.5,
  });

  gsap.from(".help_item_grid", {
    scrollTrigger: {
      trigger: ".help_section",
      start: "-450 top",
    },
    stagger: 0.1,
    xPercent: 10,
    autoAlpha: 0,
    duration: 0.5,
  });

  gsap.from(".product_item_chair", {
    scrollTrigger: {
      trigger: ".products_section",
      start: "-600 top",
    },
    xPercent: -20,
    stagger: 0.19,
    opacity: 0,
  });

  gsap.from(".blog_item", {
    scrollTrigger: {
      trigger: ".blog_section",
      start: "-600 top",
    },
    stagger: 0.19,
    yPercent: 20,
    opacity: 0,
  });
}

// navigation
