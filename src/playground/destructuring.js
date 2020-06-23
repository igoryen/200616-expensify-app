// Array destructuring
const address = [
    '1299 S Juniper Street', 
    'Philadelphia', 
    'Pennsylvania', 
    '19147'
];

const [street, city, state, zip] = address;
console.log(`You are in ${city} ${state}`);

const [, , state2 = 'New York',] = address;
console.log(`You are in ${state2}`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);

//===========================
// Object destructuring
// const person = {
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const { name:firstName = 'Anonymous', age } = person; // if name is undefined, use 'Anonymous'
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location; // temp AS temperature

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name:publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);