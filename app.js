// THIS & constructors
// function Person(name, dob){
//   this.name = name;
//   this.birthday = new Date(dob);
//   this.calculateAge = () => {
//     const dif = Date.now() - this.birthday.getTime();
//     const age = new Date(dif);
//     return Math.abs(age.getUTCFullYear() - 1970);
//   }
// }


// const gabs = new Person('gabriel', '12-12-1984');
// // const stella = new Person('stella', 30);

// console.log(gabs.calculateAge());

// Built in Constructors
// string
// const name1 = 'Gabriel';
// const name2 = new String('Gabriel');

// name2.likes = 'bar';
// console.log(name2);

// console.log(typeof name2);

// if(name2 === 'Gabriel'){
//   console.log('yes');
// } else {
//   console.log('no');
// }

// // Number
// const num1 = 5;
// const num2 = new Number(5);

// console.log(typeof num2);

// // boolean
// const bool1 = true;
// const bool2 = new Boolean(true);

// console.log(typeof bool2);

// // function
// const getSum1 = (x, y) => {
//   return x + y;
// }

// const getSum2 = new Function('x', 'y', 'return 1 + 1');

// console.log(getSum2(1,2));

// // object
// const john = { 
//   name: 'john'
// }

// const john2 = new Object({name: 'John'});

// console.log(john2);

// // array
// const arr1 = [1,2,3,4];
// const arr2 = new Array(1,2,3,4);

// console.log(arr2)

// // regex
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');

// console.log(re2);

// Object.prototype

function Person(firstName, lastName, dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = () => {

  //   const dif = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(dif);
  //   return ageDate.getUTCFullYear() - 1970;
    
  // }
}

// calculate age
Person.prototype.calculateAge = function() {

  const dif = Date.now() - this.birthday.getTime();
  const ageDate = new Date(dif);
  return ageDate.getUTCFullYear() - 1970;
  
}

// get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

// get married
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
}

const john = new Person('john', 'doe', '12-12-1984');
const mary = new Person('mary', 'lane', 'December 26 1986');

console.log(mary);
console.log(john.calculateAge());
console.log(john.getFullName());
john.getsMarried('lane');
console.log(john.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));