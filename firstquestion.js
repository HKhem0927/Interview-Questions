//Write a function named greatThanThree that takes in two numbers and returns true if they are both greater than 3 and false if not.
//Answer:

// 1, 2 -> false
// 5,7 -> true
// 3, 3 -> false


function greatThanThree(numOne, numTwo){
    if ((numOne > 3) && (numTwo > 3)) return true;
    else return false;
}