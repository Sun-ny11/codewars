//Task

//Tail Swap

// You'll be given a list of two strings, and each will contain exactly one colon (":")
// in the middle (but not at beginning or end). The length of the strings, before and after the colon,
// are random.

// Your job is to return a list of two strings (in the same order as the original list), 
// but with the characters after each colon swapped.

// Solution:

function tailSwap(arr) {
    let str = arr.join(" ") // Массив на строку
  
    let indOne = str.indexOf(":")// Индекс первого :
    let iEl = str.indexOf(" ") // Индекс разделения элементов 
    let elOne = str.slice(indOne, iEl) // Значение после :
  
    let indTwo = str.indexOf(":", indOne+1 )// Индекс второго : 
    let elTwo = str.slice(indTwo) // Значение после :
  
    let done = str.slice(0,indOne)+elTwo + str.slice(iEl, indTwo)+elOne
  
    return done.split(" ")
  
  
}