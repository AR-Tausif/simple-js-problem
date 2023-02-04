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

// Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the remainder would be if she divided the number by 5. Help Sarah write the program.

let number = 119;
let result = number % 5;

console.log(result);


// You get first in class seven. Your friends Alia, Dalia, Salia, Malia, Lilia and Jalaiya- You don't know thier grade of exam. But you also know thier result number. So Write the program with javascript



let numbers = [95, 66, 80, 59, 47, 77];
numbers.unshift(10)
console.log(numbers);

// Module 19 & Milestone 04 problem solvinig start here


// problem solving 01
let fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits.indexOf('Banana'));

let fruits1 = ['Apple', 'Banana', 'Orange'];
fruits1[1] = "Mango";
console.log(fruits1);

var fruits2 = ['Apple', 'Banana', 'Orange'];
fruits2.pop();
console.log(fruits2);
fruits2.push("Watermelon");
console.log(fruits2);

// You and your friends Tom, Jane, Peter and John got their final exam results. Your total score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56 and John’s total score is 40. The grading chart is

// let myFriendsResult = [85, 66, 95, 56, 40];
// if (myFriendsResult[0] >= 90) {
//     console.log('My Score: A+');
// }
// if (myFriendsResult[1] >= 80) {
//     console.log("Tom's Score: A");
// }
// if (myFriendsResult[2] >= 60) {
//     console.log("Tom's Score: B")
// }
// if (myFriendsResult[3] >= 50) {
//     console.log("Jane's Score: C");
// }
// if (myFriendsResult[4] >= 40) {
//     console.log("Peter's score: D")
// }

var bottle = 'water';
var bottleColor = 'yeollow';
var glassPrice = 120;
var penColor = 'blue';
var isExpensive = true;

var tableItems = ['bottle', 'pen', 'mouse', 'sunglass', 'paper'];


let fdResult = 75;

if (fdResult >= 80) {
    console.log("Grade: A");
} else if (fdResult >= 70) {
    console.log("Grade: A-");
} else if (fdResult >= 60) {
    console.log("Grade: B");
} else if (fdResult >= 50) {
    console.log("Grade: C");
} else if (fdResult >= 40) {
    console.log("Grade: D");
} else if (fdResult <= 39) {
    console.log("Grade: F");
} else {
    console.log("Opps");
}

// MODULE 20 PROBLEM SOLVING HERE CODE

// 1. WRITE A FUNCTIION CALLED FOO() WHIICH PRINTS "Foo" AND A FUNCTIONM CALLED BAR() WHICH PJRINTS (BAR). CALL FUNCTIN BAR() INSIDE THE FOO() FUNCTION AFTER PRINTING. WHAT WIILL BE TYHE OUTPUT? nOW CALL THE FOO() TO SEE THE OUTPUT 
function foo() {
    console.log("foo");
    let secondFunc = bar();
    return secondFunc;
}


function bar() {
    console.log("Bar");
}

foo();
bar();