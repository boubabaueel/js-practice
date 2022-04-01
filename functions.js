function practice(){
    console.log("coding is great");
}
//below i am calling the function above that is declared
practice();

//parameter
function argument(a,b){
    console.log(a*b);
}
argument(2,8);

//Global Scopes: can be used anywhere

var globalFunction = 12;
// local scopes can be only used within a function

function mylocal(){
    var locals =2;
    console.log(mylocal)
}

// will not work console.log(locals);

function timesten(age ){
    return age * 10
}
console.log(timesten(2))