/* ========= Portfolio Data ========= */
const SITE_DATA = {
  person: {
    name: "Mohamed Gamal Eltantawi",
    title: "Industrial Automation Engineer", // dynamic in hero + footer
    location: "Nasr City, Cairo, Egypt",
    email: "mohamedeltantawy024@gmail.com",
    phones: ["+20 101 139 2374"],
    linkedin: "https://www.linkedin.com/in/mohamed-eltantawi-426106238",
    summary:
      "Industrial Automation Engineer with hands-on experience in PLC, SCADA, and DCS across Oil & Gas, Steel, and Cement. Expertise in Siemens PCS 7, S7-1500, WinCC, Ignition, and AVEVA SCADA. Experienced in FAT, IFAT, SAT, commissioning, ICSS/SCMS, IIoT, and industrial networks.",
    highlights: [
      "Siemens PLC: S7-300, S7-400, S7-1200, S7-1500",
      "Siemens DCS: PCS 7",
      "SCADA & HMI: WinCC (Professional, WinCC Explorer, WinCC Unified), AVEVA and Ignition",
      "Industrial Communication: PROFINET, PROFIBUS, Modbus and IEC61850",
    ],
  },
  experience: [
    {
      role: "External Assignment — Automation Engineer (ICSS/SCMS)",
      company: "Siemens Energy, UAE",
      period: "Apr 2025 – Present",
      projects: [
        "Salt Dome Project (Oil & Gas): PCS 7 logic design; Hardware FAT for ICSS/SCMS; IFAT; acted as ICSS Engineer in Software FAT; SAT & commissioning for SCMS; applied IEC 61850; tested MVSW/LVSW; built Data Concentrator integrating LVSW with SCMS & ICSS.",
        "Site Surveys: SHAH, HABSHAN, ASAB facilities.",
      ],
      badges: ["PCS 7", "ICSS", "SCMS", "IEC 61850", "FAT/IFAT/SAT", "Commissioning"],
    },
    {
      role: "Automation Engineer",
      company: "Imhosys",
      period: "Sep 2024 – Present",
      projects: [
        "Sinai Cement Grey Plant (Egypt): Upgrade from Allen‑Bradley to PCS 7 using CEMAT Minerals.",
        "Zinc Oxide Plant – EAFD Recycling (Egypt): S7–1500 PLC; WinCC V8.0; FAT/IFAT/SAT; commissioning & validation.",
        "Sococim Cement Plant (Senegal): SAT & commissioning support; S7–1500; AVEVA SCADA design & implementation.",
      ],
      badges: ["PCS 7", "S7–1500", "WinCC", "AVEVA", "CEMENT Industry", "STEEL Industry"],
    },
  ],
  projects: [
    {
      title: "Salt Dome — Oil & Gas ICSS/SCMS",
      org: "Siemens Energy (UAE)",
      year: "2025–Present",
      summary:
        "Designed PCS 7 logic; led ICSS roles in FAT/SFAT; implemented IEC 61850; integrated MV/LV switchgear; built Data Concentrator for SCMS↔ICSS.",
      stack: ["PCS 7", "IEC 61850", "SCMS", "ICSS", "MVSW/LVSW"],
      tags: ["Oil & Gas"],
    },
    {
      title: "Sinai Cement — PCS 7 Upgrade",
      org: "Imhosys (Egypt)",
      year: "2024–Present",
      summary:
        "Migrated AB PLCs to PCS 7 with CEMAT; engineered WinCC; configured S7–400/ET200SP; supported network and material selection.",
      stack: ["PCS 7", "CEMAT", "WinCC", "S7–400", "ET200SP"],
      tags: ["Cement"],
    },
    {
      title: "Zinc Oxide (EAFD Recycling)",
      org: "Imhosys (Egypt)",
      year: "2024–2025",
      summary:
        "Engineered S7–1500 PLC & WinCC V8.0; FAT/IFAT/SAT; commissioning and validation on site.",
      stack: ["S7–1500", "WinCC V8.0", "FAT/IFAT/SAT"],
      tags: ["Recycling", "Manufacturing"],
    },
    {
      title: "Sococim Cement — SAT & Commissioning",
      org: "Imhosys (Senegal)",
      year: "2024",
      summary:
        "Supported SAT & commissioning; S7–1500; SCADA via AVEVA.",
      stack: ["S7–1500", "AVEVA SCADA", "Commissioning"],
      tags: ["Cement"],
    },
    {
      title: "Automation of Power Distribution Grid for Smart Cities",
      org: "Mansoura University — Graduation Project",
      year: "2024",
      summary:
        "Designed residential electrical infrastructure; integrated smart devices; on‑grid solar PV; grid–solar integration; IIoT monitoring via Node‑RED; SCADA using Ignition. Grade: Excellent.",
      stack: ["Ignition SCADA", "Node‑RED", "OPC‑UA/MQTT", "Solar PV"],
      tags: ["Academic", "Smart Grid"],
    },
  ],
  education: {
    degree: "B.Sc. Electrical Engineering — Electrical Power & Machines",
    school: "Mansoura University, Faculty of Engineering",
    date: "Jun 2024",
    grade: "Very Good (82.86%)",
    project: {
      title:
        "Graduation: Automation of Power Distribution Grid for Smart Cities — Grade: Excellent",
      bullets: [
        "Designed residential electrical infrastructure (concept → detailed).",
        "Integrated smart devices to convert conventional grids into smart grids.",
        "Designed on‑grid solar PV systems for residential villas.",
        "Grid–solar integration & IIoT monitoring via Node‑RED.",
        "SCADA implementation using Ignition.",
      ],
    },
  },
  certs: [
    "ADNOC H2S Training — ATA UAE (Aug 2025)",
    "ADNOC HSE Induction — ATA UAE (Aug 2025)",
    "PLC Advanced Programming — HA Consulting (Jul–Sep 2023)",
    "Classic Control & Basic PLC — HA Consulting (Jan–Mar 2022)",
    "Port Operations & Electrical Systems — Damietta Intl Port (Sep–Oct 2022)",
    "Electricity Production — Middle Delta Power Plant (Jul–Aug 2022)",
    "Ignition SCADA — Inductive Automation University (Jul 2024)",
    "IIoT (Node‑RED, OPC‑UA, MQTT, MySQL) — Code & Compile (Nov 2023 – Feb 2024)",
    "Electrical Distribution Diploma — Online Experts (Jul–Oct 2022)",
    "Project Management Fundamentals — AmCham (Oct 2022)",
    "Schneider Electric University — 60 Electrical Engineering Courses (2024)",
  ],
  tags: ["All", "Oil & Gas", "Cement", "Recycling", "Manufacturing", "Academic", "Smart Grid"],
  cvUrl: "assets/Mohamed-Gamal-Eltantawi-CV.pdf",
};

/* ========= Helpers ========= */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/* ========= Renderers ========= */
function renderAbout() {
  $("#aboutText").textContent = SITE_DATA.person.summary;
  $("#aboutHighlights").innerHTML = SITE_DATA.person.highlights
    .map((h) => `<li>${h}</li>`)
    .join("");
}
function renderExperience() {
  const wrap = $("#experienceTimeline");
  wrap.innerHTML = SITE_DATA.experience
    .map(
      (exp) => `
      <article class="timeline-item">
        <div class="timeline-bullet"></div>
        <div>
          <h3>${exp.role} — ${exp.company}</h3>
          <div class="meta">${exp.period}</div>
          <ul class="list">
            ${exp.projects.map((p) => `<li>${p}</li>`).join("")}
          </ul>
          <div class="badges">
            ${exp.badges.map((b) => `<span class="badge">${b}</span>`).join("")}
          </div>
        </div>
      </article>
    `
    )
    .join("");
}
function renderProjects() {
  const filterBar = $("#caseFilters");
  filterBar.innerHTML = SITE_DATA.tags
    .map((t, i) => `<button class="filter ${i === 0 ? "active" : ""}" data-tag="${t}">${t}</button>`)
    .join("");

  const grid = $("#caseGrid");

  const paint = (tag = "All") => {
    const items =
      tag === "All" ? SITE_DATA.projects : SITE_DATA.projects.filter((c) => c.tags.includes(tag));
    grid.innerHTML = items
      .map(
        (c) => `
        <article class="card">
          <h3>${c.title}</h3>
          <div class="meta">${c.org} · ${c.year}</div>
          <p>${c.summary}</p>
          <div class="stack">
            ${c.stack.map((s) => `<span class="chip">${s}</span>`).join("")}
          </div>
        </article>
      `
      )
      .join("");
  };

  paint();

  filterBar.addEventListener("click", (e) => {
    const b = e.target.closest(".filter");
    if (!b) return;
    $$(".filter", filterBar).forEach((f) => f.classList.remove("active"));
    b.classList.add("active");
    paint(b.dataset.tag);
  });
}
function renderSkills() {
  $("#skillGroups").innerHTML = [
    {
      group: "Automation & Control",
      items: [
        "Siemens PLC: S7–300/400/1200/1500",
        "DCS: PCS 7",
        "SCADA/HMI: WinCC, AVEVA and Ignition",
      ],
    },
    { group: "Programming & Logic", items: ["CFC", "SCL", "FBD", "Interlocks & Protections", "Trips", "PID & Diagnostics"] },
    { group: "Electrical & Networks", items: ["MCCs, Soft Starters, VFDs", "PROFINET", "PROFIBUS", "Modbus", "IEC 61850"] },
    { group: "IIoT & Platforms", items: ["Ignition", "InduSoft", "AVEVA", "OPC‑UA", "MQTT", "Node‑RED", "MySQL"] },
    { group: "Tools", items: ["TIA Portal", "SIMATIC Manager", "PCS 7", "ICDL Office"] },
    { group: "Soft Skills", items: ["Analytical", "Teamwork", "Under pressure", "Ethical & reliable", "Continuous learner"] },
  ]
    .map(
      (g) => `
      <div class="skill">
        <h3>${g.group}</h3>
        <div class="tags">
          ${g.items.map((i) => `<span class="tag">${i}</span>`).join("")}
        </div>
      </div>
    `
    )
    .join("");
}
function renderEducation() {
  const e = SITE_DATA.education;
  const wrap = $("#educationContent");
  if (!e || !wrap) return;
  wrap.innerHTML = `
    <article class="card">
      <h3>${e.degree}</h3>
      <div class="meta">${e.school} · ${e.date} · Grade: ${e.grade}</div>
      <h4>${e.project.title}</h4>
      <ul class="list">
        ${e.project.bullets.map((b) => `<li>${b}</li>`).join("")}
      </ul>
    </article>
  `;
}
function renderCerts() {
  const list = $("#certList");
  if (!list) return;
  // Now render as <li> items so each certificate is on its own line
  list.innerHTML = SITE_DATA.certs
    .map((c) => `<li>✅ ${c}</li>`)
    .join("");
}
function renderContact() {
  // Keep for CV link wiring
  const heroCV = $("#downloadCvHero");
  if (heroCV) heroCV.href = SITE_DATA.cvUrl;
}

/* ========= Behavior ========= */
function setupTheme() {
  const root = document.documentElement;
  const btn = $("#themeToggle");
  // Load saved preference
  const saved = localStorage.getItem("theme");
  if (saved === "light") root.setAttribute("data-theme", "light");
  const icon = () => (root.getAttribute("data-theme") === "light" ? "🌙" : "☀️");
  btn.textContent = icon();
  btn.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    if (isLight) root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", "light");
    localStorage.setItem("theme", isLight ? "dark" : "light");
    btn.textContent = icon();
  });
}
function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) menu.classList.remove("open");
    });
  }
}
/* Add subtle shadow to the sticky topbar when scrolled */
(function topbarShadow(){
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;
  const onScroll = () => {
    if (window.scrollY > 10) topbar.classList.add('scrolled');
    else topbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

function setupReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}
function setupContactForm() {
  const btn = $("#cfSend");
  const status = $("#cfStatus");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const name = $("#cfName").value.trim();
    const email = $("#cfEmail").value.trim();
    const msg = $("#cfMessage").value.trim();

    if (!name || !email || !msg) {
      status.textContent = "Please complete all fields.";
      status.style.color = "crimson";
      return;
    }

    const mailto = `mailto:${SITE_DATA.person.email}?subject=Portfolio Contact — ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(msg + "\n\nFrom: " + name + " <" + email + ">")}`;
    window.location.href = mailto;
    status.textContent = "Opening your email app…";
    status.style.color = "var(--brand-light)";
  });
}

/* ========= SEO & Dynamic Titles ========= */
function renderJSONLD() {
  const p = SITE_DATA.person;
  const json = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: p.name,
    jobTitle: p.title,
    email: `mailto:${p.email}`,
    telephone: SITE_DATA.person.phones.join(", "),
    address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
    url: window.location.href,
    sameAs: [p.linkedin],
    knowsAbout: ["PCS 7", "S7-1500", "WinCC", "ICSS", "SCMS", "IEC 61850", "FAT", "IFAT", "SAT", "Commissioning", "IIoT"],
  };
  const node = $("#jsonld");
  if (node) node.textContent = JSON.stringify(json, null, 2);
}
function renderDynamicTitles() {
  const p = SITE_DATA.person;
  const h1 = $("#heroTitle");
  const t = $("#docTitle");
  const ft = $("#footerTitle");
  if (t) t.textContent = `${p.name} — ${p.title}`;
  if (ft) ft.textContent = p.title;

  // Typed effect for hero title
  if (h1) {
    const text = p.title;
    let i = 0;
    h1.textContent = "";
    (function type() {
      if (i < text.length) {
        h1.textContent += text.charAt(i++);
        setTimeout(type, 70);
      }
    })();
  }
}

/* ========= Boot ========= */
function init() {
  renderAbout();
  renderExperience();
  renderProjects();
  renderSkills();
  renderEducation();
  renderCerts();       // now renders <li> for stacking
  renderContact();
  setupTheme();
  setupNav();
  setupReveal();
  setupContactForm();
  renderJSONLD();
  renderDynamicTitles();

  const y = $("#year");
  if (y) y.textContent = new Date().getFullYear();
}
document.addEventListener("DOMContentLoaded", init);