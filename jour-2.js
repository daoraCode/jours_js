// 1.
var integer = 102;
var float = 13.9;
console.log(integer, float);

// 2.
var basic = 34;
var stringified = String(basic);
console.log(basic, stringified);

// 3.
var num = 1.5;
var rounded = Math.round(num);
console.log(rounded);

// 4.
var test = 12;
var bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test % bis);
console.log(test ** bis);

// 5.
var test = 143;
var bis = 219;
console.log(test < bis);
console.log(test > bis);
console.log(test <= bis);
console.log(test >= bis);
console.log(test === bis);
console.log(test != bis);
console.log(test !== bis);

// 6.
var limit = 50;
var score = 64;
if (score >= limit) {
  console.log('Ok, good!');
} else {
  console.log('Oh nooo...');
}

// 7.
var password = 'azerty';
if (password.length >= 5) console.log('This password is secured');

// 8.
if (password.length >= 5 && score >= limit) {
  console.log('Everything is good');
} else if (password.length >= 5 || score >= limit) {
  console.log('Something is good');
} else {
  console.log('Nothing is good');
}

// Bonus 1.
var random = 1 + Math.floor(Math.random() * 6);
if (random === 6) {
  console.log('YES, I WIN! :)');
  console.log(random);
} else {
  console.log('SO CLOSED... :(');
  console.log(random);
}

// Bonus 2.
var month = 'January';
switch (month) {
  case 'January':
    console.log('Winter is coming');
    break;
  case 'March':
    console.log('Spring is there');
    break;
  case 'June':
    console.log('This summer');
    break;
  case 'September':
    console.log('Autumn, leaves fall');
    break;
  default:
    console.log('NOTHING :(');
}



// Bonus 3.

var roundedNumber = 3.6;
