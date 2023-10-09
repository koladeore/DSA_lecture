// Write two functions that finds the factorial of any number. 
// One should use recursive, the other should just use a for loop

function findFactorialIterative(number) {
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

console.log(findFactorialIterative(5)); //0(n)

function findFactorialRecursive(number) {
  if (number < 2) {
    return 1;
  }
  return number * findFactorialRecursive(number - 1);
}
console.log("recursive", findFactorialRecursive(5)); //0(n) we are calling the function again and again
