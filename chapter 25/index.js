let dolphinScore01 = 97, dolphinScore02 = 112, dolphinScore03 = 101;
let koalasScore01 = 109, koalasScore02 = 95, koalasScore03 = 106;
const dolphinAverage = (dolphinScore01 + dolphinScore02 + dolphinScore03) / 3;
const koalasAverage = (koalasScore01 + koalasScore02 + koalasScore03) / 3;

console.log("Dolphine Average: ", dolphinAverage);
console.log("Koala Average: ", koalasAverage);

if (dolphinAverage >= 100 && koalasAverage >= 100) {
    if (dolphinAverage > koalasAverage) {
        console.log("Match Result: Winner is Dolphins");
    }
    else if (koalasAverage > dolphinAverage) {
        console.log("Match Result: Winner is Koalas");
    }
    else {
        console.log("Match Result: Draw");
    }
}
else if (dolphinAverage >= 100 || koalasAverage >= 100) {
    if (dolphinAverage > koalasAverage) {
        console.log("Match Result: Winner is Dolphins");
    }
    else {
        console.log("Match Result: Winner is Koalas");
    }
}
else {
    console.log("Match Result: No Winner");
}