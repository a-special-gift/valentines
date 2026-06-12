const notes = [
  {
    title: "Patience",
    text: "I love that even when things get heavy, you still try to understand me. That means more than I probably say properly."
  },
  {
    title: "Softness",
    text: "You have this way of making distance feel less sharp. Not easy, not perfect — just less lonely."
  },
  {
    title: "Gratitude",
    text: "Thank you for the letter, the note, and the protea. You remembered something that belongs to home for me, and that hit me right in the chest."
  },
  {
    title: "Us",
    text: "We are still learning each other. Slowly. Clumsily sometimes. But I’m grateful we keep choosing repair instead of pride."
  },
  {
    title: "Soon",
    text: "Two more months and I get to be there for real. No screen. No delay. Just you and me in the same little piece of the world."
  },
  {
    title: "Memory",
    text: "I keep collecting tiny moments with you like pressed flowers. Even the small ones somehow stay."
  },
  {
    title: "A promise",
    text: "This is not the big gift. This is just a small one for today. The real thing is still growing."
  }
];

// Optional: add your own photo for a petal.
// Put images inside /assets, then add image and caption like this:
// notes[3].image = "./assets/us.jpg";
// notes[3].caption = "us. still us.";

const noteCard = document.querySelector("#noteCard");
const noteTitle = document.querySelector("#noteTitle");
const noteText = document.querySelector("#noteText");
const photoSlot = document.querySelector("#photoSlot");
const notePhoto = document.querySelector("#notePhoto");
const photoCaption = document.querySelector("#photoCaption");
const petalButtons = [...document.querySelectorAll(".petal-button")];
const rain = document.querySelector("#petalRain");
const secretStem = document.querySelector("#secretStem");

function revealNote(index) {
  const note = notes[index];
  if (!note) return;

  petalButtons.forEach((button) => button.classList.toggle("active", Number(button.dataset.petal) === index));

  noteCard.classList.add("is-changing");
  window.setTimeout(() => noteCard.classList.remove("is-changing"), 420);

  noteTitle.textContent = note.title;
  noteText.textContent = note.text;

  if (note.image) {
    notePhoto.src = note.image;
    notePhoto.alt = note.caption || "A photo memory";
    photoCaption.textContent = note.caption || "";
    photoSlot.classList.remove("hidden");
  } else {
    photoSlot.classList.add("hidden");
    notePhoto.removeAttribute("src");
    notePhoto.alt = "";
    photoCaption.textContent = "";
  }

  sprinklePetals(9);
}

function sprinklePetals(count = 7) {
  for (let i = 0; i < count; i += 1) {
    const petal = document.createElement("span");
    petal.className = "falling-petal";
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.setProperty("--drift", `${(Math.random() - 0.5) * 220}px`);
    petal.style.animationDuration = `${3.2 + Math.random() * 3.6}s`;
    petal.style.animationDelay = `${Math.random() * 0.5}s`;
    rain.appendChild(petal);

    window.setTimeout(() => petal.remove(), 7200);
  }
}

petalButtons.forEach((button) => {
  button.addEventListener("click", () => revealNote(Number(button.dataset.petal)));
});

let stemTaps = 0;
let stemTimer;

secretStem.addEventListener("click", () => {
  stemTaps += 1;
  clearTimeout(stemTimer);

  if (stemTaps >= 3) {
    stemTaps = 0;
    noteTitle.textContent = "Tiny secret";
    noteText.textContent = "I’m saving the bigger things for when I see you. But I didn’t want today to pass without leaving a little piece of care here.";
    photoSlot.classList.add("hidden");
    sprinklePetals(22);
    return;
  }

  stemTimer = window.setTimeout(() => {
    stemTaps = 0;
  }, 1300);
});

// Keyboard easter egg: type "bloom".
let typed = "";
window.addEventListener("keydown", (event) => {
  if (event.key.length !== 1) return;
  typed = (typed + event.key.toLowerCase()).slice(-5);

  if (typed === "bloom") {
    noteTitle.textContent = "Bloom";
    noteText.textContent = "Even through the difficult parts, something gentle is still growing here.";
    photoSlot.classList.add("hidden");
    sprinklePetals(28);
  }
});

window.addEventListener("load", () => {
  sprinklePetals(5);
});
