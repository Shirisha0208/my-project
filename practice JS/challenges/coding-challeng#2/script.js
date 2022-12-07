'use strict'

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players:[
        [
            'Neuer',
            'pavard',
            'Martinez',
            'Alaba',
            'Davis',
            'Kimmich',
            'GoretZka',
            'coman',
            'Muller',
            'Gnarby',
            'lewandowski',

        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
            
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels' ],
    date: 'nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
}; 

// 1.
for (const [i, players] of game.scored.entries()){
    console.log(`Goalw ${i + 1}: ${players}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for(const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.


