/*information = "Yes i check that this is my vairable ok ";
console.log(information);

let name1 = "bilal";

let name2 = "344";

const pin = 1;

let student = {
  name: "Bilal",
  marks: 12,
  date: "13 july",
  sex: "male",
};

student["marks"] = student["marks"] + 25;

const product = {
  pen: "Parker Joker Standard Ct Ball Pen",
  color: "Black",
  Rating: 7002,
  deal: "Deal of the day",
  price: "270",
  mrp: 285,
  disscount: 5,
};

const profile = {
  name: "shrardakhapra",
  posts: 195,
  followers: "5695k",
  following: 4,
};

//OPERATORS
a = 5;
b = 7;
console.log(a, b);
console.log(`Total sum is : `, 6 + 7);

let c = 5;
let d = "5";
console.log(c == d);
c++;
console.log(`Total moduclus is : `, c);
console.log("chekc c and d is equal or not ", c == d);

let bilalage = 28;
let saadage = 27;
let marrriagage = 27;
console.log(marrriagage == 27 ? saadage : bilalage);

let number = prompt("Enter the number");

if (number % 5 === 0) {
  console.log("Yes mam number is divisible by 5");
} else {
  console.log("No mam number is not devisible");
}

let marks = prompt("Enter your makrs to check your grades");

if (marks >= 80 && marks <= 100) {
  console.log("Your grade is A");
} else if (marks >= 70 && marks <= 79) {
  console.log("Your grade is B");
} else if (marks >= 60 && marks <= 69) {
  console.log("Your grade is C");
} else if (marks >= 50 && marks <= 59) {
  console.log("Your grade is D");
} else if (marks >= 0 && marks <= 49) {
  console.log("Your Fail");

  for (let i = 0; i <= 9; i++) {
    console.log("Apna college");
  }
}

let sum = 0;

for (let i = 0; i <= 5; i++) {
  sum = sum + i;
}
console.log(sum);

let name = "Bilal";

for (let i of name) {
  console.log(i);
}

let i = 0;

while (i < 10) {
  i++;
  console.log("The number is " + i);
}

let i = 3;

// do...while loop
do {
  console.log(i);
  i--;
} while (i > 0);

let num = 0,
  sum = 0;

// loop as long as num is 0 or positive
while (num >= 0) {
  // add all positive numbers
  sum += num;

  // take input from the user
  num = parseInt(prompt("Enter a number: "));
}

// last, display sum
console.log(`The sum is ${sum}`);

let ANIMALS = {
  first: "a",
  second: "b",
  third: "c",
  fourth: "d",
};

for (let i in ANIMALS) {
  console.log("Alphabtes is : ", i, "and value ", ANIMALS[i]);
}

//EVEN NUMBERS CODE:
for (i = 2; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log("Even numbers are : ", i);
  }
}

let correctNumber = 18;
let guess = prompt("Enter your correct guess number");
for (let i = 0; i <= 100; i++) {
  if (guess == correctNumber) {
    console.log("Yes you are right");
  } else {
    console.log("No try again");
  }
}

let correctnumber = 18;
let guessnumber = prompt("Enter the correct number");

while (correctnumber != guessnumber) {
  correctnumber = prompt("You enter wrong number");
}
console.log("Yes you enter right guess");

//STRINGS
let sgth = prompt("enter your name");
let symbol = "@";

console.log(`${symbol}${str}${str.length} `);

//LOOP PRACTICES
let num = prompt("Enter a number for table");
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

let family = ["Bilal", "Saad", "Fawad", "Fahad"];

for (let i = 0; i <= family.length; i++) {
  console.log("family members are :", family[3]);
}



let family = ["Bilal", "Saad", "Fawad", "Fahad"];

for(i in family){
  console.log(family[i]);
}



let family = ["Bilal", "Saad", "Fawad", "Fahad"];

for(let i of family){
  console.log(i);
}


let markOfStudents = [23,44,65,87,34,76,97,32,56,43,76,23,87,32,85];
 sum=0;
 for(let i in markOfStudents){

         sum += markOfStudents[i]; 
 }
        let average = sum /markOfStudents.length;
        console.log(average);
 

        let price= [250,645,300,900,50];
 
let percentage = 10;

let result;
let substraction;
for(i=0; i<price.length;i++){

   result = price[i]*(percentage/100);
   price[i]= price[i]-result;
   console.log(price[i]);
}



let price= [250,645,300,900,50];
 



for(i=0; i<price.length;i++){

 let offer = price[i]/10;
  price[i] -= offer;

}
console.log(price);
*/

let price= [250,645,300,900,50];


let newprice = price.map((item)=>{return item /5});
console.log(newprice);