//Even Fibonacci numbers:
//Consider the Fibonacci numbers not exceeding 4 million.
//Find the sum of all even Fibonacci numbers

console.log("----------");
console.log("Finding the sum of the even Fibonacci numbers less than 4 millions....");
console.log("----------");
var evenSumFib = function(){
  //Utilizing the Fibonacci formula F(n) = F(n-1) + F(n-2); F(1) = 1, F(2) = 1
  var prevFib1 = 1, prevFib2 = 1;
  var sum = 0, currentFib = 2;
  while(currentFib < 4000000){
    if(currentFib%2 === 0){
      sum += currentFib;
    }
    // console.log(currentFib);
    prevFib2 = prevFib1;
    prevFib1 = currentFib;
    currentFib = prevFib1 + prevFib2;
  }
  console.log("The sum of even Fibonacci numbers less than 4 million is: " + sum);
}
evenSumFib();
console.log("----------");
console.log("Finding the sum of all natural number multiples of 3 or 5 below 1000");
console.log("----------");
var sum3or5Below100 = function(){
  var num = 1, sum = 0;
  while(num < 1000){
    if(num%3 === 0 || num%5 === 0){
      sum+=num;
    }
    num++;
  }
  console.log("The sum of all natural number multiples less than 1000 is: " + sum);
}
sum3or5Below100();
console.log("----------");
console.log("Implementing FizzBuzz...");
console.log("----------");
var fizzBuzz = function(){
  var both = false;
  for(var i = 1; i < 101; i++){
    both = false;
    if(i%3 === 0 && i%5 ===0){
      console.log("FizzBuzz");
      both = true;
    }
    else if (i%3 === 0 && !both) {
      console.log("Fizz");
    }
    else if (i%5 === 0 && !both) {
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
  }
}
fizzBuzz();
console.log("----------");
