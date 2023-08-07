// Task

// Write a function that takes a single string (word) as argument. 
// The function must return an ordered list containing the indexes of all capital letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

// Solution:

var capitals = function (word) {
    let a = word.split('')
  
    let w = []
    a.filter((item, index) =>{
      if(item === item.toUpperCase()){
        return w.push(index)
      }
    })
    return w
};