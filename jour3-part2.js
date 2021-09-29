// 1 - Nombre pairs
// determination de la limite (47) et du début (11)
var limitRange = 47;
var startRange = 11;
var nb = 0;
var sum = 0; // variable globale
// boucle for pour afficher les nombres pairs (0, 2, 4, 6, 8) de 11 à 47
for (var i = startRange; i < limitRange; i++) {
  var nb = i; // variable locale
  if (nb % 2 === 0) {
    console.log(i + ' : PAIR');
    sum = sum + nb;
  }
}
console.log(sum + ' : Somme de nombre pairs');

// -------------------------------










// 2. Nombre impairs
var limitRange = 588;
var startRange = 109;
var newNb = 0;
var newSum = 0; // variable globale
// boucle for pour afficher les nombres pairs (0, 2, 4, 6, 8) de 11 à 47
for (var i = startRange; i < limitRange; i++) {
  var newNb = i; // variable locale
  if (newNb % 2 !== 0) {
    console.log(i + ' : IMPAIR');
    newSum = newSum + newNb;
  }
}
console.log(newSum + ' : Somme de nombre impairs');

// -------------------------------





// 3 - Puissance et racine carrée
// 3. 1 - A l'aide d'une boucle for, boucler a travers le tableau numbers. Remplir le tableau squares avec la puissance 2 
// (puissance au carré) de l'élément courant (index i) du tableau numbers.
// 3. 2 - A l'aide d'une autre boucle for, boucler a travers le tableau squares. 
// Remplir le tableau roots avec la racine carré de l'élément courant (index i) du tableau squares
var numbers = [1, 2, 3, 4, 5];
var squares = [];
var roots = [];
// for (départ, condition, incrémentation) {
// }
for(var index = numbers[0]; index <= numbers.length ** 2; index++) {
    
    // console.log(index);
}

// -----------------------------------------------------

