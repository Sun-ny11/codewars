//Task

// I'm new to coding and now I want to get the sum of two arrays... 
// Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// Solution:

function arrayPlusArray(arr1, arr2) {
    let sum = 0
    let newAr = arr1.concat(arr2);
    for(let i of newAr){
      sum += i
    }
    return sum
}