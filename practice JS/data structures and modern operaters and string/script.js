'use strict';
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
 const openingHours = {
    [weekDays[3]]:{
        open: 12,
        close:22,
    },
    [weekDays[4]]: {
         open: 11,
         close: 23,
    },
    [weekDays[5]]: {
        open: 0,
        close: 24,
    }, 
};
const restaurant = {
    name:'Classico italiano',
    location: 'via Angelo Tavanti 23',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto' ],
    openingHours,
   

    order(starterIndex, mainIndex){
        return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

   orderDelivery({
    starterIndex = 1, 
    mainIndex = 0, 
    time = '20:00',
     address,
    }) {
    console.log(
        "Order received "+this.starterMenu[starterIndex]+" and "+this.mainMenu[mainIndex]+" will be delivered to "+address+" at "+time+""
    );
   },
   orderPasta(ing1, ing2, ing3){
    console.log(`Hear is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`
    );
   },
   orderPizza(mainIngredients, ...otherIngredients){
    console.log(mainIngredients);
    console.log(otherIngredients);
   },
};

//working with Strings part - 3


//split and join
console.log('a+very+nice+string' .split('+'));
console.log('sirisha durgam'.split(' '));

const [firstName, lastName] = 'sirisha durgam'.split(' ');

const newName = ['ms.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalization = function(name){
    const names = name.split(' ');
    const namesUpper = [];

    for (const n of names){
       namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(' '));
    

}
capitalization('jessica ann smith davis')
capitalization('jonas schmedtmann')

//padding
const message = 'go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '/'));
console.log(message.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function(number){
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}
console.log(maskCreditCard(7464830));
console.log(maskCreditCard(8474903548398));
console.log(maskCreditCard('98375469274847'));

//repeat
const message2 = 'bad waether... all departues delayed...';
console.log(message2.repeat(5));

const planesInLIne = function(n){
    console.log(`there are ${n} planes in line${'+'.repeat(n)}`);
};
planesInLIne(5);
planesInLIne(3);
planesInLIne(12);






















///////////////////////////////////////////////////////////////////////

// //working with String part -2 

// const airline = 'TAP air portugal'

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //fix capitalization in name
// const passenger = 'jonas';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);


// //Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// // const normalizedEmail = trimmedEmail.toLowerCase();
// const normalization = loginEmail.toLowerCase().trim();
// console.log(normalization);
// console.log(email === normalization);

// //Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')){
//     console.log('part of the new Arirbus family');
// }

/////////////////////////////////////////////////////////////////////










/////////////////////////////////////////////////////////////////////

// 1. working with strings part - 1

// const airline = 'TAP air portugal'
// const plane = 'A320'

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);

// console.log('B737' [0]);
// console.log(airline.length);
// console.log('3737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7))

// console.log(airline.slice(airline.indexOf('')));
// console.log(airline.slice(airline.lastIndexOf('')))

// console.log(airline.slice(1, -1));
// console.log(airline.slice(-2));

// const checkMiddleSeat = function(seat) {
//     const s = seat.slice(-1);
//     if(s === 'B' || s === 'E') console.log('you got the middle seat');
//     else console.log('you got lucky');

// }
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
/////////////////////////////////////////////////////////////////







/////////////////////////////////////////////////////////
// const ordersSet = new Set( [
//     'pasta',
//     'pizza',
//     'pizza',
//     'Risotto',
//     'pasta',
//     'pizza',
// ]);
// console.log(ordersSet);

// console.log(new Set('jonas'));

// console.log(ordersSet.size);

// console.log(ordersSet.has('pizza'));
// console.log(ordersSet.has('Bread'));

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear();
// console.log(ordersSet);

// for(const order of ordersSet) console.log(order);
    
// //Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log( new Set(staff).size);

// console.log( new Set('sirishaDurgam').size);
//////////////////////////////////////////////////////////////







//////////////////////////////////////////////////////////////////
// //property keys
// const properties = Object.keys(openingHours);
// console.log(properties);

//  let openStr = "we are open on "+properties.length+" days:"
//  for (const day of properties){
//     openStr =openStr + `${day},`
//  }
//  console.log(openStr)

//  //property values
//  const value = Object.values(openingHours);
//  console.log(value);

//  //Entire value
//  const entry = Object.entries(openingHours);
// //  console.log(entry);

// for(const [key, {open, close}] of entry){
//     console.log(`on ${key} we open at ${open} and close at ${close}`);
// }
//////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
//optional chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open);

// //with optional chaining 
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// //Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for(const day of days){
//     const open = restaurant.openingHours[day]?.open ?? 'closed';
//     console.log(`on ${day},we open at ${open}`);
// }

// //method
// console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'method does not exist');

// //Arrays
// const users = [{name: 'jonas', email: 'siri@gmail.com'}];
// // const users = [];
// console.log(users[0]?.name ?? 'user array empty');

// if(users.length > 0) console.log(users[0].name);
// else console.log('users array empty');
//////////////////////////////////////////////////////////



//////////////////////////////////////////////////
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for(const item of menu.entries()){
//     console.log(`${item[0] + 1}: ${item[1]}`)
// }
////////////////////////////////////////////////




////////////////////////////////////////////////
// const rest1 = {
//     name: 'capri',
//     numGuess: 0,
// };
// const rest2 = {
//     name: 'la piazza',
//     owner: 'Giovanni Rossi',
// };
// //OR assignment operator
// // rest1.numGuess = rest1.numGuess || 10;
// // rest2.numGuess = rest2.numGuess || 10;
// // rest1.numGuess ||= 10;
// // rest2.numGuess ||= 10;

// //nullish assignment operator (null or undefined)
// rest1.numGuess ??= 10;
// rest2.numGuess ??= 10;

// //AND assignment operator
// rest1.numGuess = rest1.owner && '<ANONYMOUS>';
// rest2.numGuess = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2 .owner &&= '<ANONYMOUS>';
// console.log(rest1);
// console.log(rest2); 
///////////////////////////////////////////////////






////////////////////////////////////////////////////
// restaurant.numGuess = 0;
// const guess = restaurant.numGuess || 10;
// console.log(guess);

// //nullish : null and undefined(NOT 0 or '')
// const guessCorrect = restaurant.numGuess ?? 10;
// console.log(guessCorrect);
/////////////////////////////////////////////////////





/////////////////////////////////////////////////////////
// // 1) destructuring 

// //SPREAD, becouse on right side of =
// const arr = [1, 2, ...[3, 4, 5]];
// console.log(arr);

// //REST becouse on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherfood] = [
//     ...restaurant.mainMenu,
//     ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherfood);

// //objects
// const{sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// // 2) functions
// const add = function(...numbers){
// let sum = 0;
// for(let i = 0; i < numbers.length; i++) sum += numbers[i];
// console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(5, 8, 9, 3, 6, 2);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olive', 'spinach');
// restaurant.orderPizza('mushrooms');


// console.log('-----OR-----');
// //Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'jonas');
// console.log('' || 'jonas');
// console.log(true || 0);
// console.log(undefined || null);
 
// restaurant.numGuess = 23;
// const guess1 = restaurant.numGuess ? restaurant.numGuess : 10;
// console.log(guess1);

// const guess2 = restaurant.numGuess || 10;
// console.log(guess2);

// console.log('----AND----');
// console.log(0 && 'jonas');
// console.log(7 && 'jonas');

// console.log('Hello' && 23 && undefined && 'jonas');

// if(restaurant.orderPizza){
//     restaurant.orderPizza('mushrooms', 'spinach')
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')
/////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'sweets'];
// console.log(newMenu);
// console.log(...newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 array
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'jonas';
// const letters = [...str, '', 's.'];
// console.log(letters);
// console.log(...str);


// const ingredients = [
//     // prompt("let's make pasta! Ingredient 1?"),
//     // prompt('Ingredient 2?'),
//     // prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1],
//     ingredients[2]);
//     restaurant.orderPasta(...ingredients);

// //objects
// const newRestaurant = {
//     foundedIn: 199, ...restaurant, founder: 'Guiseppe'
// };
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
/////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////
// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'via del sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
// });
// restaurant.orderDelivery({
//     address: 'via del sole, 21',
//     starterIndex: 1,

// });
// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName, 
//     openingHours: hours,
//     categories: tags,

// } = restaurant;
// console.log(restaurantName, hours, tags);

// //default values
// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};
// ({a, b} = obj);
// console.log(a, b);

// //Nested objects
// // const{ fri } = openingHours;
// // console.log(fri);
// const { fri: {open: o, close: c}} = openingHours;
// console.log(o, c);
////////////////////////////////////////////////////////





//////////////////////////////////////////////////////
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const[x, y, z]= arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values
// const [p=1, q=1, r=1] = [8, 9];
// console.log(p, q, r);

