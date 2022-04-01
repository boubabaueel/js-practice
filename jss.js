function sum(a, b){
    return a + b;
}
console.log(sum (2, 5));

var myName = "bouba"
console.log(myName);

let yourName = 'yourname'
console.log(yourName);

// declaring variable
var myName;
var myBirthday;
var myCOuntry;
//assinging variable
myName= "max";
myBirthday ="june";
myCOuntry= "United States"
console.log(myName)
console.log(myCOuntry)
console.log(myBirthday)

//incramenting numbers
var myVar = 100;
myVar++;
console.log(myVar)

// finding remainder
var remainder;
remainder = 11 % 3;
console.log(remainder)
var z=3;
z+=4; 
console.log(z);

// concatanation
var myString = "we are heading out ";
myString += "to the store";
console.log(myString);

// concatenating strings
var myName = "Boubacar"
var feeling = "my name is " + myName + " and I am fine! ";
console.log(feeling)

// finding lenght of string
nameLength =myName.length
console.log(nameLength)

// Bracket notaion
firstLetterOfName = myName[0]
console.log(firstLetterOfName)

var lastLetterOfName = myName[myName.length-1];
console.log(lastLetterOfName)

// ARRAYS
var myArray = ["array", 2];
console.log(myArray)

// Nested Array
var yourArray =[["array",4], ["hi",3]];
console.log(yourArray)
// ARRAY INDEX
var arrayIndex = [20,30,40];
var findIndex = arrayIndex[2]
console.log(findIndex)
// MODIFY ARRAYS
var originalArray = [10,20,25];
console.log(originalArray)
originalArray[2]= 40;
console.log(originalArray)
//Multiple arrays
var newArray = [[2,4,6], [8,10,12], [9,8,7]]
var multiArray = newArray [1] [1]
console.log(multiArray)
newArray[0]= "string"
console.log(newArray)
//Appending data using push
originalArray.push(101)
console.log(originalArray)
var newwArray= originalArray.pop()
console.log(newwArray)
console.log(originalArray)
//.shift removes first element .pop removes last element
 //.unshift adds element to the beginning