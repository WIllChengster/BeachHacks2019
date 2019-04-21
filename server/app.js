var firebase = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://beachhackstim.firebaseio.com"
});


const db = firebase.firestore();

///////
var docRef = db.collection('users').doc('alovelace');

var setAda = docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});


var aTuringRef = db.collection('users').doc('aturing');

var setAlan = aTuringRef.set({
  'first': 'Alan',
  'middle': 'Mathison',
  'last': 'Turing',
  'born': 1912
});





///////////////////////////////// test ^^^


const express = require('express');
const app = express();

//This is to test
// Use = for int and others
//Use : for strings
const example_request = {
    name : "Timothy Nguyen",
    Package_description : "Small size shirts",
    Latitude : 32.4412,
    Longitude : -14.5134,
    Address : "16568 Montego Lane, Tustin California"
    
}


//This is the server that we want user to request in client app
app.get('/yee', function(req, res){
    req.body = example_request;

    //This unpacks the object
    let name = req.body.name
    let Package_description = req.body.Package_description
    let Latitude = req.body.Latitude
    let Longitude = req.body.Longitude
    let Address = req.body.Address

    console.log(name)
    console.log(Package_description)
    console.log(Latitude)
    console.log(Longitude)
    console.log(Address)
 
    res.send( 'Request Complete!')
})

app.listen(3000, () => {
    console.log('listening to port 3000')
} )