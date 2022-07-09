//1. named function
function foo(){
var a = 'deepak';

 var b = a.split('').reverse().join('');

 if (a==b){

    console.log('given is palindrom')
}
else{
   console.log ('not a palindrome')
}
return a==b;
}
foo();

//2. Anonymous function 

var pal = function(){

    var a = 'deepak';

    var b = a.split('').reverse().join('');
   
    if (a==b){
   
       console.log('given is palindrom')
   }
   else{
      console.log ('not a palindrome')
   }
   return a==b;

} 

pal();

//3.  IIFE function:

(function () {

var a = 'madam';

var b = a.split('').reverse().join('');

if (a==b){
    console.log('palindrom');
}
else {

console.log('not a palindrome');
}

return a==b;

} )

();

//4. Arrow function:

var a = ()=>{
    var a = 'motor';

var b = a.split('').reverse().join('');

if (a==b){
    console.log('palindrom');
}
else {

console.log('not a palindrome');
}

return a==b;

}

a();