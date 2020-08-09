'use strict'

// let baseNam = +prompt('Enter the number to raise to the power');
// let degreeNam = +prompt('Enter the degree to which to raise the number');
// alert(`${baseNam} to the power of ${degreeNam}: ${exponentiation(baseNam, degreeNam)}`);

// let firstNam = +prompt('Enter the first number to compare');
// let secondNam = +prompt('Enter the second number to compare');
// alert(`Of these numbers(${firstNam} & ${secondNam}) more ${bigNam(firstNam, secondNam)}`);

// firstNam = +prompt('Enter the first number to compare');
// secondNam = +prompt('Enter the second number to compare');
// alert(`Of these numbers(${firstNam} & ${secondNam}) less ${fewerNam(firstNam, secondNam)}`);

// console.log(isEven(2));
// console.log(isEven(3));

// const BMW = new Avto('BMW', 'Green', 20);

// console.log(BMW.model);
// console.log(BMW.color);
// console.log(BMW.speed);
// console.log(BMW.isMoving());


// BMW.acceleration(40);
// console.log(BMW.speed);
// console.log(BMW.isMoving());

// BMW.braking(60);
// console.log(BMW.speed);
// console.log(BMW.isMoving());


// Employee.prototype = new User(); //Как бы создание наследования, через свойство 'prototype' функции конструктора


// const firstUser = new User('Andrei', 35, true);
// const firstEmployee = new Employee('Viktor', 30, true, '$1600');

// console.log(firstUser.sayHi());
// console.log(firstEmployee.sayHi());

// const arr = createArray(10);

//logArrayElements(arr);




MyArray.prototype = new ArrayMethods();

const myArr = new MyArray( 10, 12782, 'test', 21, 10928, 'sa');

console.log(myArr);
console.log(myArr.pop());
console.log(myArr.push('last test'));

//myArr.forEach();






function MyArray(){
    this.length = 0;

    for(let i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i];

        this.length++;
    }
}

function ArrayMethods(){
    this.push = function(){
        for(let i = 0; i < arguments.length; i++){
            this[this.length] = arguments[i];
        
            this.length++;
            }
        
            return this.length;
    }    

    this.pop = function(){
        const ret = this[this.length];
        delete this[this.length];
        this.length--;
    
        return ret;            
    }

    this.forEach = function(f){
    
        for(let i = 0; i < arr.length; i++){
            f(this[i])
        }
    }    


}



    // function createArray(length){

    // const arr = new Array();
    
    // for(let i = 0; i < length; i++){
    //     arr[i] = i;
    // }
    
    // return arr;
    // }
    
    // function logArrayElements(arr){
    
    //     for(let i = 0; i < arr.length; i++){
    //         console.log(arr[i]);
    //     }
    // }    

// function User(name, age, isMale){
//     this.name = name;
//     this.age = age;
//     this.isMale = isMale;

//     this.sayHi = function(){
//         return `Hi, my name is ${this.name}`;
//     }
// }

// function Employee(name, age, isMale, salary){
//     this.name = name;
//     this.age = age;
//     this.isMale = isMale;
//     this.salary = salary;
// }


// function Avto(model, color, speed){
//     this.model = model;
//     this.color = color;
//     this.speed = 0;

//     this.isMoving = function(){
//         return this.speed !== 0;
//     }

//     this.acceleration = function(value){
//         this.speed = this.speed + value;
//     }

//     this.braking = function(value){
//         this.speed = this.speed - value;
//     }
// }


// function marry(man, woman) {
//     // woman.husband = man;
//     // man.wife = woman;
  
//     return {
//       father: man,
//       mother: woman
//     }
//   }
  
//   let family = marry({
//     name: "John"
//   }, {
//     name: "Ann"
//   });

// //   console.log(family.father.wife.name);
//   console.log(family.mother.name);

// //   console.log(family.mother.husband.name);
//   console.log(family.father.name);

// function exponentiation(base, degree = 1){

//     let result = base;

//     for(let i = 1; i < degree; i++){
//         result *= base;
//     }

//     return result;
// }

// function bigNam(firstNam, secondNam){
//     return firstNam > secondNam ? firstNam : secondNam;
// }

// function fewerNam(firstNam, secondNam){
//     return firstNam > secondNam ? secondNam : firstNam;
// }

// function isEven(nam){
//     return nam % 2 === 0;
// }
