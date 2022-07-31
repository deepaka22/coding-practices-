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


palindrome function 

function foo(palindrome){

    var b = [];


  for (i=0;i<palindrome.length;i++){

   var a = palindrome[i].split('').reverse().join('');

   if (palindrome[i]==a){

     b.push( palindrome[i]);

   }

  }
console.log(b);

}

foo (['venkatesan','madam','malayalam','geetha', '142']);

