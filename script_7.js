function isUpperCase(str) {
  return str === str.toUpperCase();
}

sentence = prompt("Balance ta phrase");

if (sentence.split('').length === 0) {
  console.log("t'es en PLS ?");
} else if ((isUpperCase(sentence)) && (sentence.split('').length !== 0)) {
  console.log("Pwa, calme-toi...");
} else if (sentence.split(" ").includes("Fortnite")) {
  console.log("on s' fait une partie soum-soum ?");
} else if (sentence.split('')[sentence.length - 1] === "?") {
  console.log("Ouais Ouais...");
} else {
  console.log("Balek..");
}






