floors = Number((prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")));
let hashtags = 1 ;
let spaces = floors - 1 ;
let space = " ";
let hashtag = "#";
for(let count = 0; count < floors; count++){
  let floor = "";
  for(let count = 0; count < spaces; count++){
    floor += space;
  }
  spaces -= 1;
  for(let count = 0; count < hashtags; count++){
    floor += hashtag;
  }
  hashtags += 1;
  console.log(floor);
}





