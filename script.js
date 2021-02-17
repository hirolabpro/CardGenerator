let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randomnumbers = Math.floor(Math.random() * numbers.length);
  return numbers[randomnumbers];
};

let generateRandomType = () => {
  let type = ["diamond", "spade", "heart", "club"];
  let randomtype = Math.floor(Math.random() * type.length);
  return type[randomtype];
};

window.onload = function() {
  document.querySelector(".card").classList.add(generateRandomType());
  document.querySelector(".card").innerHTML = generateRandomNumber();
};