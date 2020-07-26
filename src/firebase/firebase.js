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

database.ref('notes/-MDBOCHLc5L0GUbdVxkL').remove();

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e)
// });

// setTimeout(() => {
//     database.ref('age').set(48)
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(50)
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log('val: ', val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     });

// database.ref().set({
//     name: 'Igor Entaltsev',
//     age: 46,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'North York',
//         country: 'Canada'
//     }
// }).then(() => {
//     console.log('Data is saved.')
// }).catch((error) => {
//     console.log('This failed.', error)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// const everything = database.ref();
// everything.remove()
//     .then(() =>  {
//         console.log("Data was removed.")
//     })
//     .catch((error) => {
//         console.log("Did not remove data: " + error.message)
//     });
