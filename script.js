/* ---------------------------
   PAGE NAVIGATION
---------------------------- */
function goToPage(page) {
  window.location.href = page;
}

/* ---------------------------
   FLYING HEARTS (ALL PAGES)
---------------------------- */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

  heart.innerHTML = "❤️";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Continuous hearts
setInterval(createHeart, 300);

/* ---------------------------
   CUTENESS PERCENTAGE PAGE
---------------------------- */
let percent = 0;
function startCuteness() {
  const counter = document.getElementById("percentage");

  if (!counter) return;

  const interval = setInterval(() => {
    percent++;
    counter.innerText = percent + "%";

    if (percent >= 100) {
      clearInterval(interval);
      document.getElementById("finalText").innerText =
        "100% Cute & Perfect ❤️";
    }
  }, 50);
}

// Auto start when page loads
window.onload = () => {
  startCuteness();
};