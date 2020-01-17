const firstName = 'Hunter';
const lastName = 'Hampton';
const fullName = firstName + ' ' + lastName;
const age = '19';

console.group('User Info')
// console.log('firstName', firstName);
// console.log('lastName', lastName);
console.log('fullName', fullName);
console.log('age', age);
console.groupEnd();

const myArray = ['one', 2, 'three']
console.log('myArray:', myArray);
console.log(myArray.length);
console.log(myArray[1]);

myArray[2] = 'kys';
console.log(myArray[2]);


// make 5 colors, log the third

const colors = ['red', 'white', 'blue', 'green', 'purple'];
console.log('Third Color:', colors[2]);
console.log(colors.length);

// string idm 231
const className = 'IDM 231';
console.log(className);

// math

const a = 13
const b = 22
const c = a * b
console.log(c);2

var selected = document.getElementsByClassName('background_1');
var notSelected = document.getElementsByClassName('background_0');

selected.onclick = function(){

    if(selected.className == 'background_1'){
        selected.className = '';
}   else{
    selected.className = 'background_0';

};