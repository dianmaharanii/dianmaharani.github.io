// Smooth scroll
function scrollToSection(sectionId) {
    document.getElementById(sectionId)
        .scrollIntoView({ behavior: "smooth" });
}

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});
