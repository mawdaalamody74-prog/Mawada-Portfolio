/* =========================================================
   مودة العمودي — Mawda Alamody
   main.js : المشاريع + الترجمة + الوضع الداكن + التنقل
   ========================================================= */

/* ---------------------------------------------------------
   1) المشاريع
   ---------------------------------------------------------
   لإضافة مشروع جديد مستقبلاً: انسخ كائنًا واحدًا، عدّل بياناته،
   وضع صورته داخل assets/images/ — لا حاجة لتعديل أي كود آخر.
   الحقول: titleArabic / titleEnglish / type{ar,en} /
           description{ar,en} / role{ar,en} / skills[] /
           status / image / imageMode / url / alt{ar,en}
   imageMode: "cover" (الافتراضي) أو "contain" (للصور المربعة/SVG)

   الصور: اكتب مسار الغلاف في حقل image مثل:
          image: "assets/images/project-cover.webp"
   إذا كان الحقل فارغًا (image: "") تُعرض خانة غلاف بلون المظهر
   الحالي تحمل اسم المشروع الإنجليزي، ولا ينكسر التصميم —
   وتكفي إضافة المسار لاحقًا لإظهار الصورة مكانها.
   إذا تعذّر تحميل الصورة (مسار خاطئ) تعود الخانة تلقائيًا.
--------------------------------------------------------- */

const PROJECTS = [
  {
    titleArabic: "أثر",
    titleEnglish: "Athar",
    type: { ar: "مشروع تدريبي", en: "Training Project" },
    description: {
      ar: "أرشيف رقمي للصور والقصص المرتبطة بالذكريات والأماكن المحلية، مع تنظيم المحتوى بطريقة تجعل استكشاف القصص والأماكن أكثر سهولة.",
      en: "A digital archive of photos and stories tied to memories and local places, organized so that exploring stories and places becomes effortless.",
    },
    role: {
      ar: "تصميم وتطوير الواجهة وتجربة المستخدم",
      en: "Front-end & UX design and development",
    },
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "RTL/LTR", "LocalStorage", "UI/UX"],
    status: { ar: "مكتمل", en: "Completed" },
    image: "assets/images/athar-cover.webp",
    imageMode: "cover",
    url: "https://ather-archive.thar.workers.dev/",
    alt: {
      ar: "غلاف مشروع أثر — أرشيف رقمي للذكريات",
      en: "Athar project cover — a digital archive of memories",
    },
  },
  {
    titleArabic: "موج",
    titleEnglish: "Mawj",
    type: { ar: "مشروع تدريبي", en: "Training Project" },
    description: {
      ar: "واجهة موقع لتجارب بحرية تشمل الرحلات بالقارب والغوص والسنوركلينج وتجارب الغروب، مع تجربة حجز تفاعلية من الواجهة الأمامية.",
      en: "A website for sea experiences — boat trips, diving, snorkeling and sunset tours — with an interactive front-end booking flow.",
    },
    role: {
      ar: "تصميم وتطوير الموقع وتجربة الحجز",
      en: "Site design, development & booking experience",
    },
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Filtering", "Booking UI", "RTL/LTR"],
    status: { ar: "مكتمل", en: "Completed" },
    image: "assets/images/mawj-cover.webp",
    imageMode: "cover",
    url: "https://mawj-experiences.pages.dev/",
    alt: {
      ar: "غلاف مشروع موج — تجارب بحرية ورحلات قوارب",
      en: "Mawj project cover — sea experiences and boat trips",
    },
  },
  {
    titleArabic: "نقطة",
    titleEnglish: "Nuqta",
    type: { ar: "مشروع تدريبي", en: "Training Project" },
    description: {
      ar: "واجهة متجر إلكتروني للقرطاسية مع المنتجات والبحث والتصفية والترتيب وصفحات المنتجات وسلة مشتريات تفاعلية.",
      en: "An e-commerce front-end for stationery, with products, search, filtering, sorting, product pages and an interactive cart.",
    },
    role: {
      ar: "تصميم وتطوير تجربة المتجر",
      en: "Store experience design & development",
    },
    skills: ["HTML5", "CSS3", "JavaScript", "E-commerce UI", "LocalStorage", "Search & Filter", "Responsive Design"],
    status: { ar: "مكتمل", en: "Completed" },
    image: "assets/images/nuqta-cover.svg",
    imageMode: "contain",
    url: "https://nuqta-stationery.thar.workers.dev/",
    alt: {
      ar: "غلاف مشروع نقطة — متجر قرطاسية إلكتروني",
      en: "Nuqta project cover — an online stationery store",
    },
  },
  {
    titleArabic: "استوديو ضوء",
    titleEnglish: "DOW Studio",
    type: { ar: "مشروع أكاديمي", en: "Academic Project" },
    description: {
      ar: "موقع ويب لاستوديو إبداعي، يركز على تقديم الهوية والخدمات والأعمال بطريقة بصرية منظمة وأنيقة.",
      en: "A website for a creative studio, focused on presenting identity, services and work in a clear, elegant visual way.",
    },
    role: {
      ar: "التصميم والتطوير",
      en: "Design & development",
    },
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Development", "Deployment"],
    status: { ar: "مكتمل", en: "Completed" },
    image: "assets/images/dow-studio-cover.webp",
    imageMode: "cover",
    url: "https://winter-dust-8f06.thar.workers.dev/",
    alt: {
      ar: "غلاف مشروع استوديو ضوء — موقع استوديو إبداعي",
      en: "DOW Studio project cover — a creative studio website",
    },
  },
  {
    titleArabic: "ميمو بيوتي",
    titleEnglish: "Memo Beauty",
    type: { ar: "مشروع تدريبي / تطبيق عملي", en: "Training Project / Practical App" },
    description: {
      ar: "متجر إلكتروني تجريبي لمنتجات الجمال، يركز على تنظيم المنتجات وتجربة المستخدم وتصميم واجهة متجر واضحة وسهلة الاستخدام.",
      en: "A sample e-commerce store for beauty products, focused on organizing products, user experience and a clear, easy-to-use store interface.",
    },
    role: {
      ar: "التصميم والتطوير",
      en: "Design & development",
    },
    skills: ["HTML", "CSS", "JavaScript", "E-commerce UI", "Responsive Design", "Web Development"],
    status: { ar: "مكتمل", en: "Completed" },
    image: "assets/images/memo-beauty-cover.webp",
    imageMode: "cover",
    url: "https://mtjr-jml-aarby--mawdaalamody74.replit.app/",
    alt: {
      ar: "غلاف مشروع ميمو بيوتي — متجر منتجات جمال",
      en: "Memo Beauty project cover — a beauty products store",
    },
  },
  {
    titleArabic: "موقع سيرة ذاتية",
    titleEnglish: "Personal CV Website",
    type: { ar: "مشروع أكاديمي / عملي", en: "Academic / Practical Project" },
    description: {
      ar: "موقع سيرة ذاتية شخصي تم تصميمه وتطويره لعرض المعلومات المهنية والتعليمية بطريقة منظمة ومتجاوبة.",
      en: "A personal CV website designed and developed to present professional and education information in an organized, responsive way.",
    },
    role: {
      ar: "التصميم والتطوير",
      en: "Design & development",
    },
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Development", "Deployment"],
    status: { ar: "مكتمل", en: "Completed" },
    image: "assets/images/marya-cv-cover.webp",
    imageMode: "cover",
    url: "https://marya-alamoudi-cv.netlify.app/",
    alt: {
      ar: "غلاف مشروع موقع سيرة ذاتية — واجهة سيرة ذاتية متجاوبة",
      en: "Personal CV Website project cover — a responsive CV interface",
    },
  },
  {
    titleArabic: "موقعي الشخصي للسيرة الذاتية",
    titleEnglish: "Mawda CV Website",
    type: { ar: "مشروع شخصي", en: "Personal Project" },
    description: {
      ar: "موقع شخصي يعرض السيرة الذاتية ونبذة والمهارات والتعليم والمشاريع المختارة، بواجهة متجاوبة تدعم العربية والإنجليزية.",
      en: "A personal website presenting the CV, about, skills, education and selected projects, with a responsive interface supporting Arabic and English.",
    },
    role: {
      ar: "التصميم والتطوير",
      en: "Design & development",
    },
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "RTL/LTR", "Deployment"],
    status: { ar: "مكتمل", en: "Completed" },
    image: "assets/images/mawada-cv-cover.webp",
    imageMode: "cover",
    url: "https://mawada-cv.thar.workers.dev/",
    alt: {
      ar: "غلاف موقعي الشخصي للسيرة الذاتية — سيرة ذاتية ومهارات ومشاريع مختارة",
      en: "My CV website cover — CV, skills and selected projects",
    },
  },
];

/* ---------------------------------------------------------
   2) نصوص الواجهة (عربي / إنجليزي)
--------------------------------------------------------- */

const I18N = {
  ar: {
    dir: "rtl",
    lang: "ar",
    docTitle: "مودة العمودي | Mawda Alamody — معرض أعمال",
    skip: "تخطَّ إلى المحتوى",
    brandName: "مودة العمودي",
    navAria: "التنقل الرئيسي",
    navHome: "الرئيسية",
    navWork: "أعمالي",
    navContact: "تواصل",
    heroOverline: "معرض أعمال",
    heroTitleA: "أصنع تجارب رقمية تجمع بين",
    heroTitleB: "الذكاء الاصطناعي، البيانات، وتصميم الويب.",
    heroLead: "فيما يلي مجموعة مختارة من مشاريع العملية التي أنجزتها فعليًا.",
    heroCtaWork: "تصفّح أعمالي",
    heroCtaContact: "تواصل معي",
    workOverline: "Selected Work",
    workTitle: "أعمالي",
    workLead: "مشاريع تدريبية حقيقية، من الفكرة والتصميم حتى الواجهة النهائية.",
    contactOverline: "Get in touch",
    contactTitle: "تواصل معي",
    contactLead: "إذا كان لديك مشروع أو فرصة مناسبة، يسعدني التواصل.",
    contactWhatsapp: "واتساب",
    contactEmail: "البريد الإلكتروني",
    contactLinkedin: "لينكدإن",
    footerName: "مودة العمودي",
    footerNote: "معرض أعمال شخصي",
    uiRole: "دوري في المشروع",
    uiVisit: "زيارة المشروع ↗",
    themeLightLabel: "تفعيل الوضع الداكن",
    themeDarkLabel: "تفعيل الوضع الفاتح",
    langLabel: "Switch to English",
    menuOpen: "فتح القائمة",
    menuClose: "إغلاق القائمة",
  },
  en: {
    dir: "ltr",
    lang: "en",
    docTitle: "Mawda Alamody — Portfolio",
    skip: "Skip to content",
    brandName: "Mawda Alamody",
    navAria: "Main navigation",
    navHome: "Home",
    navWork: "Work",
    navContact: "Contact",
    heroOverline: "Portfolio",
    heroTitleA: "I craft digital experiences that bring together",
    heroTitleB: "AI, data, and web design.",
    heroLead: "Below is a curated selection of practical projects I have actually built.",
    heroCtaWork: "Explore my work",
    heroCtaContact: "Get in touch",
    workOverline: "Selected Work",
    workTitle: "My Work",
    workLead: "Real training projects — from idea and design through to the final interface.",
    contactOverline: "Get in touch",
    contactTitle: "Get in touch",
    contactLead: "If you have a project or a suitable opportunity, I’d be glad to connect.",
    contactWhatsapp: "WhatsApp",
    contactEmail: "Email",
    contactLinkedin: "LinkedIn",
    footerName: "Mawda Alamody",
    footerNote: "Personal portfolio",
    uiRole: "My role",
    uiVisit: "Visit project ↗",
    themeLightLabel: "Switch to dark mode",
    themeDarkLabel: "Switch to light mode",
    langLabel: "التبديل إلى العربية",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
};

/* ---------------------------------------------------------
   3) أدوات مساعدة
--------------------------------------------------------- */

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const store = {
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      /* تجاهل */
    }
  },
};

const KEY_LANG = "mawada-lang";
const KEY_THEME = "mawada-theme";

let currentLang = store.get(KEY_LANG) === "en" ? "en" : "ar";

/* ---------------------------------------------------------
   4) بناء بطاقات المشاريع
--------------------------------------------------------- */

// خانة الغلاف المؤقتة — بنفس أبعاد صورة المشروع (16/10)
// وبنظام الألوان الحالي، وتختفي تلقائيًا بمجرد إضافة مسار الصورة.
function projectPlaceholder(project) {
  const wrap = document.createElement("span");
  wrap.className = "project__placeholder";
  wrap.setAttribute("aria-hidden", "true");

  const mark = document.createElement("span");
  mark.className = "project__placeholder-mark";
  mark.textContent = project.titleEnglish;

  const line = document.createElement("span");
  line.className = "project__placeholder-line";

  wrap.append(mark, line);
  return wrap;
}

function projectCard(project, lang) {
  const article = document.createElement("article");
  article.className = "project";

  const isContain = project.imageMode === "contain";
  const title = lang === "en" ? project.titleEnglish : project.titleArabic;
  const titleSecond = lang === "en" ? project.titleArabic : project.titleEnglish;

  const media = document.createElement("a");
  media.className = "project__media" + (isContain ? " project__media--contain" : "");
  media.href = project.url;
  media.target = "_blank";
  media.rel = "noopener noreferrer";
  media.setAttribute("aria-label", `${project.alt[lang]} — ${project.url}`);

  // الخانة البديلة: تُستخدم عند غياب حقل image أو عند فشل تحميل الصورة،
  // فتبقى بطاقة المشروع بنفس المقاس دون كسر التصميم.
  const usePlaceholder = () => {
    if (media.classList.contains("project__media--placeholder")) return;
    media.classList.add("project__media--placeholder");
    const img = media.querySelector("img");
    if (img) img.remove();
    media.appendChild(projectPlaceholder(project));
  };

  if (project.image) {
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.alt[lang];
    img.loading = "lazy";
    img.decoding = "async";
    img.addEventListener("error", usePlaceholder, { once: true });
    media.appendChild(img);
  } else {
    usePlaceholder();
  }

  const body = document.createElement("div");
  body.className = "project__body";

  const meta = document.createElement("div");
  meta.className = "project__meta";
  meta.innerHTML =
    `<span class="project__type"></span><span class="badge"></span>`;
  $(".project__type", meta).textContent = project.type[lang];
  $(".badge", meta).textContent = project.status[lang];

  const heading = document.createElement("h3");
  heading.className = "project__title";
  heading.innerHTML = `<span class="project__title-main"></span><span class="project__title-en"></span>`;
  $(".project__title-main", heading).textContent = title;
  $(".project__title-en", heading).textContent = titleSecond;

  const desc = document.createElement("p");
  desc.className = "project__desc";
  desc.textContent = project.description[lang];

  const role = document.createElement("p");
  role.className = "project__role";
  role.innerHTML = `<span class="label"></span><span class="role-value"></span>`;
  $(".label", role).textContent = I18N[lang].uiRole;
  $(".role-value", role).textContent = project.role[lang];

  const tags = document.createElement("ul");
  tags.className = "tags";
  tags.setAttribute("aria-label", lang === "en" ? "Technologies" : "التقنيات");
  project.skills.forEach((skill) => {
    const li = document.createElement("li");
    li.className = "tag";
    li.textContent = skill;
    tags.appendChild(li);
  });

  const cta = document.createElement("a");
  cta.className = "btn btn--primary project__cta";
  cta.href = project.url;
  cta.target = "_blank";
  cta.rel = "noopener noreferrer";
  cta.textContent = I18N[lang].uiVisit;

  body.append(meta, heading, desc, role, tags, cta);
  article.append(media, body);

  return article;
}

function renderProjects() {
  const host = $("#projects");
  if (!host) return;
  host.replaceChildren(...PROJECTS.map((project) => projectCard(project, currentLang)));
}

/* ---------------------------------------------------------
   5) اللغة (عربي / إنجليزي) + RTL / LTR
--------------------------------------------------------- */

function applyLanguage(lang) {
  currentLang = lang === "en" ? "en" : "ar";
  const t = I18N[currentLang];

  const html = document.documentElement;
  html.setAttribute("lang", t.lang);
  html.setAttribute("dir", t.dir);
  document.title = t.docTitle;

  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

  $$("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (t[key]) el.setAttribute("aria-label", t[key]);
  });

  const langBtn = $("#langBtn");
  if (langBtn) {
    langBtn.textContent = currentLang === "ar" ? "EN" : "ع";
    langBtn.setAttribute("aria-label", t.langLabel);
  }

  const menuBtn = $("#menuBtn");
  if (menuBtn) {
    const nav = $("#nav");
    const open = nav && nav.classList.contains("is-open");
    menuBtn.setAttribute("aria-label", open ? t.menuClose : t.menuOpen);
  }

  syncThemeButton();
  renderProjects();
}

function toggleLanguage() {
  const next = currentLang === "ar" ? "en" : "ar";
  store.set(KEY_LANG, next);
  applyLanguage(next);
}

/* ---------------------------------------------------------
   6) الوضع الداكن / الفاتح
--------------------------------------------------------- */

function applyTheme(theme) {
  const value = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", value);

  const meta = $("#metaTheme");
  if (meta) meta.setAttribute("content", value === "dark" ? "#1d2116" : "#f7f4ec");

  syncThemeButton();
}

function syncThemeButton() {
  const btn = $("#themeBtn");
  if (!btn) return;
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const t = I18N[currentLang];
  btn.setAttribute("aria-pressed", String(isDark));
  btn.setAttribute("aria-label", isDark ? t.themeDarkLabel : t.themeLightLabel);
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const next = isDark ? "light" : "dark";
  store.set(KEY_THEME, next);
  applyTheme(next);
}

/* ---------------------------------------------------------
   7) القائمة على الجوال + الهيدر + ظهور العناصر
--------------------------------------------------------- */

function initMenu() {
  const btn = $("#menuBtn");
  const nav = $("#nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? I18N[currentLang].menuClose : I18N[currentLang].menuOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      nav.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", I18N[currentLang].menuOpen);
    }
  });
}

function initHeaderScroll() {
  const header = $("#header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------------------------------------------------------
   8) الإقلاع
--------------------------------------------------------- */

function init() {
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  applyTheme(store.get(KEY_THEME) === "dark" ? "dark" : "light");
  applyLanguage(currentLang);

  const langBtn = $("#langBtn");
  if (langBtn) langBtn.addEventListener("click", toggleLanguage);

  const themeBtn = $("#themeBtn");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  initMenu();
  initHeaderScroll();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
