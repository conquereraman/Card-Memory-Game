const card = [
  {
    name: "fries",
    img: "Images/fries.jpeg",
  },
  {
    name: "burger",
    img: "Images/burger.jpeg",
  },
  {
    name: "hotdog",
    img: "Images/hotdog.png",
  },
  {
    name: "milkshake",
    img: "Images/milkshake.jpeg",
  },
  {
    name: "icecream",
    img: "Images/icecream.jpeg",
  },
  {
    name: "pizza",
    img: "Images/pizza.jpeg",
  },
  {
    name: "fries",
    img: "Images/fries.jpeg",
  },
  {
    name: "burger",
    img: "Images/burger.jpeg",
  },
  {
    name: "hotdog",
    img: "Images/hotdog.png",
  },
  {
    name: "milkshake",
    img: "Images/milkshake.jpeg",
  },
  {
    name: "icecream",
    img: "Images/icecream.jpeg",
  },
  {
    name: "pizza",
    img: "Images/pizza.jpeg",
  },
];
let cardchosen = [];
let cardchosenids = [];
const cardwon = [];
card.sort(() => 0.5 - Math.random());
const grid = document.querySelector("#grid");
const resultdisplay = document.querySelector("#result");
function createBoard() {
  for (let i = 0; i < card.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "Images/card.jpeg");
    card.setAttribute("data-id", i);
    card.setAttribute("width", "150px");
    card.setAttribute("height", "250px");
    card.addEventListener("click", flip_card);
    grid.appendChild(card);
  }
}
createBoard();
function check() {
  const cards = document.querySelectorAll("img");
  if (cardchosen[0] == cardchosen[1]) {
    cards[cardchosenids[0]].setAttribute("src", "Images/white.jpeg");
    cards[cardchosenids[1]].setAttribute("src", "Images/white.jpeg");
    cards[cardchosenids[0]].removeEventListener("click", flip_card);
    cards[cardchosenids[1]].removeEventListener("click", flip_card);
    cardwon.push(cardchosen);
    cardchosen = [];
    cardchosenids = [];
    // alert("Match");
  } else {
    // alert("No Match");
    cards[cardchosenids[0]].setAttribute("src", "Images/card.jpeg");
    cards[cardchosenids[1]].setAttribute("src", "Images/card.jpeg");
  }
  cardchosen = [];
  cardchosenids = [];
  resultdisplay.innerHTML = cardwon.length;
  if (cardwon.length == card.length / 2) {
    resultdisplay.innerHTML = "Congrats You Have Won The Game";
    alert("You Have Won The Game");
  }
}
function flip_card() {
  const cardid = this.getAttribute("data-id");
  cardchosen.push(card[cardid].name);
  cardchosenids.push(cardid);
  this.setAttribute("src", card[cardid].img);
  if (cardchosen.length == 2) {
    setTimeout(check, 500);
  }
}
