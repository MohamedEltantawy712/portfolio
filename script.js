// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Typing Animation
const titles = [
  "Industrial Automation Engineer",
  "PLC & SCADA Engineer",
  "DCS / PCS 7 Specialist",
  "Oil & Gas Automation Engineer",
  "IIoT & Control Systems Engineer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {
  if (!typingElement) return;

  if (!isDeleting && charIndex < titles[index].length) {
    currentText += titles[index][charIndex++];
  } else if (isDeleting && charIndex > 0) {
    currentText = currentText.slice(0, -1);
    charIndex--;
  }

  typingElement.textContent = currentText;

  if (!isDeleting && charIndex === titles[index].length) {
    setTimeout(() => isDeleting = true, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % titles.length;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();
