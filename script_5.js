const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//Est-ce que tous les livres ont été au moins empruntés une fois ?

let allBooksRented = true;
books.forEach(book => {
  if (book.rented === 0) {
    allBooksRented = false;
  }
});
if (allBooksRented) {
  console.log("Tous les livres ont été au moins empruntés une fois.");
} else {
  console.log("Tous les livres n'ont pas été au moins empruntés une fois.");
}


//Quel est livre le plus emprunté ?

let mostRentedBook = ['','',0];
books.forEach(book => {
  if (book.rented > mostRentedBook[2]) {
    mostRentedBook[0] = book.title;
    mostRentedBook[1] = book.id;
    mostRentedBook[2] = book.rented;
  }
});
console.log(mostRentedBook[0]);



//Quel est le livre le moins emprunté ?

mostRentedBook = ['','',books[0].rented];
books.forEach(book => {
  if (book.rented <= mostRentedBook[2]) {
    mostRentedBook[0] = book.title;
    mostRentedBook[1] = book.id;
    mostRentedBook[2] = book.rented;
  }
});
console.log(mostRentedBook[0]);


//Trouve le livre avec l'ID: 873495 ;

function findExactID(book) {
  return book.id === 873495;
}
console.log(books.find(findExactID));



//Supprime le livre avec l'ID: 133712 ;

function findExactID(book) {
  return book.id === 133712;
}
books.splice(books.findIndex(findExactID), 1);
books.forEach(book => {
  console.log(book);
});


//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
function findExactID(book) {
  return book.id === 133712;
}
books.splice(books.findIndex(findExactID), 1);
books.sort((a, b) => {
  let fa = a.title.toLowerCase(),
      fb = b.title.toLowerCase();

  if (fa < fb) {
      return -1;
  }
  if (fa > fb) {
      return 1;
  }
  return 0;
});
books.forEach((e) => {
  console.log(`${e.title}`);
});
