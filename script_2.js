number = prompt("De quel nombre veux-tu calculer la factorielle ?");
let result = 1;
while(number !== 0) {
  result = Number(number) * result;
  console.log(result);
  number = number - 1;
} 
console.log("fini");