// Task
//In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

//Good luck!

//Hint: watch out for side effects.

//Some good reading: MDN Docs about arrays
// Solution:

function withoutLast(arr) {
  return arr.slice(0, -1);
}
cookPancakes(3, 2);

// The lessons here were: read the docs and DON'T MUTATE THE INPUT

// Some katas use the input after you've processed it
// (in this case I made that on purpose),
// mutating it makes the tests fail, so watch out.
