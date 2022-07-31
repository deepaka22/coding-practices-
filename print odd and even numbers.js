//1.normal function:

function odd  (){

    var nos= [1,2,3,4,5,8,56,72,112,9870];


    for (i=0;i<nos.length;i++){

     if (nos[i]%2 == 1){

        console.log(nos[i]+ 'is odd numbers');
     }
       else {
 
       }
    }
   
}

odd ();


//2.namedfunction:

let odd1 = function (){

    var nos= [1,2,3,4,5,8,56,72,112,9870];


    for (i=0;i<nos.length;i++){

     if (nos[i]%2 == 1){

        console.log(nos[i]+ 'is odd numbers');
     }
       else {
 
       }
    }
}

odd1 ();
 
//3..IIEF function:

(function () {

    var nos= [1,2,3,4,5,8,56,72,112,9870];


    for (i=0;i<nos.length;i++){

     if (nos[i]%2 == 1){

        console.log(nos[i]+ 'is odd numbers');
     }
       else {
 
       }
    }
})

();

//4. Arrow function:

var odds2 = ()=> {
    var nos= [1,2,3,4,5,8,56,72,112,9870];


    for (i=0;i<nos.length;i++){

     if (nos[i]%2 == 1){

        console.log(nos[i]+ 'is odd numbers');
     }
       else {
 
       }
    }
}

odds2();