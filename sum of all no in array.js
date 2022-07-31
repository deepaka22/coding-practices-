
//Anonymous function

 var avg = function (){
     var marks =[40,40,40,50];
    let sum = 0;

 for (i=0;i<marks.length;i++){
             sum = sum + marks[i];
     }
    
     console.log(sum);
    }

    avg();

 //IIFE

 (function () {
     var marks =[10,20,40,10];
  let sum = 0;

     for (i=0;i<marks.length;i++){
             sum = sum + marks[i];
     }
     console.log(sum);
 })

 ();

// arrow function 

var a = ()=> {

    var marks =[10,40,30,10];
    let sum = 0;

    for (i=0;i<marks.length;i++){
            sum = sum + marks[i];
    }
    
    console.log(sum);

}
a();

// normal function 

function average (){

var marks = [1,2,3,4,5];
sum = 0;

for (i=0;i<marks.length;i++){
    sum = sum + marks[i];
}

return sum;
}
console.log(average());