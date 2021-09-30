// // 1 - Nombre pairs
// // determination de la limite (47) et du début (11)
// var limitRange = 47;
// var startRange = 11;
// var nb = 0;
// var sum = 0; // variable globale
// // boucle for pour afficher les nombres pairs (0, 2, 4, 6, 8) de 11 à 47
// for (var i = startRange; i < limitRange; i++) {
//   var nb = i; // variable locale
//   if (nb % 2 === 0) {
//     // console.log(i + ' : PAIR');
//     sum = sum + nb;
//   }
// }
// // console.log(sum + ' : Somme de nombre pairs'+ '\n');

// // -------------------------------

// // 2. Nombre impairs
// var limitRange = 588;
// var startRange = 109;
// var newNb = 0;
// var newSum = 0; // variable globale
// // boucle for pour afficher les nombres pairs (0, 2, 4, 6, 8) de 11 à 47
// for (var i = startRange; i < limitRange; i++) {
//   var newNb = i; // variable locale
//   if (newNb % 2 !== 0) {
//     // console.log(i + ' : IMPAIR');
//     newSum = newSum + newNb;
//   }
// }
// // console.log(newSum + ' : Somme de nombre impairs');

// -------------------------------

// 3 - Puissance et racine carrée
// 3. 1 - A l'aide d'une boucle for, boucler a travers le tableau numbers. Remplir le tableau squares avec la puissance 2
// (puissance au carré) de l'élément courant (index i) du tableau numbers.
// 3. 2 - A l'aide d'une autre boucle for, boucler a travers le tableau squares.
// Remplir le tableau roots avec la racine carré de l'élément courant (index i) du tableau squares
var numbers = [1, 2, 3, 4, 5];
// var numbers = [index0, index1, index2, index3, index4];
var squares = []; // tableau vide
var roots = []; // second tableau vide

// for (départ, condition, incrémentation) {
// }

// for(var i = 0; i <= sentence.length - 1; i++) {
// inversed = sentence[i] + inversed;
// }
// partie 1
// for(var i = 0; i < numbers.length; i++) {
//   squares.push((numbers[i] * numbers[i]));
// }
// console.log(squares);
// // partie 2
// for(var i = 0; i < squares.length; i++) {
//   roots.push(Math.sqrt(squares[i]));
// }
// console.log(roots);
// -----------------------------------------------------

// // 4 - Table de multiplication v1
var multiply = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var table = '3';
var operand = 'x';
for (var i = 0; i < multiply.length; i++) {
  console.log(`${table} ${operand} ${multiply[i]} = ${multiply[i] * 3}`);
}


// ## 5 - Table de multiplication v2

// - *Indice: on peut mettre une boucle `for` dans une boucle `for`*
// - A l'aide d'une boucle `for`, afficher les nombres de 0 à 10 (avec `i`)
// - Dans cette boucle `for`, créer une autre boucle `for` (utiliser `j` a la place de `i` en tant qu'index) allant elle aussi de 0 à 10
// - Afficher les tables de multiplications de chaque chiffres de 0 à 10, en sautant une ligne entre chaque tables.
