let isSequential = true;
let currentIndex = 0;

// Random indekslarni saqlash uchun o'zgaruvchilar
let randomSimplesIndex = 0;
let randomNounIndex = 0;
let randomAdjectiveIndex = 0;
let randomVerbIndex = 0;

// HTML elementlar
const simpleWordElement = document.getElementById("simpleWord");
const simpleTranslationElement = document.getElementById("simpleTranslation");
const simpleTranslationBtn = document.getElementById("simpleTranslationBtn");
const simpleListElement = document.getElementById("simpleList");

const nounWordElement = document.getElementById("nounWord");
const nounTranslationElement = document.getElementById("nounTranslation");
const nounTranslationBtn = document.getElementById("nounTranslationBtn");
const nounListElement = document.getElementById("nounList");

const adjectiveWordElement = document.getElementById("adjectiveWord");
const adjectiveTranslationElement = document.getElementById(
  "adjectiveTranslation"
);
const adjectiveTranslationBtn = document.getElementById(
  "adjectiveTranslationBtn"
);
const adjectiveListElement = document.getElementById("adjectiveList");

const verbWordElement = document.getElementById("verbWord");
const verbTranslationElement = document.getElementById("verbTranslation");
const verbTranslationBtn = document.getElementById("verbTranslationBtn");
const verbListElement = document.getElementById("verbList");

const nextWordBtn = document.createElement("button");
nextWordBtn.innerText = "Keyingi so'z";
nextWordBtn.id = "nextWordBtn"; // ID qo'shildi
nextWordBtn.style.marginTop = "20px";
document.body.appendChild(nextWordBtn);

// Funksiya: So'zlarni ko'rsatish
function showWords() {
  if (isSequential) {
    randomSimplesIndex = currentIndex;
    randomNounIndex = currentIndex;
    randomAdjectiveIndex = currentIndex;
    randomVerbIndex = currentIndex;
  } else {
    randomSimplesIndex = Math.floor(Math.random() * simples.length);
    randomNounIndex = Math.floor(Math.random() * nouns.length);
    randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
    randomVerbIndex = Math.floor(Math.random() * verbs.length);
  }

  simpleWordElement.innerText = `Sikl: ${randomSimplesIndex + 1}. ${
    simples[randomSimplesIndex].english
  }`;
  nounWordElement.innerText = `Ot: ${randomNounIndex + 1}. ${
    nouns[randomNounIndex].english
  }`;
  adjectiveWordElement.innerText = `Sifat: ${randomAdjectiveIndex + 1}. ${
    adjectives[randomAdjectiveIndex].english
  }`;
  verbWordElement.innerText = `Fel: ${randomVerbIndex + 1}. ${
    verbs[randomVerbIndex].english
  }`;

  simpleTranslationElement.innerText = "";
  nounTranslationElement.innerText = "";
  adjectiveTranslationElement.innerText = "";
  verbTranslationElement.innerText = "";
}

// Tarjimalarni ko'rsatish tugmalari
simpleTranslationBtn.addEventListener("click", () => {
  const index = currentIndex % simples.length;
  simpleTranslationElement.innerText = `Tarjima: ${simples[randomSimplesIndex].uzbek}`;
});

nounTranslationBtn.addEventListener("click", () => {
  nounTranslationElement.innerText = `Tarjima: ${nouns[randomNounIndex].uzbek}`;
});

adjectiveTranslationBtn.addEventListener("click", () => {
  adjectiveTranslationElement.innerText = `Tarjima: ${adjectives[randomAdjectiveIndex].uzbek}`;
});

verbTranslationBtn.addEventListener("click", () => {
  verbTranslationElement.innerText = `Tarjima: ${verbs[randomVerbIndex].uzbek}`;
});

// Keyingi so'zga o'tish
nextWordBtn.addEventListener("click", () => {
  if (isSequential) {
    currentIndex = (currentIndex + 1) % nouns.length; // Tartib bo'yicha ketadi va oxirga yetganda qaytadi
  }
  showWords();
});

// Tugmalar: Tartib bilan yoki random tanlash
document.getElementById("sequentialBtn").addEventListener("click", () => {
  isSequential = true;
  currentIndex = 0;
  showWords();
});

document.getElementById("randomBtn").addEventListener("click", () => {
  isSequential = false;
  showWords();
});

// Ro'yxatlarni ko'rsatish funksiyalari

function showSimpleList() {
  simpleListElement.innerHTML = simples
    .map(
      (simple, index) =>
        `<p>${index + 1}. ${simple.english} - ${simple.uzbek}</p>`
    )
    .join("");
  simpleListElement.style.display = "block";
}
function showNounList() {
  nounListElement.innerHTML = nouns
    .map(
      (noun, index) => `<p>${index + 1}. ${noun.english} - ${noun.uzbek}</p>`
    )
    .join("");
  nounListElement.style.display = "block";
}

function showAdjectiveList() {
  adjectiveListElement.innerHTML = adjectives
    .map((adj, index) => `<p>${index + 1}. ${adj.english} - ${adj.uzbek}</p>`)
    .join("");
  adjectiveListElement.style.display = "block";
}

function showVerbList() {
  verbListElement.innerHTML = verbs
    .map(
      (verb, index) => `<p>${index + 1}. ${verb.english} - ${verb.uzbek}</p>`
    )
    .join("");
  verbListElement.style.display = "block";
}

function toggleAllLists() {
  const isAnyListVisible =
    simpleListElement.style.display === "block" ||
    nounListElement.style.display === "block" ||
    adjectiveListElement.style.display === "block" ||
    verbListElement.style.display === "block";

  if (isAnyListVisible) {
    simpleListElement.style.display = "none";
    nounListElement.style.display = "none";
    adjectiveListElement.style.display = "none";
    verbListElement.style.display = "none";
  } else {
    showSimpleList();
    showNounList();
    showAdjectiveList();
    showVerbList();
  }
}

document
  .getElementById("showAllListsBtn")
  .addEventListener("click", toggleAllLists);

showWords();
