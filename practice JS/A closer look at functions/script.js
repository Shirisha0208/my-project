'use strict'

// const bookings = []

// const createBooking = function(
//     flightNum,
//     numPassengers = 1,
//     price = 199 * numPassengers
// ){
//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);

// };
// createBooking('LH123');
// createBooking('LH123', 2 , 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000)
///////////////////////////////////////////////



// ////////////////////////////////////////////////

// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function(str){
//     const [first, ...others] = str.split(' ');
//     return[first.toUpperCase(), ...others].join(' ');
// };

// //higher order function..............
// const transformer = function(str, fn){
//     console.log(`original string: ${str}`);
//     console.log(`transformed string: ${fn(str)} `)
//     console.log(`transformed by: ${fn.name}`)

// }
// transformer('javascript is the best', upperFirstWord)

//functions returning function..............

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     };
// };
// const greeterHey = greet('hey');
// greeterHey('siri');
// greeterHey('laddu');

// greet('hello')('siri')

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('hi')('jonas');
/////////////////////////////////////////////////////////




    
///////////////////////////////////////////////////////////
//the call and apply method........

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings:[],
//    // book: function() {}
//    book(flightNum, name){
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name})
//    },
// };
// lufthansa.book(239, 'jonas Schmedtmann');
// lufthansa.book(635, 'jonas Smith');
// console.log(lufthansa);

// const Eurowings = { 
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// };

// const book = lufthansa.book;

// //call method
// book.call(Eurowings, 23, 'sarah William');
// console.log(Eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//     airline: 'swiss air line',
//     iataCode: 'LX',
//     bookings: [],
// };

// book.call(swiss, 583,'mary Cooper');


// //apply method
// const flightData = [583, 'george Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// //bind method....

// const bookEW = book.bind(Eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'steven william');

// const bookEW23 = book.bind(Eurowings, 23);
// bookEW23('jonas Schmedtmann');
// bookEW23('Martha cooper');
/////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////
//immediately invoked function expression

// const runOnce = function(){
//     console.log('this will never run again');
// }
// runOnce();


// //IIFE
// (function(){
//     console.log('this will never run again');

// }) ();


// (() => console.log('this will also never run again')) ();
//////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////

const secureBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };

};
const booker = secureBooking();
booker();
booker();
booker();

let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2);
    };
};

g();
f();
console.dir(f);

const h = function(){
    const b = 777;
    f = function(){
        console.log(b * 2);
    };
};
h();
f();

//example 2

const boardPassengers = function(n, wait){
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`we are now boarding all ${n} passengers`);
        console.log(`there are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);