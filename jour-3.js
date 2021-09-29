// 1.
var fruits = ['mango', 'lemon', 'blueberry'];

// Access
var ingredients = ['eggs', 'milk', 'butter'];
ingredients[1];
ingredients.indexOf('butter');

// Add and Remove
// 3. 1.
var objects = ['pen', 'book', 'lamp'];
// 3. 2
objects.unshift('chair'); // rajouter au début
// 3. 3
objects.pop(3); // enlever à la fin
// 3. 4
objects.push('laptop'); // ajouter à la fin
// 3. 5
objects.shift(0); // enlever au début

// 4. Order
// 4. 1
var numbers = [4, 10, 8, 12, 6];
// 4. 2
numbers.reverse();
// 4. 3
numbers.sort((a, b) => a - b);

// Boucle
// 5. 1
var total = 0;
var limit = 10;
// 5. 2
for(var i = 0; i <= limit; i++) {
    total = total + i;
}
//    console.log(total);

// 6. 1
// Reverse
// var sentence = 'Hello Konexio!';
// var inversed = "";
// for(var i = 0; i <= sentence.length - 1; i++) {
    // inversed = sentence[i] + inversed;
    // inversed = inversed + sentence[i]; ??!
//}
// console.log(inversed);


// var start = 1;
// var end = 101;
// var iteration;

// var test = 10 % 3;

// boucle nous permet de répéter l'éxécution du code un nombre défini de fois// 
// for (iteration = start; iteration <= end - 1; iteration++) {
    // iteration % 3 retourne le reste de la division sur 3
    // comparaison avec le chiffre 0, si iteration est égal à 0 alors il est un multiple de 3
   //  // if(iteration % 3 === 0) { // si c'est vrai j'affiche 'fizz'
        // console.log('fizz');
    // }//  else { // sinon j'affiche la valeur de l'iteration 
        // console.log(iteration);
    // }// 
// }// 


var limited = 10;
var counter = 0;
var i = 5;

while (i <= limited) {
    i += counter;
    console.log(counter);
}