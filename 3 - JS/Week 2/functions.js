// =============== Exercise 1 ===================

const checkOddEven = function (num) {
  if (num % 2 === 0) {
    console.log("even!");
  } else {
    console.log("odd!");
  }
};

checkOddEven(2);
checkOddEven(67);

//================= Exercise 2 =====================

const raisePrompt = function (mainNum, guess) {
  let guessPromt;
  if (guess > mainNum) {
    guessPromt = prompt("Too high, try again!");
    raisePrompt(mainNum, guessPromt);
  } else if (guess < mainNum) {
    guessPromt = prompt("Too low, try again!");
    raisePrompt(mainNum, guessPromt);
  } else if (guess == mainNum) {
    alert(`You did it, the magic number was ${mainNum}`);
  }
};

const randomNum = function (num) {
  return Math.floor(Math.random() * num) + 1;
};

const higherOrLower = function () {
  const random = randomNum(10);
  const guess = prompt("please choose a number from 1 to 10");
  console.log(random, guess);
  raisePrompt(random, guess);
};

higherOrLower();

//======================== Exercise 3 ====================

// - if the number is divisible by 3 print "Fizz"
// - if the number is divisible by 5 print "Buzz"
// - if the number is divisible by 3 AND 5 print "FizzBuzz"
// - else print the number.

const fizzBuzz = function (num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(num);
  }
};

fizzBuzz(2);
fizzBuzz(6);
fizzBuzz(10);
fizzBuzz(15);
