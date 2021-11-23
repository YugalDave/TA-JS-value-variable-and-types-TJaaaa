/* 1. Do the following

1. Declare a variable `user` and take the name using `prompt`. Display the value stored in `user` using `alert`.
2. Now copy the value of `user` into a new variable named `userName`. Log the value of both `user` and `userName` using `console.log`.
3. Declare variable `age` and `isLearning` with value `22` and `true` in the same line. hint: declaring multiplemvariable in one line.
4. Now change the value of `user` to `John` and log the value of both `user` and `userName`.
*/
var user = prompt("Enter your name");
alert(user);
var username = user;
console.log(user);
console.log(username);
var age = 22; var islearning = "true";
user = "Jhon"
console.log(user,username);
/* 2.
Use `prompt` to take two numbers from user and store it in variable `numA` and `numB`. Create a third variable called `sum`, using `+` operator add numA and numB , store it in varible `sum` and using alert display `sum` in browser.
*/
var numA = Number(prompt("Enter first number"));
var numB = Number(prompt("Enter second number"));
var sum = numA + numB;
alert(sum);
// Loops

// 3. Complete the following code to make the output be 0 2 4 6 8 10?

for (let j = 0; j <= 10; j = j + 1){
     if(j % 2 == 0)
 console.log(j);
    }    
// 4. Print the odd numbers from 9 to 1 (both inclusive) using a for loop.
for(let k = 9; k > 0 ; k = k - 1){
    if (k % 2 == 1)
    console.log(k);
}
// 5. Concat all the numbers from 5 to 0 (both inclusive) in descending order using a while loop. (543210)
let w = 5;
while(w >= 0){
    console.log(w);
    w = w - 1;
}
// 6. Concat all the even numbers from 10 to 0 (both inclusive) in descending order using a while loop. (1086420)
let a = 10;
while(a >= 0){
    if(a % 2 == 0){
    console.log(a);
    }
    a = a - 1;
}
// Comparisoin

/* 7. Take two value using prompt and store them in variables `num1` and `num2`. Check whether they are equal or not.

- `alert` true or false base on the entered value.
- if the input value is anything like `true`, `null` or `undefined` alert saying `Enter a valid value`.


Example:

21, 21; // true
"hello", -21; // false

*/
var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");

if(num1 && num2){
    alert("true or false base on the entered value");
}else{
    alert("enter a valid number")
}