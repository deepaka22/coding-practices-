function foo (dupl){

   let check;
   let b = [];

   for (i=0;i<dupl.length;i++){

if(dupl[i]!==check){

check = dupl[i];
b.push(check)

}

   }
   
 return b ;

}

console.log(foo([1,1,2,2,3,3,3,4,4,4,4,5,5,]));