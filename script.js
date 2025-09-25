const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.remove("dark-mode", "light-mode"); // clear first
  document.body.classList.add(savedTheme);
  toggleBtn.textContent = savedTheme === "dark-mode" ? "☀" : "🌙";
} else {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀";
}

toggleBtn.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light-mode");
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀";
    localStorage.setItem("theme", "dark-mode");
  }
});

// Add shadow when scrolling
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

// TEAM CARD PAGE REDIRECT
document.querySelectorAll(".team-card").forEach(card => {
  card.addEventListener("click", () => {
    const link = card.getAttribute("data-link");
    if (link) window.location.href = link;
  });
});
