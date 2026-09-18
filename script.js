const startBtn = document.getElementById("startBtn");
const contentSection = document.getElementById("contentSection");

startBtn.addEventListener("click", function () {
  contentSection.scrollIntoView({
    behavior: "smooth"
  });

  startBtn.textContent = "Exploring...";
});