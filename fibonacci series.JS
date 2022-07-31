// fibonacci series 

function foo (fibonacci){

   var total = 0;
  var b = []

for (i=0;i<fibonacci.length;i++){

 total = total + fibonacci[i];

 b.push( total)

}
return b;

}

console.log(foo([1,2,3,4,5,6,7,8,9,10,11,12]))