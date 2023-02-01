// Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to help Harry calculate how much money the shopkeeper will return.

let giveMoneyMom = 1000;
let applePrice = 700;
let giveMeShowkeaper = giveMoneyMom - applePrice;
console.log(giveMeShowkeaper);


// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

let math = 75.25,
    biology = 65,
    chemistry = 80,
    physics = 35.45,
    bangla = 99.50;
let allResult = (math + biology + chemistry + physics + bangla) / 5;

console.log(allResult.toFixed(2));

// John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to combine these two strings and print them in one line. Help John write the program. 

let firstLine = "I am going to be";
let lastLine = "an awesome web developer";
let concatOneLine = firstLine + ' ' + lastLine;
console.log(concatOneLine);