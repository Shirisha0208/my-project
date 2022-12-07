// const calcAge = birthYear => 2024 - birthYear
// console.log(calcAge(2001));


//

//creating an arrey//
// const numbers = [2, 5, 8, 1, 14, 20];
// console.log(numbers);

// //arrey methods//

// //1.push method//
// const one = [4, 9, 7, 2, 5, 4]
// console.log(one.push(11));
// console.log(one);


// //2.pop method//
// const two = [3, 4, 5, 6, 12];
// console.log(two.pop(4));
// console.log(two);

// //3.shift method//
// const three = [4, 6, 2, 9, 7, 5];
// console.log(three.shift(0));
// console.log(three);

// //4.unshift//
// const four = [2, 8, 5, 3, 9,];
// console.log(four.unshift(99));
// console.log(four);

// 'use strict';


// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number!';
// console.log(document.querySelector('.message').textContent);


// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

let score = 20;
document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess)


        //when there is no input//
        if (!guess) {
            document.querySelector('.message').textContent = 'No number'


            //when player wins//
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = 'correct Number';

            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = '#60b347';

            document.querySelector('.number').style.width = '30rem';
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        }

        //when guess is wrong
        else if (guess !== secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low';
                score--;
                document.querySelector('.score').textContent = score;

            } else {
                document.querySelector('.message').textContent = 'you lost the game';

                document.querySelector('.score').textContent = 0;
            }
        }







        //     //when guess is too high//
        // } else if (guess > secretNumber) {


        //     if (score > 1) {
        //         document.querySelector('.message').textContent = 'Too high!';
        //         score--;
        //         document.querySelector('.score').textContent = score;

        //     } else {
        //         document.querySelector('.message').textContent = 'you lost the game';
        //         document.querySelector('.score').textContent = 0;
        //     }


        //     //when guess is too low//
        // } else if (guess < secretNumber) {

        //     if (score > 1) {
        //         document.querySelector('.message').textContent = 'Too low!';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = 'you lost the game';
        //         document.querySelector('.score').textContent = 0;
        //     }

        // }
    });

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'start guessing'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})


