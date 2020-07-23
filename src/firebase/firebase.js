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
    age: 45,
    isSingle: false,
    location: {
        city: 'North York',
        country: 'Canada'
    }
});

// database.ref().set('This is my data.');

database.ref('age').set(46);
database.ref('location/city').set('Toronto');