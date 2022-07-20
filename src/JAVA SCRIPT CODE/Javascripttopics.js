

//  Variables

var x = 120;
var x = 100;
x =20;
console.log(x);
// 20
let y = 100;
y = 70;
console.log(y);
// 70
const width = 230;
//230

// Operators

//    === , ==, >=, <=, !==
//  +=, -=, *, -, +

// Conditions
// if condition
 if(x ==200){
 console.log("x is correct")
 }else{
    console.log("x is incorrect value")
 }
// if else conditions
if(width >= 70){
console.log("width is greater than 70")
}else if(width < 70){
    console.log("width is less than 70")
}else{
 console.log("width is equal to 70")
}

// width is greater than 70


// switch conditions


iu = 0
let text;
switch (iu) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
console.log(text)
// it is Weekend";
// If we keep  like below , if the value is 4 it return the Soon it is Weekend"; and also same for case 5 also
// case 4:
//   case 5:
//     text = "Soon it is Weekend";
//     break;

let txt;
switch (new Date().getDay()) {
  case 6:
    txt = "Today is Saturday";
    break;
  case 0:
    txt = "Today is Sunday";
    break;
  default:
    txt = "Looking forward to the Weekend";
}
console.log(txt);
// based on => new Date().getDay() this  value output comes.



// ========================  FOR LOOPS =========================

// for , for in , for of


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(i= 0; i <= array.length; i++){
 console.log(i);
}

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let arr = "";
for (let i = 0; i < cars.length; i++) {
  arr += cars[i] + "<br>";
}
console.log(arr);







// *****************************// STRING METHODS //*********************** */

// 1. slice()

const slic = "I am going to college";
 console.log(slic.slice(1, 10));
//  const quizData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  {quizData.slice(num -1,num).map((item) => item)}
//  <button onClick={setData(data + 1)}>Quiz</button>

// when we click on the button the +1 value increases, it show the next string or value.
//  By this method we can change the prop.value of the card .

// 2. subString()

// substring(indexStart)
// substring(indexStart, indexEnd)
const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"

// Displays 'illa' the last 4 characters
let anyString = 'Mozilla'
let anyString4 = anyString.substring(anyString.length - 4)
console.log(anyString4)

// Displays 'zilla' the last 5 characters
let anystring = 'Mozilla'
let anyString5 = anystring.substring(anystring.length - 5)
console.log(anyString5)

// 3. substr() -------- Depricated subStr method
let substr1 = 'Mozilla'
// console.log(substr1.substring(2,5))  // => "zil"
console.log(substr1.substr(2,3))     // => "zil"

// 4. includes()

const students = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,];

const data  = students.includes(6);
console.log(data, " students");
// true

// 5. toUpperCase()

let upper = "JavaScript String toUpperCase() method";
console.log(upper.toUpperCase());

// 6. toLowerCase()

let lower = "JavaScript String toLowerCase() method";
console.log(lower.toLowerCase());
// 


// 7. trim()

let trimtext = " trimming the unwanted spaces                ";
console.log(trimtext.trim());

// 8. concat()
let gfg = 'GFG ';
let connecttxt = " concatenating the two strings or array";
console.log(gfg.concat(connecttxt));

// "GFG  concatenating the two strings or array"

    // Accessing concat method on an object of String passing another object as a parameter

// 9. padStart()
// 10. padEnd()
// 11. Split()
let geeks = 'stands-for-GeeksforGeeks'
  
// Split string on '-'. 
console.log(geeks.split('-'))

// ------------------------------------------------------
function replaceString(oldS, newS, fullS) {
  return console.log(fullS.split(oldS).join(newS))
}
replaceString('World', 'Web', 'Brave New World')

// ["Brave New ", ""] when we split the string and when we pass the particular old string in the method 
  //  => it removes that word from the string and it returns the empty  shown above.

// ["Brave New Web"] and when we join the new value to that string it will updates the latest one .
// ----------------------------------------------------------

// 12. valueOf()

let xyz = 'hello man';
console.log(xyz.valueOf());       // "hello man"
let z = xyz.valueOf();
console.log(z)                 //"hello man"
// z = 'hello world';
// console.log(z)              //"hello world"



// 13. startsWith()
let gks = 'stands-for-GeeksforGeeks';
  
// String stored in geeks
// starts with 'stand'
// Returns "true"
console.log(gks.startsWith('stand'));


// 14. endsWith()
let endingtext = 'stands-for-GeeksforGeeks';
  
// String stored in geeks
// endswith with 'Geeks or s or ks , etc., last letters'

console.log(endingtext.endsWith('stand'));
// Returns "false"
console.log(endingtext.endsWith('ks'));
//true

// 15. search()

const searchtxt = 'Search for the text in the specified'
console.log(searchtxt.search('text'));
// true

// 16. lastIndexOf()

// 17. match()
// 18. replace()

const txtReplace = "screen reader and has disabled PSReadLine for compatibility";
console.log(txtReplace.replace('compatibility', 'search'));
// "screen reader and has disabled PSReadLine for search"

// 19. replaceAll()

const txtreplace = "screen reader and has disabled compatibility PSReadLine for compatibility";
console.log(txtreplace.replaceAll('compatibility', 'search'));
// "screen reader and has disabled search PSReadLine for search"

// 20. charAt()

const charAt = 'charat new features and improvements';
console.log(charAt.charAt(9));
// Returns the character of given index value in string. Returns "w".

// 21. charCodeAt()

const charcode = 'charat new features and improvements';
console.log(charcode.charCodeAt(9));
//  119  =>  "w" 
// This method returns a number that represents the Unicode value of the character at the specified index. 
// This method accepts one argument.

// 22. at()


// 23. localeCompare()
//  It will check the characters and returns ascending order.
// Mainly it will check whether it an special character and compare with local characters. 

//  Example :- 
const items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']


// 24. length()
  const arrlength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const len = arrlength.length;
// length of students 10


// 25. repeat()

// repeat(number) Method: This method returns string with the number of copies of the existing string.
//  This method accepts single parameter number that holds the number of copies that you want for a existing string.

const repeat = "screen"
console.log((repeat.repeat(3)))
// "screenscreenscreen"





// ******************************// ARRAY METHODS // *****************************************

// 1. join()
// The join() method creates and returns a new string by concatenating all of the elements in
//  an array (or an array-like object), separated by commas or a specified separator string. 
// If the array has only one item, then that item will be returned without using the separator.

const a = ['Wind', 'Water', 'Fire'];
a.join();      // 'Wind,Water,Fire'
a.join(', ');  // 'Wind, Water, Fire'
a.join(' + '); // 'Wind + Water + Fire'
a.join('');    // 'WindWaterFire'

function f(a, b, c) {
  const s = Array.prototype.join.call(arguments);
  console.log(s); // '1,a,true'
}
f(1, 'a', true);
//expected output: "1,a,true"
  
  const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

const joinmethod =['improvements', "nfkjnfkj"]
  const matb = "   sai   "
  const num = joinmethod.join(matb)
  console.log(num)
  // "improvements   sai   nfkjnfkj"

// 2. split()

let connectxt = "concatenating the two strings or array";
const g =connectxt.split(' ');
console.log("g",g)
// ["concatenating", "the", "two", "strings", "or", "array"]



// 3. sort()

//  must we have to write a function inside the sort method and calculate the values 
// ==> previous value and the current value and we have to push the values in ascending order.

// without passing any function it will return the 10 is greater than 2 .
//  the sort method only returns in string format. it means 21 is greater than 3. 
// it will take first 2 in 21 and 3 is greater than 2.
// [1, 2, 21, 3, 4, 5, 6, 7, 8, 9]
const numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
// OR //
numbers.sort((a, b) => a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]

// 4. pop()

// It removes the last element of an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
 const popstr = fruits.pop();
console.log(popstr);
// Banana,Orange,Apple // after pop method
// Banana,Orange,Apple,Mango  // before pop method


// 5. push()

// it will add the new element at the end of the array elements.

const pushfruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(pushfruits.push("Kiwi")); 
// > 5 when try get direct the value without assigning to any new array it give 5 index value of array.
console.log(pushfruits); // ["Banana", "Orange", "Apple", "Mango", "Kiwi"]


// 6. splice()

//  here we are removing the specific element from the the list of array elements
//  from particular elements index number to remove the element number.

const fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit); // original fruit elements
let removed = fruit.splice(2, 2, "Lemon", "Kiwi"); 
console.log(fruit); // here we can get the original fruit elements after removing the specific elements.
console.log(removed); // here we can get removed elements from an array.

// ["Banana", "Orange", "Apple", "Mango"] => original array
// ["Banana", "Orange", "Lemon", "Kiwi"] => after splice method
// ["Apple", "Mango"] => removed elements


// 7. shift()

// it will remove the first element from the array.
const person1 = ["Banana", "Orange", "Apple", "Mango"];
 const per = person1.shift();
 console.log(per)   //"Banana"
 console.log(person1) // ["Orange", "Apple", "Mango"]

// 8. unshift()

const phal = ["Banana", "Orange", "Apple", "Mango"];
const mat = phal.unshift("Lemon"); // It will  add the element at the starting of the array
console.log(mat); // it will write the length of the array  => 5
console.log(phal);  // it will write the array after the shift method.
// ["Lemon", "Banana", "Orange", "Apple", "Mango"]

// 9. concat()

// It will add the element to the end of the array
const myArray = ["Emil", "Tobias", "Linus"];
const myChildren = myArray.concat("Peter"); 
console.log(myChildren) ;

// Emil,Tobias,Linus,Peter

// 10. some()

// it will check the value 0 is equal to any of the array.
// minimum 1 value must should be equal to the given value.
//  so it will be returns true.
const array3 = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array3.some(even));
// expected output: true


// ----------------------------------------------------------------
const array4 = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

checkAvailability(array4, 'kela');   // false
checkAvailability(array4, 'banana'); // true
// ----------------------------------------------------------


// 11. every()

const isBelowThreshold = (currentValue) => currentValue < 40;

const array2 = [1, 30, 39, 29, 10, 13];

console.log(array2.every(isBelowThreshold));
// expected output: true

// /----------------------------------------------------------------
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

// ----------------------------------------------------------------

const isSubset = (array1, array2) => array2.every(element => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

// ----------------------------------------------------------------

// 12. forEach()
// 13. map()

const mapmethod = [1,2,3,4,5,6,7,8,9,10,11]

console.log(mapmethod.map((item) => item))
//1 2 3 4 5 6 7 8 9 10 11 


//  14.filter()

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result1 = words.filter(word => word.length > 6);

console.log(result1);
// expected output: Array ["exuberant", "destruction", "present"]


// 15. reduce()

// Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array.
const array7 = [1, 2, 3, 4, 67];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array7.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10


// 16. fill()

// fill(value)
// fill(value, start)
// fill(value, start, end)

const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 3));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]


// 17. indexOf()

// indexOf() is used to fing or get the index values of a perticular element.
//  we can also get the index values using index number by passing as second arguments.

// indexOf(searchElement)
// indexOf(searchElement, fromIndex)
// ----------------------------------------------------------------
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 3));
// expected output: 4
// if there is multiple values in an array, we can find by using index number shown above.

console.log(beasts.indexOf('giraffe'));
// expected output: -1

// ----------------------------------------------------------------

const indices = [];
const array5 = ['a', 'b', 'a', 'c', 'a', 'd'];
const element = 'a';
let idx = array5.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array5.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]

// ----------------------------------------------------------------


// 18. findIndex()

// Array.prototype.findIndex():=
// The findIndex() method returns the index of the first element 
// in an array that satisfies the provided testing function. 
// If no elements satisfy the testing function, -1 is returned.


const array6 = [5, 12, 8, 12, 34, 56];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber)); // returns 3 first element index value.
// expected output: 3

 // If there is no particular satisfying element, -1 is returned.

 const fruits3 = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits3.findIndex(fruit => fruit === "blueberries");

console.log(index); // 3
console.log(fruits3[index]); // blueberries


// 19. reverse()
const employee = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,];

const rev  = employee.reverse();
// reverse of array value
// [18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


// 20. includes()
const stude = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,];

const dataInclude  = stude.includes(6);
console.log(dataInclude, " students");
// true


// 21. find()


// EXAMPLE : 1. find()
// how to find the object in array using function
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
  return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }

// EXAMPLE :2 :-
const result = inventory.find( ({ name }) => name === 'cherries' );

console.log(result) // { name: 'cherries', quantity: 5 }




// 22. flat()
// How to flat array .
const student = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,[1, 2, 3, 4, 5, 6, 7, 8,[1, 2, 3, 4, 5, 6, 7, 8]]]
const flat = student.flat(1);
// if we pass the value 1 it will merge the first sub array  and if we pass 2 it will merge the second sub array.





// OBJECTS  /// -------------------

// => OBJECTS Keys // 
var Obj = {
  Lenovo: "Dell",
  Honor: "OnePlus",
  Samsung: "Lenovo"
};


console.log(Object.keys(Obj).join("|"),"gbduyabuyc");
// "Lenovo|Honor|Samsung"


console.log(Object.keys(Obj));
// ["Lenovo", "Honor", "Samsung"]

//    OBJECTS VALUES //

console.log(Object.values(Obj));
// ["Dell", "OnePlus", "Lenovo"]


// OBJECTS ENTITRIES //
const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"

const obj = { foo: 'bar', baz: 42 };
Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`));
 // "foo: bar", "baz: 42"



//  OBJECTS CREATE NEW OBJECTS WITH USING  Object.create()

//  by using this we can clone the pervious array and we can modify.

 const person = {
  name: "saikumar",
  age: 20,
}

const me = Object.create(person);
me.name = "sanju";
console.log(me)
// [object Object] {
//   age: 20,
//   name: "sanju"
// }



// ************************=>  Object.defineProperties()           *********************//
// The Object.defineProperties() method defines new or modifies existing properties 
// directly on an object, returning the object.

const objectvar = {};

Object.defineProperties(objectvar, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});

console.log(objectvar.property1);
// expected output: 42












// SETS ///    

// It removes the multiple of values in an array.

const Duplicates = ["John", "Peter", "Clark", "Harry", "John", "Alice"];
console.log([...new Set(Duplicates)])
// // Prints: ["John", "Peter", "Clark", "Harry", "Alice"]

//  OR  // 

 // Defining function to get unique values from an array
 function getUnique(array){
  var uniqueArray = [];
  
  // Loop through array values
  for(var value of array){
      if(uniqueArray.indexOf(value) === -1){
          uniqueArray.push(value);
      }
  }
  return uniqueArray;
}

var names = ["John", "Peter", "Clark", "Harry", "John", "Alice"];
var uniqueNames = getUnique(names);
console.log(uniqueNames); // Prints: ["John", "Peter", "Clark", "Harry", "Alice"]




//----------------// JSON.parse() Method //---------------------//

// JSON.parse()  converts a JSON string to a javascript object.

let userInfo = '{"name":"saikumar", "country":"United States"}';

let userInfoObj = JSON.parse(userInfo);
console.log(userInfoObj);

//  Converts to Js object
//  {"name":"saikumar", "country":"United States"}


// -------------------// JSON.stringify() Method //---------------------//

// JSON.stringify() converts a javascript object to a JSON string.

let user = {name :"saikumar", country :"United States"};

let userData = JSON.stringify(user);

console.log(userData);

// Converts  to JSON string

// {"name":"saikumar", "country":"United States"}






