// Task
// Remove First and Last Character
// You need to cook pancakes, but you are very hungry.
// As known, one needs to fry a pancake one minute on each side.
// What is the minimum time you need to cook n pancakes,
// if you can put on the frying pan only m pancakes at a time?
// n and m are positive integers between 1 and 1000.

// Solution:

function cookPancakes(n, m) {
  return n > m ? 2 : Math.ceil((n / m) * 2);
}

cookPancakes(3, 2);

// if you have 3 pancakes and m = 2 you cook pancake 1. 2.
// for 1 min you take pancake 2. off replace with pancake 3. wait a minute pancake 1.
// Sis done replace with half done pancake 2. flip pancake 3. and hence 3 minutes.
