//5. Write a function named printBetween that takes in two arguments. Assume they are //integers. This function will return an array of the numbers between those two //arguments.
//Answer:
//1, 7 -> [2, 3, 4, 5, 6]
//[1,2,3,4,5,6,7]

//assume that a is less than b

function printBetween(a, b){
    if (a <= b){
        var start = a;
        var end = b;
    }else {
        var start = b;
        var end = a;
    }
    var listBetween = [];

    for (var i=start+1; i<end; i++){ // i is 2
        listBetween.push(i); //push 2 into listBetween
    }

    return listBetween;
}
