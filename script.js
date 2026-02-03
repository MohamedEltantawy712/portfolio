// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Typing animation
const titles = [
  "Industrial Automation Engineer",
  "PLC & SCADA Engineer",
  "DCS / PCS 7 Specialist",
  "Oil & Gas Automation Engineer",
  "IIoT & Control Systems Engineer"
];

let index = 0;
let char = 0;
let deleting = false;
const el = document.querySelector(".typing");

function type() {
  if (!el) return;

  el.textContent = titles[index].substring(0, char);

  if (!deleting) {
    char++;
    if (char === titles[index].length) {
      deleting = true;
      setTimeout(() => {}, 1200);
    }
  } else {
    char--;
    if (char === 0) {
      deleting = false;
      index = (index + 1) % titles.length;
    }
  }

  setTimeout(type, deleting ? 60 : 100);
}

type();
