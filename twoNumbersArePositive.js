// Task:

// Two numbers are positive

// Your job is to write a function, which takes three integers a, b, and c as arguments,
//  and returns True if exactly two of of the three integers are positive numbers (greater than zero),
//   and False - otherwise.

// Solution:

function twoArePositive(a, b, c) {
    let inf = 0
      
    if(a > 0){
      inf += 1
    }
    if(b > 0){
      inf += 1
    }
     if(c > 0){
      inf += 1
    }
    
    return inf == 2
}