//Write a function named fib that takes an argument n. Assume that n is a //number. And the function returns an array of n numbers of the fibonacci //sequence.
//Answer:
//0 -> []
//1 -> [0]
//2 -> [0,1]
//3 -> [0, 1, 1]
//6 -> [0, 1, 1, 2, 3, 5]

function fib(n){ 
    if (n==0) return [];
    if (n==1) return [0];
    if (n==2) return [0,1];

    var fibList = [0, 1]; 
    for (var i=2; i<n; i++){
        var last = fibList[fibList.length-1];
        var secondToLast = fibList[fibList.length-2];
        fibList.push(last + secondToLast);
    }

    return fibList;
}
