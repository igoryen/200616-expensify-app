import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDHQR8Grd5zQwczQX2YLMTWzDTrvZrQFNo",
    authDomain: "expensify-56ad3.firebaseapp.com",
    databaseURL: "https://expensify-56ad3.firebaseio.com",
    projectId: "expensify-56ad3",
    storageBucket: "expensify-56ad3.appspot.com",
    messagingSenderId: "1022530130730",
    appId: "1:1022530130730:web:7c97ec7e50d009fdf44453",
    measurementId: "G-1KHZ815M2D"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
    name: 'Igor Entaltsev',
    age: 46,
    isSingle: false,
    location: {
        city: 'North York',
        country: 'Canada'
    }
}).then(() => {
    console.log('Data is saved.')
}).catch((error) => {
    console.log('This failed.', error)
});

// database.ref().set('This is my data.');

// database.ref('age').set(46);
// database.ref('location/city').set('Toronto');
database.ref('attributes').set({
    height: 193,
    weight: 90
}).then(() => {
    console.log('Second call worked.')
}).catch((e) => {
    console.log('Things didnt work for the second error', e)
});
