const likedBy = ['Harish', 'Sushmi', 'Renu', 'Sundar', 'Dakshayani', 'Suresh'];
let numberOfLikes = likedBy.length;
if (numberOfLikes === 0) {
    console.log('No one likes this.');
}
else if (numberOfLikes > 0 && numberOfLikes <= 3) {
    console.log(`${likedBy.slice(0, 3).toString()} like this.`);
}
else {
    console.log(`${likedBy.slice(0, 3).toString()} and ${numberOfLikes - 3} others like this.`);
}