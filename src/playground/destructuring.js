const person = {
    name: 'Andrew',
    age: 27,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};

const { name:firstName = 'Anonymous', age } = person; // if name is undefined, use 'Anonymous'
console.log(`${firstName} is ${age}`);

const { city, temp: temperature } = person.location; // temp AS temperature

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name:publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);