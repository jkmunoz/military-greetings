
// Three categories every new recruit will have. 
var newRecruit = {
    name: 'Ryan', 
    rank: 'Private', 
    age: 23,
}

// Conditionals that return statements based on object traits.
if (newRecruit.age < 18) {
    console.log('You are too young for the military!');
} else if (newRecruit.name === 'Ryan') {
    console.log('You are going home!');
} else if (newRecruit.rank === 'Lieutenant') {
    console.log(`*salutes* Lieutenant ${newRecruit.name}, sir.`);
} else if (newRecruit.rank === 'Private' && newRecruit.age > 40) {
    console.log(`What in the almighty have you been doing 
    these past years Private?!`);
} else {
    console.log(`Hello ${newRecruit.rank} ${newRecruit.name}, I cannot wait to celebrate your 
    ${newRecruit.age + 1} birthday this year!`);
}