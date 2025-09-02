let ma=["1","hello",true];
console.log(ma);

/*const fruits =['apple','banana'];
const newLength = fruits.push('orange');
console.log(fruits);
console.log(newLength);*/



let fruits =["apple","banana"];
let newLength = fruits.unshift("orange");
console.log(fruits);   
console.log(newLength); 

const arr1=[1,2,3];
const arr2=[4,5,6];
const combined= arr1.concat(arr2);
console.log(combined); 
console.log(arr1);


let fruit=["apple","banana","guva"];
let removedElement = fruits.pop();
console.log(fruits);
console.log(removedElement);


let names  =['apple','banana'];
let removedElements = names.shift();
console.log(names);
console.log(removedElement);

console.log(fruits.indexOf('banana'));
console.log(fruits.indexOf('kiwi'));

console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('apple',1));

let animals=["dog","cat","monkey"];
console.log(animals.includes("cat"));
console.log(animals.includes("donkey"));

const users =[
    {id:1, names: 'malu', age:22,active:true},
    {id:2, names: 'varsh', age:33,active:false}

];

const user =users.find(u=> u.id===2);
console.log(users);

const activeUSer =users.find(u=>u.active===false);
console.log(activeUSer);

const num=[1,2,3,4,5,6,7,8,9,10];
const even= num .filter(n=>n%2===0);
console.log(even);

const numb=[1,2,3,4,5,6,7,8,9];
const Odd=numb .filter(n=>n*2+1);
console.log(Odd);

const marks=[40,50,60,49];
const pass=marks.filter(m => m>=50);
console.log(pass);

/*join*/
let cholocate=["milkbar","kikkat","kinderjoy"];
let joined=cholocate.join("$");
console.log(joined);
console.log(typeof joined);

const vegetables=['carrot','beans','tomato','potato'];

console.log(vegetables.slice(1,3));
console.log(vegetables.slice(2));
console.log(vegetables.slice());

let fru=["apple","banana","cherry","orange"];
fru.slice(1,2);
console.log(fru);

let nam=["malu","giri"];
nam.slice(1,0,"malu","karthi");
console.log(nam);
  
let numbers=[6,7,9,22];
let doubled=numbers.map(num=>num*2);
console.log(doubled);
console.log(numbers);

let words=["apple","carrot","potato"];
// use map() to get the length of each word
const word=words.map(m=>m.length)
console.log(word);

// similar to concat() but more readable

const arr6=[1,2,3];
const arr7=[4,6,7];
const combi=[...arr6,...arr7];

let num5=[10,20,30];
let total=numbers.reduce((sum,current))=>sum+current,0);
console.log(total);

/*longeest word*/
const words=["apple","banana","watermelon",];
let longestword=Words.reduce(a,b)=> a.length >=b.length?a :b);


