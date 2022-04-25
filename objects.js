let person ={ 
   "name": "jon",
   "age" : 22,
   "friends": 3
};
console.log(person);
// dot notation
var name = person.name;
console.log(name);

//bracket notation
var age = person['age'];
console.log(age);

delete person.friends;
console.log(person);

