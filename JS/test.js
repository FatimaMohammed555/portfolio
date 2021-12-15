
let zero =  0 ;
let counter = 3 ;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
//-1
//["Osama", "Elham", "Mazero", "Ahmed"]

let arrReverse = my.reverse();

console.log(arrReverse); // ["Ameer", "Gamal", "Osama", "Elham", "Mazero", "Ahmed"]

console.log(arrReverse.shift()); //Ameer

console.log(arrReverse.shift()); //Gamal

console.log(arrReverse); //["Osama", "Elham", "Mazero", "Ahmed"]


/**************************************************************************************/
//-2
/*
console.log(my.slice("????")); // ["Elham", "Mazero"]
*/

console.log(arrReverse); //["Osama", "Elham", "Mazero", "Ahmed"]
console.log(arrReverse.slice(++zero , counter)); // ["Elham", "Mazero"]

/********************************************************************************************/
//-3
//console.log(); // "Elzero"

console.log(arrReverse); //["Osama", "Elham", "Mazero", "Ahmed"]
let addElmnt = arrReverse.unshift("Elzero");
console.log(addElmnt); //5
console.log(arrReverse); // ["Elzero", "Osama", "Elham", "Mazero", "Ahmed"]
arrReverse.pop();
arrReverse.pop();
arrReverse.pop();
arrReverse.pop();
console.log(arrReverse); //["Elzero"]

/***************************************************************************************************/

//-4
//console.log(); // "rO"
console.log(counter);//3

console.log(arrReverse.slice());






