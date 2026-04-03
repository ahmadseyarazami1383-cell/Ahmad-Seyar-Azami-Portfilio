// Typed.js initialization
var typed = new Typed('#typed', {
  strings: [
    "Full Stack Developer!",
    "With 2+ years of experience",
    "Over 20 completed projects"
  ],
  typeSpeed: 40,
  backSpeed: 25,
  backDelay: 1800,
  loop: true
});

// Theme toggle
const select = document.getElementById("theme-select");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  select.value = savedTheme;
} else {
  body.classList.add("light");
}

// Change theme
select.addEventListener("change", function () {
  body.classList.remove("light", "dark");
  body.classList.add(this.value);
  localStorage.setItem("theme", this.value);
});

