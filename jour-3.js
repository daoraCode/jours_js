// 1.
var fruits = ['mango', 'lemon', 'blueberry'];

// Access
var ingredients = ['eggs', 'milk', 'butter'];
ingredients.indexOf('butter');

// Add and Remove
// 3. 1.
var objects = ['pen', 'book', 'lamp'];
// 3. 2
objects.unshift('chair');
// 3. 3
objects.pop(3);
// 3. 4
objects.push('laptop');
// 3. 5
objects.shift(0);

// 4. Order
// 4. 1
var numbers = [4, 10, 8, 12, 6];
// 4. 2
numbers.reverse();
// 4. 3
numbers.sort((a, b) => a - b);

// Boucle
// 5. 1
//var total = 0;
//var limit = 10;
// 5. 2
//for(var i = 0; i <= limit; i++) {
//    total += i;
//    console.log(total);
//}

// 6. 1
// Reverse
var sentence = 'Hello Konexio!';
for (var i = sentence.length - 1; i >= 0; i--) {
    var str = String(sentence.charAt(i));
}
