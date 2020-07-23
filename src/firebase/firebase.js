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
    job: 'Software developer',
    location: {
        city: 'North York',
        country: 'Canada'
    }
}).then(() => {
    console.log('Data is saved.')
}).catch((error) => {
    console.log('This failed.', error)
});

database.ref().update({
    job: 'Manager',
    'location/city': 'North York'
});

// const everything = database.ref();
// everything.remove()
//     .then(() =>  {
//         console.log("Data was removed.")
//     })
//     .catch((error) => {
//         console.log("Did not remove data: " + error.message)
//     });
