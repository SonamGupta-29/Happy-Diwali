// JavaScript to create and animate lanterns
const lanternContainer = document.getElementById("lanterns");
const createLantern = () => {
  const lantern = document.createElement("div");
  lantern.classList.add("lantern");
  lantern.style.left = `${Math.random() * 100}vw`;
  lantern.style.animationDuration = `${3 + Math.random() * 3}s`;
  lantern.style.opacity = Math.random() * 0.8 + 0.2;
  lanternContainer.appendChild(lantern);
};

// Generate multiple lanterns
for (let i = 0; i < 20; i++) {
  createLantern();
}
