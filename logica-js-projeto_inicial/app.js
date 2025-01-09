/*alert('Welcome to our website');
let weekday = prompt('What is the day of the week today?');
let saturday = 'Saturday';
let sunday = 'Sunday';
let balance = 500.00;

if (weekday == saturday || weekday == sunday) {
    alert('Have a nice weekend!');
}
else {
    alert("Have a nice week!");
}
let number = prompt('Type a number');

if (number >= 0){
    alert('Positive');
}
else {
    alert('Negative');
}

let points = prompt('Choose a number from 1 to 200');
if (points > 100) {
    alert('Congratulation! You won');
}
else {
    alert('Sorry, try it again! = ( ');
}
alert('Your balance is $' + balance.toFixed(2));

let name = prompt('Please, what is your name?');
alert(`Welcome, ${name}`);*/

/* ****************************
New challenge
***************************** */

/* alert('Welcome to the our counter');
let counter = 0;

//ascending
while(counter < 11){
    counter++;
    if (counter < 11){
        alert(`The counter is ${counter}`);
    };
}
//descending
while(counter > 0){
    counter--;
    if (counter >=0){
        alert(`The counter is ${counter}`);
    };
}

//decreasing from a number gave by the user to zero
userNumber = prompt('Choose a number from 10 to 20');
console.log(`Decreasing from ${userNumber} to zero`)
console.log(userNumber);
while(userNumber > 0){
    userNumber--;
    console.log(userNumber);
}
//increasing from zero to a number gave by the user
newUserNumber = prompt('Choose a number from 0 to 10');
console.log(`Increasing from zero to the choice number ${newUserNumber}`)
consoleNumber = 0;
console.log(consoleNumber);
while(consoleNumber < newUserNumber){
    consoleNumber++;
    console.log(consoleNumber);
} */


//New new challenge

console.log('Welcome');
let myName = 'Gisele';
console.log(`Hello ${myName}`);
alert(`Hello, ${myName}`);
let language = prompt('What is your favorite language?');
console.log(language);
let valor1 = 2;
let valor2 = 4;
let result = valor1+valor2;
let resultMinus = valor1 - valor2;
console.log(`The result from valor1 = ${valor1} add valor2 = ${valor2} is ${result}`);
console.log(`The result from valor1 = ${valor1} subtract valor2 = ${valor2} is ${resultMinus}`);

let age = prompt('How old are you?');
if (age >= 18){
    console.log('Yor are of legal age');
} else {
    console.log('Yor are not of legal age');
}
let number = prompt('Choose any number!');
if (number > 0){
    console.log('It is a Positive number.')
}else if (number < 0){
    console.log('It is a Negative number.')
}else{
    console.log('The number is zero.');
}
let number1 = 0;
while(number1 >=0 && number1 < 11){
console.log(number1);
number1++;
}

let averageGrade = 8;
if (averageGrade >= 7){
    console.log('Aprovado!');
}else{
    console.log('Reprovado! = ( ');
}
let number2 = Math.random();
console.log(number2);

let number3 = parseInt(Math.random() * 10)+1;
console.log(number3);

let number4 = parseInt(Math.random() * 1000)+1;
console.log(number4);


