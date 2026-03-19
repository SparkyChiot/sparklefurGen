const animals = [
  {
    name: "fox",
    body: "fur",
  },
  {
    name: "coyote",
    body: "fur"
  },
  {
    name: "wolf",
    body: "fur"
  },
  {
    name: "house cat",
    body: "fur"
  },
  {
    name: "scottish fold",
    body: "fur"
  },
  {
    name: "sphinx",
    body: "fur"
  },
  {
    name: "maine coon",
    body: "fur"
  },
  {
    name: "lynx",
    body: "fur"
  },
  {
    name: "caracal",
    body: "fur"
  },
  {
    name: "tiger",
    body: "fur"
  },
  {
    name: "lion",
    body: "fur"
  },
  {
    name: "leopard",
    body: "fur"
  },
  {
    name: "sabertooth",
    body: "fur"
  },
  {
    name: "pig",
    body: "hide"
  },
  {
    name: "sheep",
    body: "wool"
  },
  {
    name: "goat",
    body: "fur"
  },
  {
    name: "cow",
    body: "hide"
  },
  {
    name: "horse",
    body: "hide"
  },
  {
    name: "mule",
    body: "hide"
  },
  {
    name: "donkey",
    body: "hide"
  },
  {
    name: "unicorn",
    body: "hide"
  },
  {
    name: "deer",
    body: "hide"
  },
  {
    name: "caribou",
    body: "hide"
  },
  {
    name: "pronghorn",
    body: "fur"
  },
  {
    name: "",
    body: "fur"
  },
];
const palettes = [
  {
    name: "Olive Field",
    colors:["#606C38", "#283618", "#FEFAE0", "#DDA15E", "#BC6C25"],
    tags: ["nature"]
  },
  {
    name: "Ocean Flame",
    colors: ["#780000", "#C1121F", "#FDF0D5", "#003049", "#669BBC"],
    tags: ["nature", "water", "retro"]
  },
  {
    name: "Grassland Sunrise",
    colors: ["#CCD5AE", "#E9EDC9", "#FEFAE0", "#FAEDCD", "#D4A373"],
    tags: ["nature"]
  },
  {
    name: "Gilded Cobalt",
    colors: ["#000814", "#001D3D", "#003566", "#FFC300", "#FFD60A"],
    tags: ["scemo", "nature", "mystical"]
  },
  {
    name: "Cotton Kandi",
    colors: ["#FFAFCC", "#FFC8DD", "#CDB4DB", "#BDE0FE", "#A2D2FF"],
    tags: ["pastel"]
  },
  {
    name: "Strawberry Shortcake",
    colors: ["#F9DBBD", "#FFA5AB", "#DA627D", "#A53860", "#450920"],
    tags: ["pastel", "foodie"]
  },
  {
    name: "Pastel Rainbows",
    colors: ["#FF99C8", "#FCF6BD", "#d0f4de", "#a9def9", "#e4c1f9"],
    tags: ["pastel", "kidcore"]
  },
  {
    name: "Oceanic Sunset",
    colors: ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"],
    tags: ["retro", "nature"]
  },
  {
    name: "Pinkish Poppy",
    colors: ["#edafb8", "#f7e1d7", "#dedbd2", "#b0c4b1", "#4a5759"],
    tags: ["nature", "pastel"]
  },
  ];
  
// return array of selected themes (works)
function getThemeSelection() {
  const randomMode = document.getElementById("randomMode").checked;
  
  if (randomMode) {
    return ["all"];
  }
  
  var checkedboxes = document.querySelectorAll('input[name="theme"]:checked');
  return Array.from(checkedboxes).map(cb=>cb.value);
}

// return array of selected difficulties (works)
function getDifficultySelection() {
  const checkedboxes = document.querySelectorAll('input[name="difficulty"]:checked');
  return Array.from(checkedboxes).map(cb => cb.value);
}

function getQuirkFromSelection(selection) {
  if (selection == "all"){
    return quirks[Math.floor(Math.random() * quirks.length)];
  }
  
  let quirk = quirks.filter(quirks.tags.some(tag => selection.includes(tag))).map(quirk => quirk.name);
  return quirk;
}

function getCuffFromSelection(selection) {
  let cuff = cuffs.filter(cuff.difficulty.some(difficulty => selection.includes(difficulty))).map(cuff => cuff.name);
  return cuff;
}

function getThemeFromSelection(selection) {
  if (selection == ["all"]){
    return themes[Math.floor(Math.random() * themes.length)];
  }
  
  let theme = themes.filter(theme.tags.some(tag => selection.includes(tag))).map(theme => theme.name);
  return theme;
}