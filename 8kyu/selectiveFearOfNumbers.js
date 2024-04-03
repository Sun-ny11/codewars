//Task
//Selective fear of numbers

// I've got a crazy mental illness. I dislike numbers a lot. 
// But it's a little complicated: The number I'm afraid of depends on which day of the week it is... 
// This is a concrete description of my mental illness:

// Monday --> 12

// Tuesday --> numbers greater than 95

// Wednesday --> 34

// Thursday --> 0

// Friday --> numbers divisible by 2

// Saturday --> 56

// Sunday --> 666 or -666

// Write a function which takes a string (day of the week) and an integer (number to be tested) 
// so it tells the doctor if I'm afraid or not. (return a boolean)

// Solution:

var AmIAfraid = function(day, num){
  
    let week = {
      "Monday": 12,
      "Wednesday": 34,
      "Thursday": 0,
      "Saturday": 56,
    }
  
   if(day == "Tuesday"){
      return num > 95
    }else if(day == "Friday"){
      return num % 2 == 0
    }else if(day == "Sunday"){
      return (num == 666 ||num == -666 ) ? true : false;
    }else {
      return week[day] == num
    }
    
   
}