//4. Write a function named printEvenBetween that takes in two numbers and will return an //array of all the even numbers between the given two numbers.

//Answer:

function printEvenBetween(numOne,numTwo){
	  if (numOne<=numTwo){
        var start=numOne;
	      var end= numTwo;
    }else {
       var start=numOne;
       var end=numTwo;
      }
  var listEvenBetween= [];
    for (var i=numOne+1; i<numTwo; i++){ 
        if(i % 2 == 0) listEvenBetween.push(i);
    }
    return listEvenBetween;
  }
