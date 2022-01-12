'use strict';
let score1 = 0, score2 = 0, score3 = 0;
const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log('Dolpins Won')
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log('Koalas Won');
    }
    else {
        console.log('No One Won');
    }
}
console.log('Dolphins Average Score: ', avgDolphins);
console.log('Koalas Average Score: ', avgKoalas);
checkWinner(avgDolphins, avgKoalas);