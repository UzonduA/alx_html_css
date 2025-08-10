const cars = ['peugeot', 'toyota', 'mercedes', 'bugatti', 'ferrari'];
console.log(cars [5]);

/*Js Objects*/
const myObj = {
    alive: true,
    name: "Uzondu",
    age: 32,
    Hobbies: ["Eating", "Sleeping", "Running", "Skincare"],
    Beverages: {
        morning: "Tea",
        afternoon: "Malt",
        night: "Milk",
    }

};
console.log(myObj.age);
console.log(myObj.Hobbies[3]);
console.log(myObj.alive);
console.log(myObj["name"]);
console.log(myObj.Beverages.night);


function add (a, b) {

    return a + b;
}
add(23, 89);
console.log(add (3,4));

//string concatenation: means joining two strings using the + operator
const firstName = "Uzondu";
const lastName = "Agbafor";
const fullName = firstName + " " + lastName;
console.log(fullName);

const course = "Computer Science";
const department = "Department of Mathemathics and Engineering";
const ideal = course + " from the " + department;
console.log(ideal);

//string concatenation using template literals `${} ${}`;
const couourse = "Computer Science";
const deparyutmenert = "Department of Mathemathics and Engineering";
const idendeal = `${couourse} from the ${deparyutmenert}`;

console.log(idendeal);

//destructuring of object

/*const person = {name: "John", age: 45};
const {name , age} = person;
console.log(name, age);*/

const person = {
    name: "Uzondu",
    age: 32,
    profession: "Web Developer"
};
const {name, age, profession} = person;
console.log(name, age, profession);
// destructuring arrays, used the 'push' method to add 6 to the array, 'shift' method to remove the first item in the array
const nums = [1, 2, 3, 4, 5]; //initialized an array of numbers 1,2,3,4,5
nums.push(6); //used the push method to add the number 6
const shiftNums = nums.shift(); //used the shift method (which removes the first number from an array list) to remove 1
console.log(nums);
console.log(shiftNums); 

/*
a function that accepts an array of numbers and returns
a new array containing only the even numbers using a loop.*/
function filterEvenNumbers(numbers){ //declaring the function that accepts an array of numbers
    let evenNumbers = []; //even number array
for (let i = 0; i < numbers.length; i++) { //for loop for looping through each number
    if (numbers[i] % 2 === 0){ //if command for identifying even numbers saying if i is divisible % by 2
        evenNumbers.push(numbers[i]);
    }
}
return evenNumbers;
};
let input = [1, 2, 3, 4, 5, 6, 22, 23, 24, 25, 26, 44, 49, 55, 50]; //Value assignment to the array
let evens = filterEvenNumbers(input);// definining even numbers

// Output:
console.log("These are even numbers:", evens);

function getIngredients() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🧀 Ingredients ready.");
      resolve("Ingredients fetched");
    }, 1000); // 1 second delay
  });
}

function makePizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🍕 Pizza is made.");
      resolve("Pizza done");
    }, 2000); // 2 seconds delay
  });
}

function deliverPizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🚴 Pizza delivered!");
      resolve("Delivery complete");
    }, 1500); // 1.5 second delay
  });
}

async function runPizzaRobot() {
  console.log("🤖 Starting pizza robot...");

  await getIngredients();
  await makePizza();
  await deliverPizza();

  console.log("✅ Pizza process complete. Enjoy your meal!");
}

runPizzaRobot();
