'use strict'
// MyArray.prototype = new AddMethods();

// let tmp;

// const artifitialArray = new MyArray('test1', 1);
// console.log('ArtifitialArray after creation:', artifitialArray);


// tmp = artifitialArray.push('test2', 200, 300);
// console.log('ArtifitialArray after push:', artifitialArray);
// console.log(`Number of elements after pushing 3x:${tmp}`);


// tmp = artifitialArray.pop();
// console.log('ArtifitialArray after pop:', artifitialArray);
// console.log(`The return value of the .pop() method:${tmp}`);


// console.log('\n.ForEach() method with one argument');
// artifitialArray.forEach(element => {
//     console.log(element);
// });

// console.log('\n.ForEach() method with three arguments');
// artifitialArray.forEach((element, index, array) => {
//     console.log(`[${index}] = ${element}`);
// });

// console.log('---------------------------------------');

// artifitialArray.forEach((element, index, array) => {
//     console.log(array);
// });


// function MyArray(){
//     this.length = 0;

//     for(let i = 0; i < arguments.length; i++){
//         this[this.length] = arguments[i];

//         this.length++;
//     }
// }

// function AddMethods(){

//     this.push = function (){
//         for(let i = 0; i < arguments.length; i++){
//             this[this.length] = arguments[i];

//             this.length++;
//         }
//         return this.length;
//     };

//     this.pop = function (){
//         const lastIndex = --this.length;
//         const lastElement = this[lastIndex];

//         delete this[this.length];

//         return lastElement;
//     };

//     this.forEach = function (f, thisArg){
//         for(let i = 0; i < this.length; i++){
//           f.call(this, this[i], i, this);
//         }
//     };
// }

// const f = function(amt){
// let str = '';
//     if(amt > 0){
//         str += '(';
//         f(--amt);
//     }
// console.log(str)
// return str + ')';
// }

//f(5);


//function pow(n) {
//     if (n > 1) {
//         console.log(n);
//         return n * pow(n - 1);
//     }
//     return 1;
// }

// //console.log(pow(5));

// function minusPow(n) {
//     if (n < 0) {
//       return n * minusPow(n + 1);
//     }
//     return 1;
// }

// console.log(minusPow(-5));

// function logRange(lim1, lim2){

//     if(lim1 < lim2){
//         console.log(`${lim1}, `);
//         logRange(lim1 + 1, lim2);
//     }

//     if(lim1 === lim2){
//         return `${lim1}`
//     }

// }
// //debugger
// console.log(logRange(1, 10));


// function log(...args){
//     const array = ['test1', 20, 72, 'test2'];

//     console.log(args);
//     console.log(array);
//     console.log(...args, ...array);
// }

// log(100,40,'TEST');

// function merge(array, obj){
//     return [...array, obj];
// } 

// function f(array){
// const retArray = [];

// let i = 0;

// if(!Array.isArray(array)){
//     console.error('Аргумент функции не ма')
//     return;
// }

// const setForArr = new Set(array);

// // for(item of setForArr){
// //     retArray[i++] = item;
// // }

// return setForArr;
// }

// console.log(f([10,10,11,11,11]));
// ----------------------------------16.08.20-------------------------------------

// function f(str){
// let count = 0;
//     for(let char of str){
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//             count++;
//         }
//     }

// return count;
// }

// //console.log(f('aaeysiausgflrewiaurthe'));


// function f2(n){
//     for(let i = 0; i < n; i++){
//         if(i % 3 === 0 && i % 5 !== 0){
//             console.log('fizz ');
//         }
//         else if(i % 5 === 0 && i % 3 !== 0){
//             console.log('buzz ');
//         }
//         else if(i % 3 === 0 && i % 5 === 0){
//             console.log('fizzbuzz');
//         }
//         else{
//             console.log(i);
//         }
//     }
// }

//f2(100);


// function f3(...args){
// let arrAghs = [...args];
// let total = 0;
// let count = 0;

//     for(let item of arrAghs){
//         total += item;
//         ++count;
//     }

// return total / count;
// }


// console.log(f3(100, 50));

// function addNum(n){

//     return function (nam){
//         return n + nam;
//     }

// }

// let tmpFunction = addNum(10);

// console.log(tmpFunction(10));

// function calcF(nam1, nam2/*, operator*/){
//     // if(operator === '+'){
//         return nam1 + nam2;
//     // }

//     // if(operator === '-'){
//     //     return nam1 - nam2;
//     // }

//     // if(operator === '*'){
//     //     return nam1 * nam2;
//     // }

//     // if(operator === '/'){
//     //     return nam1 / nam2;
//     // }
// }

// function f5(nam1, nam2, fn){
//     return fn(nam1, nam2);
// }

// console.log(f5(10, 10, calcF));


const obj = {
    method3: function(){
        return 'метод3';
    },
    method2: function(){},
    method1: function(){},

    method1 = 
    // nam2: 1,
    // nam1: nam2,
}

//console.log(obj.method1().method2());
console.log(obj.method1().method2());








































