const TYPE_META = [
  { id: "normal", ko: "노말", color: "#a8a77a", icon: "●" },
  { id: "fire", ko: "불꽃", color: "#ee8130", icon: "◆" },
  { id: "water", ko: "물", color: "#6390f0", icon: "●" },
  { id: "grass", ko: "풀", color: "#7ac74c", icon: "◆" },
  { id: "electric", ko: "전기", color: "#f7d02c", icon: "◆" },
  { id: "ice", ko: "얼음", color: "#96d9d6", icon: "✦" },
  { id: "fighting", ko: "격투", color: "#c22e28", icon: "●" },
  { id: "poison", ko: "독", color: "#a33ea1", icon: "●" },
  { id: "ground", ko: "땅", color: "#e2bf65", icon: "▲" },
  { id: "flying", ko: "비행", color: "#a98ff3", icon: "◆" },
  { id: "psychic", ko: "에스퍼", color: "#f95587", icon: "◎" },
  { id: "bug", ko: "벌레", color: "#a6b91a", icon: "◆" },
  { id: "rock", ko: "바위", color: "#b6a136", icon: "▲" },
  { id: "ghost", ko: "고스트", color: "#735797", icon: "●" },
  { id: "dragon", ko: "드래곤", color: "#6f35fc", icon: "◆" },
  { id: "dark", ko: "악", color: "#705746", icon: "◐" },
  { id: "steel", ko: "강철", color: "#b7b7ce", icon: "◆" },
  { id: "fairy", ko: "페어리", color: "#d685ad", icon: "✦" },
];

const ROLE_META = [
  { id: "protagonist", ko: "주인공", color: "#38bdf8", icon: "P" },
  { id: "rival", ko: "라이벌", color: "#ef4444", icon: "R" },
  { id: "professor", ko: "포켓몬 박사", color: "#22c55e", icon: "D" },
  { id: "gym-leader", ko: "관장", color: "#f97316", icon: "G" },
  { id: "elite-four", ko: "사천왕", color: "#0ea5e9", icon: "E" },
  { id: "champion", ko: "챔피언", color: "#facc15", icon: "C" },
  { id: "villain", ko: "악의 조직", color: "#9333ea", icon: "V" },
];

const SOURCE_URLS = {
  pokemonSpecies: "https://pokeapi.co/api/v2/pokemon-species",
  pokemonSpeciesDetail: "https://pokeapi.co/api/v2/pokemon-species/",
  type: "https://pokeapi.co/api/v2/type/",
  people:
    "https://bulbapedia.bulbagarden.net/w/api.php?action=parse&page=List_of_game_characters&prop=text&format=json&origin=*",
};

const PERSON_KO_ALIASES = {
  Red: ["레드"],
  Blue: ["그린", "블루"],
  "Professor Oak": ["오박사", "오키드박사"],
  Daisy: ["나나미"],
  Brock: ["웅"],
  Misty: ["이슬"],
  "Lt. Surge": ["마티스"],
  Erika: ["민화"],
  Koga: ["독수"],
  Sabrina: ["초련"],
  Blaine: ["강연"],
  Giovanni: ["비주기"],
  Lorelei: ["칸나"],
  Bruno: ["시바"],
  Agatha: ["국화"],
  Lance: ["목호"],
  Ethan: ["심향"],
  Silver: ["실버"],
  "Professor Elm": ["공박사"],
  Falkner: ["비상"],
  Bugsy: ["호일"],
  Whitney: ["꼭두"],
  Morty: ["유빈"],
  Chuck: ["사도"],
  Jasmine: ["규리"],
  Pryce: ["류옹"],
  Clair: ["이향"],
  Will: ["일목"],
  Karen: ["카렌"],
  Kris: ["크리스"],
  Lyra: ["금선"],
  "Mr. Pokémon": ["포켓몬 할아버지"],
  Brendan: ["휘웅"],
  May: ["봄이"],
  Wally: ["민진"],
  "Professor Birch": ["털보박사"],
  Roxanne: ["원규"],
  Brawly: ["철구"],
  Wattson: ["암페어"],
  Flannery: ["민지"],
  Norman: ["종길"],
  Winona: ["은송"],
  "Tate and Liza": ["풍과 란"],
  Wallace: ["윤진"],
  Juan: ["아단"],
  Steven: ["성호"],
  Sidney: ["혁진"],
  Phoebe: ["회연"],
  Glacia: ["미혜"],
  Drake: ["권수"],
  Maxie: ["마적"],
  Archie: ["아강"],
  Courtney: ["구열"],
  Matt: ["해조"],
  Lucas: ["광휘"],
  Dawn: ["빛나"],
  Barry: ["용식"],
  "Professor Rowan": ["마박사"],
  Roark: ["강석"],
  Gardenia: ["유채"],
  Maylene: ["자두"],
  "Crasher Wake": ["맥실러"],
  Fantina: ["멜리사"],
  Byron: ["동관"],
  Candice: ["무청"],
  Volkner: ["전진"],
  Cynthia: ["난천"],
  Aaron: ["충호"],
  Bertha: ["들국화"],
  Flint: ["대엽"],
  Lucian: ["오엽"],
  Cyrus: ["태홍"],
  Mars: ["마스"],
  Jupiter: ["주피터"],
  Saturn: ["새턴"],
  Charon: ["플루토"],
  Hilbert: ["투지"],
  Hilda: ["투희"],
  Nate: ["공명"],
  Rosa: ["명희"],
  N: ["N", "엔"],
  Cheren: ["체렌"],
  Bianca: ["벨"],
  Hugh: ["휴이"],
  "Professor Juniper": ["주박사"],
  Cilan: ["덴트"],
  Chili: ["팟"],
  Cress: ["콘"],
  Lenora: ["알로에"],
  Burgh: ["아티"],
  Elesa: ["카밀레"],
  Clay: ["야콘"],
  Skyla: ["풍란"],
  Brycen: ["담죽"],
  Drayden: ["사간"],
  Iris: ["아이리스"],
  Roxie: ["보미카"],
  Marlon: ["시즈"],
  Alder: ["노간주"],
  Shauntal: ["망초"],
  Marshal: ["연무"],
  Grimsley: ["기망"],
  Caitlin: ["카틀레야"],
  Ghetsis: ["게치스"],
  Colress: ["아크로마"],
  Ingo: ["상행"],
  Emmet: ["하행"],
  Calem: ["칼름"],
  Serena: ["세레나"],
  Shauna: ["사나"],
  Tierno: ["티에르노"],
  Trevor: ["트로바"],
  "Professor Sycamore": ["플라타느박사"],
  Viola: ["비올라"],
  Grant: ["자크로"],
  Korrina: ["코르니"],
  Ramos: ["후쿠지"],
  Clemont: ["시트론"],
  Valerie: ["마슈"],
  Olympia: ["고지카"],
  Wulfric: ["우르프"],
  Diantha: ["카르네"],
  Malva: ["파키라"],
  Siebold: ["즈미"],
  Wikstrom: ["간피"],
  Drasna: ["드라세나"],
  Lysandre: ["플라드리"],
  Elio: ["영태"],
  Selene: ["미월"],
  Hau: ["하우"],
  Lillie: ["릴리에"],
  Gladion: ["글라디오"],
  "Professor Kukui": ["쿠쿠이박사"],
  Hala: ["할라"],
  Olivia: ["라이치"],
  Acerola: ["아세로라"],
  Kahili: ["카일리"],
  Molayne: ["멀레인"],
  Lusamine: ["루자미네"],
  Guzma: ["구즈마"],
  Victor: ["승재"],
  Gloria: ["우리"],
  Hop: ["호브"],
  Marnie: ["마리"],
  Bede: ["비트"],
  Leon: ["단델"],
  Milo: ["아킬"],
  Nessa: ["야청"],
  Kabu: ["순무"],
  Bea: ["채두"],
  Allister: ["어니언"],
  Opal: ["포플러"],
  Gordie: ["마쿠와"],
  Melony: ["멜론"],
  Piers: ["두송"],
  Raihan: ["금랑"],
  Rose: ["로즈"],
  Oleana: ["올리브"],
  Klara: ["도정"],
  Avery: ["세이버리"],
  Rei: ["영빈"],
  Akari: ["윤슬"],
  Laventon: ["라벤박사"],
  Kamado: ["전목"],
  Cyllene: ["금경"],
  Irida: ["주혜"],
  Adaman: ["찬석"],
  Volo: ["월로"],
  Juliana: ["보민"],
  Florian: ["푸름"],
  Nemona: ["네모"],
  Arven: ["페퍼"],
  Penny: ["모란"],
  "Professor Sada": ["올림박사"],
  "Professor Turo": ["투로박사"],
  Katy: ["단풍"],
  Brassius: ["콜사"],
  Iono: ["모야모"],
  Kofu: ["곤포"],
  Larry: ["청목"],
  Ryme: ["라임"],
  Tulip: ["리파"],
  Grusha: ["그루샤"],
  Rika: ["칠리"],
  Poppy: ["뽀삐"],
  Hassel: ["팔자크"],
  Geeta: ["테사"],
  Clavell: ["클라벨"],
  Jacq: ["지니어"],
  Carmine: ["시유"],
  Kieran: ["카지"],
  Briar: ["브라이어"],
  Bill: ["정인이"],
  Lanette: ["유미"],
  Bebe: ["유미"],
  Amanita: ["쇼로"],
  Cassius: ["크로케아"],
  "Pokémon Center ladies": ["포켓몬센터 직원"],
  "Nurse Joy": ["간호순"],
  Looker: ["핸섬"],
  Anabel: ["리라"],
};

const NON_HUMAN_CHARACTER_NAMES = new Set([
  "The player's Pikachu",
  "Ghost Marowak",
  "Amphy",
  "Suicune",
  "Peeko",
  "Shadow Lugia",
  "Magearna",
  "Munchlax",
  "Miraidon",
  "Koraidon",
  "Ogerpon",
  "Terapagos",
]);

const FALLBACK_PEOPLE = [];

const MAINLINE_CHARACTER_GAME_PATTERNS = [
  /Pokémon Red and Green/i,
  /Pokémon Blue/i,
  /Pokémon Yellow/i,
  /Pokémon Gold and Silver/i,
  /Pokémon Crystal/i,
  /Pokémon Ruby and Sapphire/i,
  /Pokémon FireRed and LeafGreen/i,
  /Pokémon Emerald/i,
  /Pokémon Diamond and Pearl/i,
  /Pokémon Platinum/i,
  /Pokémon HeartGold and SoulSilver/i,
  /Pokémon Black and White(?!.*Mystery)/i,
  /Pokémon Black 2 and White 2/i,
  /Pokémon X and Y/i,
  /Pokémon Omega Ruby and Alpha Sapphire/i,
  /Pokémon Sun and Moon/i,
  /Pokémon Ultra Sun and Ultra Moon/i,
  /Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!/i,
  /Pokémon Sword and Shield/i,
  /Pokémon Brilliant Diamond and Shining Pearl/i,
  /Pokémon Legends: Arceus/i,
  /Pokémon Scarlet and Violet/i,
  /Pokémon Legends: Z-A/i,
];

const EXCLUDED_CHARACTER_GAME_PATTERNS = [
  /Trading Card Game/i,
  /TCG/i,
  /Team GR/i,
  /Ranch/i,
  /Pokémon Farm/i,
  /My Pokémon Ranch/i,
  /Colosseum/i,
  /XD/i,
  /Mystery Dungeon/i,
  /Ranger/i,
  /Snap/i,
  /Stadium/i,
  /Battle Revolution/i,
  /Masters/i,
  /GO/i,
  /Unite/i,
  /Café/i,
  /Conquest/i,
  /Pokkén/i,
  /Sleep/i,
  /Quest/i,
  /Shuffle/i,
  /Picross/i,
];

const ROLE_KEYWORDS = {
  protagonist: [
    "Red",
    "Leaf",
    "Chase",
    "Elaine",
    "Ethan",
    "Kris",
    "Lyra",
    "Brendan",
    "May",
    "Lucas",
    "Dawn",
    "Hilbert",
    "Hilda",
    "Nate",
    "Rosa",
    "Calem",
    "Serena",
    "Elio",
    "Selene",
    "Victor",
    "Gloria",
    "Rei",
    "Akari",
    "Florian",
    "Juliana",
  ],
  "gym-leader": [
    "Brock",
    "Misty",
    "Lt. Surge",
    "Erika",
    "Koga",
    "Sabrina",
    "Blaine",
    "Giovanni",
    "Falkner",
    "Bugsy",
    "Whitney",
    "Morty",
    "Chuck",
    "Jasmine",
    "Pryce",
    "Clair",
    "Roxanne",
    "Brawly",
    "Wattson",
    "Flannery",
    "Norman",
    "Winona",
    "Tate and Liza",
    "Wallace",
    "Juan",
    "Roark",
    "Gardenia",
    "Maylene",
    "Crasher Wake",
    "Fantina",
    "Byron",
    "Candice",
    "Volkner",
    "Cilan",
    "Chili",
    "Cress",
    "Lenora",
    "Burgh",
    "Elesa",
    "Clay",
    "Skyla",
    "Brycen",
    "Drayden",
    "Iris",
    "Cheren",
    "Roxie",
    "Marlon",
    "Viola",
    "Grant",
    "Korrina",
    "Ramos",
    "Clemont",
    "Valerie",
    "Olympia",
    "Wulfric",
    "Milo",
    "Nessa",
    "Kabu",
    "Bea",
    "Allister",
    "Opal",
    "Bede",
    "Gordie",
    "Melony",
    "Piers",
    "Marnie",
    "Raihan",
    "Katy",
    "Brassius",
    "Iono",
    "Kofu",
    "Larry",
    "Ryme",
    "Tulip",
    "Grusha",
  ],
  "elite-four": [
    "Lorelei",
    "Bruno",
    "Agatha",
    "Will",
    "Karen",
    "Sidney",
    "Phoebe",
    "Glacia",
    "Drake",
    "Aaron",
    "Bertha",
    "Flint",
    "Lucian",
    "Shauntal",
    "Marshal",
    "Grimsley",
    "Caitlin",
    "Malva",
    "Siebold",
    "Wikstrom",
    "Drasna",
    "Hala",
    "Olivia",
    "Acerola",
    "Kahili",
    "Molayne",
    "Rika",
    "Poppy",
    "Hassel",
  ],
  champion: [
    "Blue",
    "Lance",
    "Steven",
    "Wallace",
    "Cynthia",
    "Alder",
    "Iris",
    "Diantha",
    "Professor Kukui",
    "Leon",
    "Geeta",
    "Nemona",
  ],
  rival: [
    "Blue",
    "Silver",
    "Wally",
    "Barry",
    "Cheren",
    "Bianca",
    "Hugh",
    "Shauna",
    "Tierno",
    "Trevor",
    "Hau",
    "Gladion",
    "Hop",
    "Marnie",
    "Bede",
    "Klara",
    "Avery",
    "Nemona",
    "Arven",
    "Penny",
    "Carmine",
    "Kieran",
  ],
  villain: [
    "Giovanni",
    "Maxie",
    "Archie",
    "Cyrus",
    "Ghetsis",
    "Colress",
    "Lysandre",
    "Guzma",
    "Lusamine",
    "Rose",
    "Sordward",
    "Shielbert",
    "Volo",
  ],
  "mother": [
    "Player's mom",
    "Mom",
    "Grace",
    "Caroline",
    "Johanna",
    "Bianca's father",
  ],
  "nurse": [
    "Pokémon Center ladies",
    "Pokémon Center Ladies",
  ],
  "advisor": [
    "Gym guide",
    "Dude",
    "Guide Gent",
  ],
  "storage-admin": [
    "Bill",
    "Celio",
    "Lanette",
    "Bebe",
    "Amanita",
    "Cassius",
    "Molayne",
  ],
  "international-police": [
    "Looker",
    "Anabel",
    "Nanu",
  ],
};

const state = {
  view: "pokemon",
  selectedSlot: "normal",
  data: {
    pokemon: [],
    people: [],
  },
  picks: {
    pokemon: {},
    people: {},
  },
  loading: {
    pokemon: true,
    people: true,
  },
};

const elements = {
  boardTitle: document.querySelector("#boardTitle"),
  diagramGrid: document.querySelector("#diagramGrid"),
  candidateGrid: document.querySelector("#candidateGrid"),
  searchInput: document.querySelector("#searchInput"),
  filterSelect: document.querySelector("#filterSelect"),
  viewButtons: document.querySelectorAll("[data-view]"),
  exportButton: document.querySelector("#exportButton"),
  resetButton: document.querySelector("#resetButton"),
  randomizeButton: document.querySelector("#randomizeButton"),
};

restorePicks();
bindEvents();
render();
loadDatabases();

function bindEvents() {
  elements.viewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      state.selectedSlot = state.view === "pokemon" ? TYPE_META[0].id : ROLE_META[0].id;
      elements.searchInput.value = "";
      updateViewButtons();
      render();
    });
  });

  elements.searchInput.addEventListener("input", renderCandidates);
  elements.filterSelect.addEventListener("change", renderCandidates);
  elements.resetButton.addEventListener("click", () => {
    state.picks[state.view] = {};
    persistPicks();
    render();
  });
  elements.randomizeButton.addEventListener("click", randomizeCurrentView);
  elements.exportButton.addEventListener("click", exportCurrentBoard);
}

async function loadDatabases() {
  loadPokemonDb()
    .then((pokemon) => {
      state.data.pokemon = pokemon.length ? pokemon : createFallbackPokemon();
    })
    .catch(() => {
      state.data.pokemon = createFallbackPokemon();
    })
    .finally(() => {
      state.loading.pokemon = false;
      render();
    });

  loadPeopleDb()
    .then((people) => {
      state.data.people = people;
    })
    .catch(() => {
      state.data.people = FALLBACK_PEOPLE;
    })
    .finally(() => {
      state.loading.people = false;
      render();
    });
}

async function loadPokemonDb() {
  const countResponse = await fetch(`${SOURCE_URLS.pokemonSpecies}?limit=1`);
  if (!countResponse.ok) throw new Error("PokeAPI species count request failed");
  const countPayload = await countResponse.json();
  const speciesLimit = countPayload.count || 2000;
  const speciesResponse = await fetch(`${SOURCE_URLS.pokemonSpecies}?limit=${speciesLimit}`);
  if (!speciesResponse.ok) throw new Error("PokeAPI species request failed");
  const speciesPayload = await speciesResponse.json();
  const speciesById = new Map();
  speciesPayload.results.forEach((item) => {
    const id = extractId(item.url);
    if (!id) return;
    const nameEn = formatPokemonName(item.name);
    speciesById.set(id, {
      id,
      name: nameEn,
      nameEn,
      nameKo: "",
      slug: item.name,
      aliases: [],
      types: [],
      role: "pokemon",
      image: spriteUrl(id),
      fallbackImage: homeSpriteUrl(id),
      finalFallbackImage: officialArtworkUrl(id),
    });
  });
  const typePayloads = await Promise.all(
    TYPE_META.map(async (type) => {
      const response = await fetch(`${SOURCE_URLS.type}${type.id}`);
      if (!response.ok) throw new Error(`PokeAPI type request failed: ${type.id}`);
      return { type: type.id, data: await response.json() };
    }),
  );

  typePayloads.forEach(({ type, data }) => {
    data.pokemon.forEach(({ pokemon }) => {
      const id = extractId(pokemon.url);
      const entry = speciesById.get(id);
      if (entry && !entry.types.includes(type)) entry.types.push(type);
    });
  });

  await hydrateKoreanPokemonNames(speciesById);

  return Array.from(speciesById.values())
    .filter((pokemon) => pokemon.types.length && pokemon.nameKo)
    .sort((a, b) => a.id - b.id);
}

async function loadPeopleDb() {
  const response = await fetch(SOURCE_URLS.people);
  if (!response.ok) throw new Error("Bulbapedia request failed");
  const payload = await response.json();
  const html = payload?.parse?.text?.["*"];
  if (!html) throw new Error("Bulbapedia response missing page HTML");

  const doc = new DOMParser().parseFromString(html, "text/html");
  const output = doc.querySelector(".mw-parser-output") || doc.body;
  const records = new Map();
  let generation = "";
  let game = "";

  Array.from(output.children).forEach((node) => {
    if (/^H2$/i.test(node.tagName)) {
      generation = cleanText(node.textContent);
      return;
    }
    if (/^H3$/i.test(node.tagName)) {
      game = cleanText(node.textContent);
      return;
    }
    if (!game || isExcludedCharacterGame(game)) return;

    node.querySelectorAll('a[href^="/wiki/"]').forEach((anchor) => {
      const name = cleanText(anchor.textContent);
      const href = anchor.getAttribute("href") || "";
      if (!isCharacterLink(name, href, game)) return;

      const key = normalizeKey(name);
      const existing =
        records.get(key) ||
        {
          id: key,
          sourceName: name,
          name,
          nameEn: name,
          nameKo: "",
          aliases: [],
          role: classifyPerson(name),
          games: [],
          generations: [],
          region: "게임",
          pageTitle: titleFromHref(href),
          image: "",
          fallbackImage: "",
        };

      if (!existing.games.includes(game)) existing.games.push(game);
      if (generation && !existing.generations.includes(generation)) existing.generations.push(generation);
      records.set(key, existing);
    });
  });

  const people = Array.from(records.values());
  await hydrateOfficialCharacterImages(people);

  return people
    .map(normalizePersonRecord)
    .filter(shouldKeepPerson)
    .sort((a, b) => a.name.localeCompare(b.name));
}

function createFallbackPokemon() {
  return [
    [143, "잠만보", "normal"],
    [6, "리자몽", "fire"],
    [658, "개굴닌자", "water"],
    [549, "드레디어", "grass"],
    [100, "찌리리공", "electric"],
    [38, "나인테일", "ice"],
    [65, "후딘", "psychic"],
    [94, "팬텀", "ghost"],
    [149, "망나뇽", "dragon"],
  ].map(([id, name, type]) => ({
    id,
    name,
    nameEn: "",
    nameKo: name,
    slug: "",
    aliases: [],
    types: [type],
    image: spriteUrl(id),
    fallbackImage: homeSpriteUrl(id),
    finalFallbackImage: officialArtworkUrl(id),
  }));
}

function render() {
  updateViewButtons();
  renderFilters();
  renderBoard();
  renderCandidates();
}

function updateViewButtons() {
  elements.viewButtons.forEach((button) => {
    const active = button.dataset.view === state.view;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
}

function renderFilters() {
  const meta = state.view === "pokemon" ? TYPE_META : ROLE_META;
  const currentValue = elements.filterSelect.value || "slot";
  elements.filterSelect.innerHTML = [
    `<option value="slot">현재 칸</option>`,
    `<option value="all">전체</option>`,
    ...meta.map((item) => `<option value="${item.id}">${item.ko}</option>`),
  ].join("");

  const valid = Array.from(elements.filterSelect.options).some((option) => option.value === currentValue);
  elements.filterSelect.value = valid ? currentValue : "slot";
}

function renderBoard() {
  const meta = state.view === "pokemon" ? TYPE_META : ROLE_META;
  elements.boardTitle.textContent = state.view === "pokemon" ? "타입별 최애 포켓몬" : "역할별 최애 등장인물";
  elements.diagramGrid.innerHTML = meta
    .map((slot) => {
      const pickId = state.picks[state.view][slot.id];
      const pick = state.data[state.view].find((item) => String(item.id) === String(pickId));
      const body = pick ? renderPickedBody(pick, state.view) : `<div class="empty-mark">+</div>`;
      return `
        <button class="slot-card ${state.selectedSlot === slot.id ? "is-selected" : ""}" type="button"
          style="--slot-color: ${slot.color}" data-slot="${slot.id}" aria-label="${slot.ko}">
          <div class="slot-title">
            <span>${slot.ko}</span>
            <span class="slot-icon" aria-hidden="true">${slot.icon}</span>
          </div>
          <div class="slot-body">
            ${body}
            ${pick ? `<div class="slot-name">${pick.name}</div>` : ""}
          </div>
        </button>
      `;
    })
    .join("");

  elements.diagramGrid.querySelectorAll("[data-slot]").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedSlot = card.dataset.slot;
      elements.filterSelect.value = "slot";
      render();
    });
  });
}

function renderPickedBody(item, view) {
  if (view === "pokemon") {
    return `<img src="${item.image}" data-art-style="pixel" data-fallback-src="${item.fallbackImage}" data-final-fallback-src="${item.finalFallbackImage}" alt="${item.name}" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="handleImageError(this, '${escapeAttr(item.name)}')" />`;
  }
  if (item.image) {
    return `<img src="${item.image}" data-art-style="smooth" ${item.fallbackImage ? `data-fallback-src="${item.fallbackImage}"` : ""} alt="${item.name}" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="handleImageError(this, '${escapeAttr(item.name)}')" />`;
  }
  return `<div class="avatar-fallback">${initials(item.name)}</div>`;
}

function renderCandidates() {
  const data = state.data[state.view];
  const loading = state.loading[state.view];
  if (loading) {
    elements.candidateGrid.innerHTML = `<div class="no-results">데이터 불러오는 중</div>`;
    return;
  }

  const query = elements.searchInput.value.trim().toLowerCase();
  const filter = elements.filterSelect.value;
  const slotFilter = filter === "slot" ? state.selectedSlot : filter;
  const filtered = data
    .filter((item) => matchesFilter(item, slotFilter))
    .filter((item) => matchesQuery(item, query));

  if (!filtered.length) {
    elements.candidateGrid.innerHTML = `<div class="no-results">결과 없음</div>`;
    return;
  }

  elements.candidateGrid.innerHTML = filtered
    .map((item) => {
      const picked = Object.values(state.picks[state.view]).some((id) => String(id) === String(item.id));
      const color = itemColor(item);
      const artStyle = state.view === "pokemon" ? "pixel" : "smooth";
      const image = item.image
        ? `<img src="${item.image}" data-art-style="${artStyle}" ${item.fallbackImage ? `data-fallback-src="${item.fallbackImage}"` : ""} ${item.finalFallbackImage ? `data-final-fallback-src="${item.finalFallbackImage}"` : ""} alt="${item.name}" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="handleImageError(this, '${escapeAttr(item.name)}')" />`
        : `<div class="avatar-fallback">${initials(item.name)}</div>`;
      return `
        <button class="candidate-card ${picked ? "is-picked" : ""}" type="button"
          style="--candidate-color: ${color}" data-id="${item.id}" aria-label="${item.name}">
          <div class="candidate-art">${image}</div>
          <div class="candidate-meta">
            <span class="candidate-name">${item.name}</span>
            <span class="candidate-sub">${subtitle(item)}</span>
          </div>
        </button>
      `;
    })
    .join("");

  elements.candidateGrid.querySelectorAll("[data-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.picks[state.view][state.selectedSlot] = button.dataset.id;
      persistPicks();
      renderBoard();
      renderCandidates();
    });
  });
}

function matchesFilter(item, filter) {
  if (!filter || filter === "all") return true;
  if (state.view === "pokemon") return item.types.includes(filter);
  return item.role === filter;
}

function matchesQuery(item, query) {
  if (!query) return true;
  const haystack = [
    item.name,
    item.nameKo,
    ...(item.aliases || []),
    item.role,
    ...(item.types || []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function itemColor(item) {
  if (state.view === "pokemon") {
    const type = TYPE_META.find((entry) => item.types.includes(entry.id));
    return type?.color || "#334155";
  }
  return ROLE_META.find((entry) => entry.id === item.role)?.color || "#334155";
}

function subtitle(item) {
  if (state.view === "pokemon") {
    return item.types.map((type) => TYPE_META.find((entry) => entry.id === type)?.ko || type).join(" · ");
  }
  const role = ROLE_META.find((entry) => entry.id === item.role)?.ko || item.role;
  return role;
}

function randomizeCurrentView() {
  const meta = state.view === "pokemon" ? TYPE_META : ROLE_META;
  const data = state.data[state.view];
  const next = {};
  meta.forEach((slot) => {
    const candidates = data.filter((item) => matchesFilter(item, slot.id));
    if (candidates.length) {
      next[slot.id] = candidates[Math.floor(Math.random() * candidates.length)].id;
    }
  });
  state.picks[state.view] = next;
  persistPicks();
  render();
}

async function exportCurrentBoard() {
  const meta = state.view === "pokemon" ? TYPE_META : ROLE_META;
  const title = state.view === "pokemon" ? "타입별 최애 포켓몬" : "역할별 최애 등장인물";
  const columns = state.view === "pokemon" ? 6 : 5;
  const cellWidth = 178;
  const cellHeight = 208;
  const gap = 12;
  const padding = 28;
  const headerHeight = 74;
  const rows = Math.ceil(meta.length / columns);
  const canvas = document.createElement("canvas");
  canvas.width = padding * 2 + columns * cellWidth + (columns - 1) * gap;
  canvas.height = padding * 2 + headerHeight + rows * cellHeight + (rows - 1) * gap;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#f6fbff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawExportBackground(ctx, canvas.width, canvas.height);

  ctx.fillStyle = "#183b64";
  ctx.font = "900 34px system-ui, sans-serif";
  ctx.fillText("PK-FAVORITE", padding, 42);
  ctx.font = "800 18px system-ui, sans-serif";
  ctx.fillStyle = "#2f93d9";
  ctx.fillText(title, padding, 68);

  for (const [index, slot] of meta.entries()) {
    const x = padding + (index % columns) * (cellWidth + gap);
    const y = padding + headerHeight + Math.floor(index / columns) * (cellHeight + gap);
    const pickId = state.picks[state.view][slot.id];
    const pick = state.data[state.view].find((item) => String(item.id) === String(pickId));
    await drawExportCard(ctx, { x, y, width: cellWidth, height: cellHeight, slot, pick });
  }

  const link = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);
  link.download = `pk-favorite-${state.view}-${date}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function drawExportBackground(ctx, width, height) {
  ctx.save();
  ctx.globalAlpha = 0.62;
  ctx.strokeStyle = "#d8efff";
  for (let x = 0; x < width; x += 34) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y < height; y += 34) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  ctx.restore();
}

async function drawExportCard(ctx, { x, y, width, height, slot, pick }) {
  roundedRect(ctx, x, y, width, height, 12, "#ffffff", "#b8def7");
  roundedRect(ctx, x, y, width, 34, 12, slot.color, slot.color);
  ctx.fillStyle = slot.color;
  ctx.fillRect(x, y + 18, width, 24);

  ctx.fillStyle = "#ffffff";
  ctx.font = "900 15px system-ui, sans-serif";
  ctx.fillText(slot.ko, x + 12, y + 23);

  ctx.fillStyle = "#eff9ff";
  ctx.beginPath();
  ctx.arc(x + width - 22, y + 18, 8, 0, Math.PI * 2);
  ctx.fill();

  if (pick) {
    const loaded = await loadCanvasImage(pick);
    if (loaded) {
      const { image, sourceIndex } = loaded;
      const maxWidth = width * 0.66;
      const maxHeight = height * 0.48;
      const ratio = Math.min(maxWidth / image.width, maxHeight / image.height, 1.9);
      const drawWidth = image.width * ratio;
      const drawHeight = image.height * ratio;
      ctx.imageSmoothingEnabled = !(pick.types && sourceIndex === 0);
      ctx.drawImage(image, x + (width - drawWidth) / 2, y + 56 + (maxHeight - drawHeight) / 2, drawWidth, drawHeight);
      ctx.imageSmoothingEnabled = true;
    } else {
      drawExportInitials(ctx, initials(pick.name), x + width / 2, y + 104);
    }

    roundedRect(ctx, x + 12, y + height - 42, width - 24, 28, 8, "rgba(24, 59, 100, 0.86)", "rgba(24, 59, 100, 0.86)");
    ctx.fillStyle = "#ffffff";
    ctx.font = "900 14px system-ui, sans-serif";
    drawCenteredText(ctx, pick.name, x + width / 2, y + height - 23, width - 32);
  } else {
    drawExportInitials(ctx, "+", x + width / 2, y + 104);
  }
}

async function loadCanvasImage(item) {
  const urls = [item.image, item.fallbackImage, item.finalFallbackImage].filter(Boolean);
  for (const [sourceIndex, url] of urls.entries()) {
    try {
      const response = await fetch(url, { mode: "cors" });
      if (!response.ok) continue;
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const image = await decodeImage(objectUrl);
      URL.revokeObjectURL(objectUrl);
      return { image, sourceIndex };
    } catch {
      continue;
    }
  }
  return null;
}

function decodeImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function roundedRect(ctx, x, y, width, height, radius, fill, stroke) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 2;
  ctx.stroke();
}

function drawExportInitials(ctx, text, x, y) {
  ctx.beginPath();
  ctx.fillStyle = "#e3f5ff";
  ctx.strokeStyle = "#7cc6f2";
  ctx.lineWidth = 3;
  ctx.arc(x, y, 34, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#183b64";
  ctx.font = "900 24px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y + 1);
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
}

function drawCenteredText(ctx, text, centerX, y, maxWidth) {
  let value = text;
  while (ctx.measureText(value).width > maxWidth && value.length > 2) {
    value = `${value.slice(0, -2)}…`;
  }
  ctx.textAlign = "center";
  ctx.fillText(value, centerX, y);
  ctx.textAlign = "left";
}

function restorePicks() {
  try {
    const saved = JSON.parse(localStorage.getItem("pk-favorite-picks") || "{}");
    state.picks.pokemon = saved.pokemon || {};
    state.picks.people = saved.people || {};
  } catch {
    state.picks.pokemon = {};
    state.picks.people = {};
  }
}

function persistPicks() {
  localStorage.setItem("pk-favorite-picks", JSON.stringify(state.picks));
}

function extractId(url) {
  const match = String(url).match(/\/(\d+)\/?$/);
  return match ? Number(match[1]) : 0;
}

function spriteUrl(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

function homeSpriteUrl(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
}

function officialArtworkUrl(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

function extractCharacterImages(output) {
  const imageByHref = new Map();
  const imageMetaByHref = new Map();
  let order = 0;
  output.querySelectorAll("table").forEach((table) => {
    const rows = Array.from(table.rows || []);
    for (let rowIndex = 1; rowIndex < rows.length; rowIndex += 1) {
      const imageCells = Array.from(rows[rowIndex - 1].cells || []);
      const nameCells = Array.from(rows[rowIndex].cells || []);
      if (!nameCells.length || !imageCells.length) continue;

      nameCells.forEach((cell, cellIndex) => {
        const link = cell.querySelector('a[href^="/wiki/"]:not(.mw-file-description)');
        const image = imageCells[cellIndex]?.querySelector("img");
        const href = link?.getAttribute("href");
        const src = image?.getAttribute("src");
        order += 1;
        if (href && src && isOfficialStaticCharacterImage(src)) {
          const url = absoluteImageUrl(src);
          const width = Number(image.getAttribute("data-file-width") || image.getAttribute("width") || 0);
          const height = Number(image.getAttribute("data-file-height") || image.getAttribute("height") || 0);
          const score = width * height;
          const previous = imageMetaByHref.get(href);
          if (!previous || score > previous.score || (score === previous.score && order > previous.order)) {
            imageMetaByHref.set(href, { order, score, url });
            imageByHref.set(href, url);
          }
        }
      });
    }
  });
  return imageByHref;
}

function absoluteImageUrl(src) {
  if (src.startsWith("//")) return `https:${src}`;
  if (src.startsWith("/")) return `https://bulbapedia.bulbagarden.net${src}`;
  return src;
}

function isOfficialStaticCharacterImage(src) {
  const url = absoluteImageUrl(src);
  return /^https:\/\/archives\.bulbagarden\.net\/media\/upload(?:\/thumb)?\//i.test(url) &&
    /\.(png|jpe?g|webp)(?:$|\?)/i.test(url) &&
    !isSpriteLikeCharacterImage(url);
}

function isSpriteLikeCharacterImage(url) {
  const file = decodeURIComponent(url.split("/").pop() || "").toLowerCase();
  return /(^|[_-])(spr|sprite|od|overworld|icon|menu|field|walk|trainerclass)([_-]|\d|$)/i.test(file) ||
    /^spr[_-]/i.test(file) ||
    /[_-]spr[_-]/i.test(file) ||
    /type[_-]?icon|icon[_-]?type|badge|symbol|mark|emblem|star|diamond|gem|token|stamp/i.test(file);
}

function isSceneLikeCharacterImage(url) {
  const file = decodeURIComponent(url.split("/").pop() || "").toLowerCase();
  return /(stage|showcase|stadium|room|map|location|town|city|route|interior|exterior|building|logo|boxart|screenshot|battlefield|contest|screen|background|scenery|field|arena|card|poster|symbol|badge|emblem|icon|type|concept|sketch|artbook|key art|merch|figure|deck|case|shield|playing cards|production|anime|adventures|chapter|gotcha|party|promo|promotional|group|friends|with|and|pikachu|charizard|blastoise|venusaur|pokemon|pokémon|vs|cutscene|movie|episode|scene|meeting|intro|ending|loses|appears)/i.test(file);
}

function isStandingOfficialArtLikeCharacterImage(url) {
  const file = decodeURIComponent(url.split("/").pop() || "").toLowerCase();
  if (isSceneLikeCharacterImage(url) || isSpriteLikeCharacterImage(url)) return false;
  if (/\d{4}/.test(file)) return false;
  return /(red|green|blue|yellow|gold|silver|crystal|ruby|sapphire|emerald|firered|leafgreen|diamond|pearl|platinum|heartgold|soulsilver|black|white|bw|b2w2|xy|oras|sun|moon|sm|usum|lgpe|swsh|bdsp|legends|arceus|scarlet|violet|sv)/i.test(file);
}

function isOfficialStandingFileTitle(title, record) {
  const file = normalizeImageToken(title);
  const sourceName = normalizeImageToken(record.sourceName);
  const pageTitle = normalizeImageToken(record.pageTitle);
  return (file.includes(sourceName) || file.includes(pageTitle)) &&
    /\.(png|jpe?g|webp)$/i.test(title) &&
    !isSpriteLikeCharacterImage(title) &&
    !isSceneLikeCharacterImage(title) &&
    isStandingOfficialArtLikeCharacterImage(title);
}

function isOfficialStandingImageCandidate(url, width, height, record) {
  const file = normalizeImageToken(decodeURIComponent(url.split("/").pop() || ""));
  const sourceName = normalizeImageToken(record.sourceName);
  const pageTitle = normalizeImageToken(record.pageTitle);
  return width >= 120 &&
    height >= 120 &&
    width / height <= 1.15 &&
    (file.includes(sourceName) || file.includes(pageTitle)) &&
    isOfficialStaticCharacterImage(url) &&
    isStandingOfficialArtLikeCharacterImage(url);
}

function scoreOfficialStandingFileTitle(title, record) {
  const file = normalizeImageToken(title);
  const sourceName = normalizeImageToken(record.sourceName);
  let score = 0;
  if (file.includes(sourceName)) score += 1_000_000;
  if (/(scarlet|violet|sv|legends|arceus|bdsp|swsh|lgpe|usum|sm|oras|xy|b2w2|bw)/i.test(title)) score += 140_000;
  if (/(black white|black2 white2|omega ruby|alpha sapphire|sun moon|ultra sun|ultra moon|sword shield|brilliant diamond|shining pearl|scarlet violet)/i.test(title)) score += 120_000;
  if (/(red|blue|green|yellow|gold|silver|crystal|ruby|sapphire|emerald|diamond|pearl|platinum)/i.test(title)) score += 60_000;
  return score;
}

function normalizeImageToken(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .replace(/[^a-z0-9가-힣]+/g, "");
}

function isExcludedCharacterGame(game) {
  return EXCLUDED_CHARACTER_GAME_PATTERNS.some((pattern) => pattern.test(game)) || !MAINLINE_CHARACTER_GAME_PATTERNS.some((pattern) => pattern.test(game));
}

function titleFromHref(href) {
  return decodeURIComponent(String(href).replace(/^\/wiki\//, "").split("#")[0]).replace(/_/g, " ");
}

async function hydrateOfficialCharacterImages(records) {
  const targets = records.filter((record) => record.pageTitle);
  await mapLimit(targets, 6, async (record) => {
    try {
      const image = await findOfficialStandingImage(record);
      if (image) record.image = image;
    } catch {
      return;
    }
  });
}

async function findOfficialStandingImage(record) {
  const pageImagesUrl = `https://bulbapedia.bulbagarden.net/w/api.php?action=query&format=json&origin=*&prop=images&imlimit=500&titles=${encodeURIComponent(record.pageTitle)}`;
  const pageImagesResponse = await fetch(pageImagesUrl);
  if (!pageImagesResponse.ok) return "";
  const pageImagesPayload = await pageImagesResponse.json();
  const page = Object.values(pageImagesPayload?.query?.pages || {})[0];
  const fileTitles = (page?.images || [])
    .map((image) => image.title)
    .filter((title) => isOfficialStandingFileTitle(title, record))
    .sort((a, b) => scoreOfficialStandingFileTitle(b, record) - scoreOfficialStandingFileTitle(a, record))
    .slice(0, 12);

  const directUrl = await resolveBestImageInfo(fileTitles, record);
  if (directUrl) return directUrl;

  const parseUrl = `https://bulbapedia.bulbagarden.net/w/api.php?action=parse&prop=text&format=json&origin=*&page=${encodeURIComponent(record.pageTitle)}`;
  const parseResponse = await fetch(parseUrl);
  if (!parseResponse.ok) return "";
  const parsePayload = await parseResponse.json();
  return extractOfficialCharacterPageImage(parsePayload?.parse?.text?.["*"], record);
}

async function resolveBestImageInfo(fileTitles, record) {
  if (!fileTitles.length) return "";
  const url = `https://bulbapedia.bulbagarden.net/w/api.php?action=query&format=json&origin=*&prop=imageinfo&iiprop=url|size&titles=${encodeURIComponent(fileTitles.join("|"))}`;
  const response = await fetch(url);
  if (!response.ok) return "";
  const payload = await response.json();
  const candidates = Object.values(payload?.query?.pages || [])
    .map((page) => {
      const info = page?.imageinfo?.[0];
      const directUrl = info?.url || "";
      const width = Number(info?.width || 0);
      const height = Number(info?.height || 0);
      if (!directUrl || !isOfficialStandingImageCandidate(directUrl, width, height, record)) return null;
      return {
        url: directUrl,
        score: scoreOfficialStandingFileTitle(page.title || directUrl, record) + width * height,
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score);
  return candidates[0]?.url || "";
}

function extractOfficialCharacterPageImage(html, record) {
  if (!html) return "";
  const doc = new DOMParser().parseFromString(html, "text/html");
  const firstHeading = doc.querySelector("h2");
  const candidates = [];
  const sourceName = normalizeImageToken(record.sourceName);
  const pageTitle = normalizeImageToken(record.pageTitle);

  doc.querySelectorAll("img").forEach((image, index) => {
    const src = image.getAttribute("src") || "";
    if (!isOfficialStaticCharacterImage(src)) return;

    const url = absoluteImageUrl(src);
    const width = Number(image.getAttribute("data-file-width") || image.getAttribute("width") || 0);
    const height = Number(image.getAttribute("data-file-height") || image.getAttribute("height") || 0);
    const file = normalizeImageToken(decodeURIComponent(url.split("/").pop() || ""));
    const nameMatch = file.includes(sourceName) || file.includes(pageTitle);
    if (!nameMatch) return;
    if (width < 120 || height < 120) return;
    if (width / height > 1.15) return;
    if (!isStandingOfficialArtLikeCharacterImage(url)) return;

    const inLead = firstHeading ? Boolean(image.compareDocumentPosition(firstHeading) & Node.DOCUMENT_POSITION_FOLLOWING) : index < 20;
    const inTable = Boolean(image.closest("table"));
    let score = width * height;

    score += 1_000_000;
    if (inLead) score += 220_000;
    if (inTable) score += 80_000;
    if (width >= 180 && height >= 180) score += 60_000;

    candidates.push({ score, url });
  });

  candidates.sort((a, b) => b.score - a.score);
  return candidates[0]?.score > 0 ? candidates[0].url : "";
}

async function hydrateKoreanPokemonNames(speciesById) {
  const entries = Array.from(speciesById.values());
  await mapLimit(entries, 24, async (entry) => {
    try {
      const response = await fetch(`${SOURCE_URLS.pokemonSpeciesDetail}${entry.id}`);
      if (!response.ok) return;
      const payload = await response.json();
      const koName = payload.names?.find((name) => name.language?.name === "ko")?.name || "";
    if (koName) {
      entry.nameKo = koName;
      entry.name = koName;
      entry.aliases = [];
    }
    } catch {
      return;
    }
  });
}

async function mapLimit(items, limit, worker) {
  const queue = [...items];
  const workers = Array.from({ length: Math.min(limit, queue.length) }, async () => {
    while (queue.length) {
      const item = queue.shift();
      await worker(item);
    }
  });
  await Promise.all(workers);
}

function formatPokemonName(name) {
  return String(name)
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function cleanText(value) {
  return String(value || "")
    .replace(/\[[^\]]+\]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isCharacterLink(name, href, game) {
  if (!name || name.length > 64) return false;
  if (NON_HUMAN_CHARACTER_NAMES.has(name)) return false;
  if (name === "Nurse Joy") return false;
  if (name === "Image" || name === "Pokémon" || name === game) return false;
  if (/^(File|Special|Category|Help|Template|Pokémon \(species\)):/i.test(href.replace("/wiki/", ""))) {
    return false;
  }
  if (/^(Generation|Appendix|List of|Pokémon|Nintendo|Game Freak)$/i.test(name)) return false;
  return true;
}

function classifyPerson(name) {
  if (/Professor|博士/i.test(name)) return "professor";
  for (const [role, names] of Object.entries(ROLE_KEYWORDS)) {
    if (names.includes(name)) return role;
  }
  if (/mom|mother/i.test(name)) return "mother";
  if (/nurse|center ladies/i.test(name)) return "nurse";
  if (/guide|advisor/i.test(name)) return "advisor";
  if (/storage|system|bill|lanette|bebe|amanita|cassius/i.test(name)) return "storage-admin";
  if (/looker|police|officer/i.test(name)) return "international-police";
  return "pokemon-trainer";
}

function normalizePersonRecord(record) {
  const sourceName = record.sourceName || record.nameEn || record.name;
  const aliases = PERSON_KO_ALIASES[sourceName] || [];
  const nameKo = aliases[0] || "";
  return {
    ...record,
    sourceName,
    name: nameKo || sourceName,
    nameEn: sourceName,
    nameKo,
    aliases,
    image: record.image || "",
  };
}

function shouldKeepPerson(record) {
  return Boolean(record.image) &&
    Boolean(record.nameKo) &&
    record.name === record.nameKo &&
    !/[A-Za-z]/.test(record.name) &&
    ROLE_META.some((role) => role.id === record.role);
}

function normalizeKey(name) {
  return String(name)
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function initials(name) {
  return cleanText(name)
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function escapeAttr(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

window.createFallbackAvatar = function createFallbackAvatar(name) {
  const node = document.createElement("div");
  node.className = "avatar-fallback";
  node.textContent = initials(name);
  return node;
};

window.handleImageError = function handleImageError(image, name) {
  const fallbackSrc = image.dataset.fallbackSrc;
  const finalFallbackSrc = image.dataset.finalFallbackSrc;
  if (fallbackSrc && image.src !== fallbackSrc) {
    image.dataset.fallbackSrc = "";
    image.dataset.artStyle = "smooth";
    image.src = fallbackSrc;
    return;
  }
  if (finalFallbackSrc && image.src !== finalFallbackSrc) {
    image.dataset.finalFallbackSrc = "";
    image.dataset.artStyle = "smooth";
    image.src = finalFallbackSrc;
    return;
  }
  image.replaceWith(window.createFallbackAvatar(name));
};
