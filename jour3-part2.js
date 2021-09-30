// ## 1 - Nombre pairs
// // determination de la limite (47) et du début (11)
// var limitRange = 47;
// var startRange = 11;
// var nb = 0;
// var sum = 0; // variable globale
// boucle for pour afficher les nombres pairs (0, 2, 4, 6, 8) de 11 à 47
// for (var i = startRange; i < limitRange; i++) {
//   var nb = i; // variable locale
//   if (nb % 2 === 0) {
//     // console.log(i + ' : PAIR');
//     sum = sum + nb;
//   }
// }
// // console.log(sum + ' : Somme de nombre pairs'+ '\n');

// ## 2. Nombre impairs
// var limitRange = 588;
// var startRange = 109;
// var newNb = 0;
// var newSum = 0; // variable globale
// boucle for pour afficher les nombres pairs (0, 2, 4, 6, 8) de 11 à 47
// for (var i = startRange; i < limitRange; i++) {
//   var newNb = i; // variable locale
//   if (newNb % 2 !== 0) {
//     newSum = newSum + newNb;
//   }
// }
// console.log(newSum + ' : Somme de nombre impairs');

// ## 3 - Puissance et racine carrée
// 3. 1 - A l'aide d'une boucle for, boucler a travers le tableau numbers. Remplir le tableau squares avec la puissance 2
// (puissance au carré) de l'élément courant (index i) du tableau numbers.
// 3. 2 - A l'aide d'une autre boucle for, boucler a travers le tableau squares.
// Remplir le tableau roots avec la racine carré de l'élément courant (index i) du tableau squares
// var numbers = [index0, index1, index2, index3, index4];
// var numbers = [1, 2, 3, 4, 5];
// var squares = []; // tableau vide
// var roots = []; // second tableau vide
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

// ## 4 - Table de multiplication v1
// var multiply = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var table = '3';
// var operand = 'x';
// for (var i = 0; i < multiply.length; i++) {
//   console.log(`${table} ${operand} ${multiply[i]} = ${multiply[i] * 3}`);
// }

// ## 5 - Table de multiplication v2
// - Indice: on peut mettre une boucle `for` dans une boucle `for`*
// - A l'aide d'une boucle `for`, afficher les nombres de 0 à 10 (avec `i`)
// - Dans cette boucle `for`, créer une autre boucle `for` (utiliser `j` a la place de `i` en tant qu'index) allant elle aussi de 0 à 10
// - Afficher les tables de multiplications de chaque chiffres de 0 à 10, en sautant une ligne entre chaque tables.
// var mainOperand = 'x
// for (var i = 0; i < mainArray.length; i++) {
//   for (var j = 0; j < mainArray.length; j++) {
//     console.log(
//       `${mainArray[i]} ${mainOperand} ${arrayToMultiply[j]} = ${
//         mainArray[i] * arrayToMultiply[j]
//       }`
//     );
//   }
// }


// ## 6 - Factorielle v1
// En mathématique, la factorielle d'un nombre est le produit (multiplication) 
// des nombres entiers positifs inférieur ou égal à lui meme. 
// On le note généralement avec un point d'exclamation après le nombre.
// A l'aide d'une boucle `for`, calculer la factorielle de 7.
// var factorial = 7;
// for(var i = 1; i < 7; i++) {
//   factorial = factorial * i;
// }
// console.log(factorial);
// var result = 0;


// ## 7 - Factorielle v2
// En utilisant deux boucles `for`(l'une imbriquée dans l'autre), afficher les factorielles de 0 a 8 inclus.
// - Indice: factorielle de 0 et factorielle de 1 donnent toutes les deux le meme résultat: 1
var factorial = 7;
for(var i = 1; i < 7; i++) {
  var factorial = 1;
    for(var j = 1; j < j; j++) {
    console.log(i);
  }
}
console.log(factorial);






