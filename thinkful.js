// Task:

//Thinkful - List and Loop Drills: Lists of lists

// You have a two-dimensional list in the following format:

// data = [[2, 5], [3, 4], [8, 7]]
// Each sub-list contains two items, and each item in the sub-lists is an integer.

// Write a function process_data()/processData() that processes each sub-list like so:

// [2, 5] --> 2 - 5 --> -3
// [3, 4] --> 3 - 4 --> -1
// [8, 7] --> 8 - 7 --> 1
// and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.

// For input, you can trust that neither the main list nor the sublists will be empty.

//Solution:

function processData(data){
    let subtraction = []
  
      for(let i = 0;i<data.length; i++){
          data[i].reduce((prev, item) => {
              subtraction.push(prev - item)  
          })
      }
  
  
      let multiplication = subtraction.reduce((prev, item) => {
         return prev * item
      })
      
      return multiplication
}
