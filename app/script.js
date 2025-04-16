let isSequential = true;
let currentIndex = 0;

let randomSimplesIndex = 0;
let randomNounIndex = 0;
let randomAdjectiveIndex = 0;
let randomVerbIndex = 0;

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
nextWordBtn.id = "nextWordBtn";
nextWordBtn.style.marginTop = "20px";
document.body.appendChild(nextWordBtn);

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

nextWordBtn.addEventListener("click", () => {
  if (isSequential) {
    currentIndex = (currentIndex + 1) % nouns.length;
  }
  showWords();
});

document.getElementById("sequentialBtn").addEventListener("click", () => {
  isSequential = true;
  currentIndex = 0;
  showWords();
});

document.getElementById("randomBtn").addEventListener("click", () => {
  isSequential = false;
  showWords();
});

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

const showRandomAllBtn = document.getElementById("showRandomAllBtn");
const randomSimpleListElement = document.createElement("div");
const randomNounListElement = document.createElement("div");
const randomAdjectiveListElement = document.createElement("div");
const randomVerbListElement = document.createElement("div");

// Elementlarni stilizatsiya qilish
[
  randomSimpleListElement,
  randomNounListElement,
  randomAdjectiveListElement,
  randomVerbListElement,
].forEach((el) => {
  el.style.display = "none";
  el.style.margin = "10px 0";
  el.style.padding = "10px";
  el.style.border = "1px solid #ddd";
  el.style.borderRadius = "5px";
});

// Elementlarni DOM-ga qo'shish
simpleListElement.after(randomSimpleListElement);
nounListElement.after(randomNounListElement);
adjectiveListElement.after(randomAdjectiveListElement);
verbListElement.after(randomVerbListElement);

function showRandomAllLists() {
  const shuffledSimples = [...simples].sort(() => Math.random() - 0.5);
  randomSimpleListElement.innerHTML =
    "<h3>Oddiy So'zlar (Aralash)</h3>" +
    shuffledSimples
      .map(
        (word, index) => `<p>${index + 1}. ${word.english} - ${word.uzbek}</p>`
      )
      .join("");

  const shuffledNouns = [...nouns].sort(() => Math.random() - 0.5);
  randomNounListElement.innerHTML =
    "<h3>Otlar (Aralash)</h3>" +
    shuffledNouns
      .map(
        (word, index) => `<p>${index + 1}. ${word.english} - ${word.uzbek}</p>`
      )
      .join("");

  const shuffledAdjectives = [...adjectives].sort(() => Math.random() - 0.5);
  randomAdjectiveListElement.innerHTML =
    "<h3>Sifatlar (Aralash)</h3>" +
    shuffledAdjectives
      .map(
        (word, index) => `<p>${index + 1}. ${word.english} - ${word.uzbek}</p>`
      )
      .join("");

  const shuffledVerbs = [...verbs].sort(() => Math.random() - 0.5);
  randomVerbListElement.innerHTML =
    "<h3>Fe'llar (Aralash)</h3>" +
    shuffledVerbs
      .map(
        (word, index) => `<p>${index + 1}. ${word.english} - ${word.uzbek}</p>`
      )
      .join("");

  randomSimpleListElement.style.display = "block";
  randomNounListElement.style.display = "block";
  randomAdjectiveListElement.style.display = "block";
  randomVerbListElement.style.display = "block";
}

function toggleRandomAllLists() {
  const isVisible = randomSimpleListElement.style.display === "block";

  if (isVisible) {
    randomSimpleListElement.style.display = "none";
    randomNounListElement.style.display = "none";
    randomAdjectiveListElement.style.display = "none";
    randomVerbListElement.style.display = "none";
  } else {
    showRandomAllLists();
  }
}

showRandomAllBtn.addEventListener("click", toggleRandomAllLists);
