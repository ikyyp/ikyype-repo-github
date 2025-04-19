const welcomeText = document.getElementById("welcomeText");
const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");
const loadingScreen = document.getElementById("loadingScreen");
const loadingText = document.getElementById("loadingText");
const mainContent = document.getElementById("mainContent");
const bgMusic = document.getElementById("bgMusic");

setTimeout(() => {
  welcomeText.style.display = "none";
  startScreen.style.display = "flex";
}, 4500);

startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  loadingScreen.style.display = "flex";

  let percent = 0;
  const interval = setInterval(() => {
    loadingText.innerText = `Loading... ${percent}%`;
    percent++;
    if (percent > 100) {
      clearInterval(interval);
      loadingScreen.style.display = "none";
      mainContent.style.display = "block";
      bgMusic.play();
    }
  }, 30);
});