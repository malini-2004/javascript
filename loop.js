
/*
const birds = ["Parrot", "Dove", "Crow"];

for (let bird of birds) {
  console.log(bird);
}
const name = "Karthi";

for (let ch of name) {
  console.log(ch);
}

/*for in*/
const person={
  name:'Alice',
  age:'25',
  city:'new york',
  
};
for(const key in  person){
  console.log(`${key}:${person[key]}`);
}

/*for each */

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
  console.log(num * 2);  // doubles each number
});

const students={
    name:"John",
    marks:{
        math:90,
        science:89,
        tamil:98,
    }
};
for (let subj in students.marks){
    console.log(subj,students.marks[subj]);
}


/*with destructuring*/
const[a,b,c,]=[10,20,30];
console.log(a);
console.log(b);
console.log(c);

/*skkipping*/
const[second,...rest]=[1,2,3,4,5,];
console.log(second);
console.log(rest);

/*destructuring*/
const user={names:"malu",age:21};
const{names,age}=user;
console.log(names);
console.log(age);

let nam1 = ["Raj", "Naga", "Kumar", "Sita", "Krishna"];

nam1.forEach(nam1 => {
    if (nam1.length > 4) {

        console.log(`${nam1} (Length: ${nam1.length})`);
    }
});


const user2={
    nam2:"giri",
    address:{
        city:"coimbataore",
        state:"Tamilnadu"
    }
};
const{nam2,address: {city,state}}=user2;
console.log(nam2);
console.log(city);
console.log(state);

/*const user1 = {
  name2: "John",
  age: 25
};

// Destructure with renaming
const { name2: username1, age: userage } = user;

console.log(username1); // John
console.log(userage);   // 25 */

const User2={
    name:"Malini",
    age:21
};
function greet({name,age})  {
    console.log(`Hello ${name},you are ${age}year old`)
}
    greet(User2);

  
//callback//
    console.log("start");
    setTimeout(()=>{
    console.log("This runs after8 seconds");
}, 8000);
console.log("End");

/*callback hell/*

 setTimeout(()=> {
  console.log("1 Made tea");
  setTimeout(()=>{
    console.log("2 Toasted bread");
    setTimeout(()=>{
      console.log("3 Fried Egg");
      setTimeout(()=>{
        console.log("4 Served breakfast");

      },4000);

    },3000);

  },2000);

 },1000);*/


let pizzaPromise=new Promise((resolve,reject)=>{
    let pizzaReady=true;
    if(pizzaReady){
        resolve("🍕 Pizza is ready");

    } else{
        reject(" 😔No pizza today");}});
     pizzaPromise
     .then((message)=>{
       console.log("Yay!"+message);
     })
     .then(()=>{
        console.log("Yay! heelo");

     })
     .then(()=>{
        console.log("Yay! heelo next");
     })
      .catch((error)=>{
        console.log("Opps!"+error);
      }); 
      async function getpizza() {
    
    try{
        let message = await pizzaPromise;//wait for resolve/reject
        console.log("Yay!"+message);
    }catch(error){
        console.log("Oops!"+error);
    }
}
getpizza();

//json.string-object to string

const person ={
  name:"malii",
  age:21,
  istudent: true
};

//convert to json string
const jsonstring=JSON.stringify(person);
console.log(jsonString);


      

  




