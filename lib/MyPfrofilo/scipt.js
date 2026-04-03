const select = document.getElementById("theme-select");
const body = document.body;

// load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
    select.value = savedTheme;
} else {
    body.classList.add("light");
}

// change theme
select.addEventListener("change", function () {
    body.classList.remove("light", "dark");
    body.classList.add(this.value);
    localStorage.setItem("theme", this.value);
});