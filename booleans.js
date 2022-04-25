function trueOrFalse(trueo){
    if(trueo){
        return "yes it's true";
    }

    return "no it's not";
}
console.log(trueOrFalse(true));

function equal(value){
    if (value == 2){
        return "yes";
    }

    return "no";
}
// === strict equality operator
console.log(equal(10))
// inequality operator
function notequal(value){
    if (value != 2){
        return "not equal";
    }
    return "equal";
}
console.log(notequal(4));
console.log(notequal(2));
// !== strict not equal

function greaterThan(value){
    if (value >20){
        return "above 20";
    }
    return " 20 or under";
}
console.log(greaterThan(2));
console.log(greaterThan(23));

// logical and operator
function and(value){
    if(value <= 20 && value >= 10){
        return "yes";
    }
    return "no";
}
console.log(and(15));
console.log(and(1));

function or(value){
    if(value <=3 || value >= 10){
        return "si";
    }
    return "negative";
}
console.log(or(15));
console.log(or(4));

function operator(name){
    if(name <5){
        return "short"
    }
    else{
        return "long"
    }
}
console.log(operator(8));
console.log(operator(2));

function sentence(length){
    if (length <= 4){
        return "okay"
    }
    else if( length <=10){
        return "close"
    }
    else if( length >10){
        return "above"
    }
    else{ return "great"}
    }
    console.log(sentence(2));
    console.log(sentence(5));
    console.log(sentence(12));

//switch statements


