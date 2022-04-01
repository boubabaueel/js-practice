var myArray = [];
var i = 0;
while(i <5){
    myArray.push(i);
    i++
}
console.log(myArray);

var theirArray = [];
for (var i = 0; i<5; i++){
    theirArray.push(i);
}
console.log(theirArray);

do{
    myArray.push(i);
    i++;
} while(i ===0);
console.log(myArray);