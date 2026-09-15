// Consome a Rick and Morty API e monta os cards de personagem na tela

const API_BASE_URL = "https://rickandmortyapi.com/api/character";

let currentPage = 1;
let totalPages = 1;
let nameQuery = "";
let statusQuery = "";

const cardsContainer = document.getElementById("cards-container");
const loadingMessage = document.getElementById("loading-message");
const errorMessage = document.getElementById("error-message");
const emptyMessage = document.getElementById("empty-message");
const filterForm = document.getElementById("filter-form");
const searchInput = document.getElementById("search-input");
const statusSelect = document.getElementById("status-select");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageIndicator = document.getElementById("page-indicator");

const statusLabels = {
  Alive: "Vivo",
  Dead: "Morto",
  unknown: "Desconhecido",
};

function buildApiUrl() {
  const url = new URL(API_BASE_URL);
  url.searchParams.set("page", currentPage);
  if (nameQuery) url.searchParams.set("name", nameQuery);
  if (statusQuery) url.searchParams.set("status", statusQuery);
  return url.toString();
}

async function fetchCharacters() {
  loadingMessage.hidden = false;
  errorMessage.hidden = true;
  emptyMessage.hidden = true;

  try {
    const response = await fetch(buildApiUrl());

    if (response.status === 404) {
      cardsContainer.innerHTML = "";
      totalPages = 1;
      updatePagination();
      emptyMessage.hidden = false;
      return;
    }

    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    const data = await response.json();
    totalPages = data.info.pages;
    renderCharacters(data.results);
    updatePagination();
  } catch (err) {
    console.error(err);
    errorMessage.textContent = "Não foi possível carregar os personagens agora. Tente de novo.";
    errorMessage.hidden = false;
  } finally {
    loadingMessage.hidden = true;
  }
}

function renderCharacters(characters) {
  cardsContainer.innerHTML = "";
  for (const character of characters) {
    cardsContainer.appendChild(buildCard(character));
  }
}

function buildCard(character) {
  const card = document.createElement("article");
  card.className = "card";

  const imgWrap = document.createElement("div");
  imgWrap.className = "card__image-wrap";

  const img = document.createElement("img");
  img.className = "card__image";
  img.src = character.image;
  img.alt = character.name;
  img.loading = "lazy";

  const favBtn = document.createElement("button");
  favBtn.className = "card__fav";
  favBtn.type = "button";
  favBtn.textContent = "♡";
  favBtn.onclick = function () {
    const active = favBtn.dataset.active === "true";
    favBtn.dataset.active = active ? "false" : "true";
    favBtn.textContent = active ? "♡" : "♥";
  };

  imgWrap.appendChild(img);
  imgWrap.appendChild(favBtn);

  const body = document.createElement("div");
  body.className = "card__body";

  const name = document.createElement("h3");
  name.className = "card__name";
  name.textContent = character.name;

  const status = document.createElement("p");
  status.className = "card__status";
  const dot = document.createElement("span");
  dot.className = "status-dot status-dot--" + character.status.toLowerCase();
  const statusText = document.createElement("span");
  statusText.textContent = (statusLabels[character.status] || character.status) + " — " + character.species;
  status.appendChild(dot);
  status.appendChild(statusText);

  const meta = document.createElement("p");
  meta.className = "card__meta";
  meta.textContent = "Última localização: " + character.location.name;

  body.appendChild(name);
  body.appendChild(status);
  body.appendChild(meta);

  card.appendChild(imgWrap);
  card.appendChild(body);
  return card;
}

function updatePagination() {
  pageIndicator.textContent = "Página " + currentPage + " de " + totalPages;
  prevBtn.disabled = currentPage <= 1;
  nextBtn.disabled = currentPage >= totalPages;
}

filterForm.addEventListener("submit", function (e) {
  e.preventDefault();
  nameQuery = searchInput.value.trim();
  statusQuery = statusSelect.value;
  currentPage = 1;
  fetchCharacters();
});

prevBtn.addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    fetchCharacters();
  }
});

nextBtn.addEventListener("click", function () {
  if (currentPage < totalPages) {
    currentPage++;
    fetchCharacters();
  }
});

fetchCharacters();
