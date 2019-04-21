var firebase = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://beachhackstim.firebaseio.com"
});


const db = firebase.firestore();
// const functions = require('firebase-functions');


function addUserInfo(User_name, pkg_desc, addy, lat, long){

    var docRef = db.collection('users').doc(User_name);

    var setUser = docRef.set({
        Name: User_name,
        Package_Description : pkg_desc,
        Address: addy,
        Latitude: lat,
        Longitude: long
    })


}

/*
function getUserInfo(){
    var userID = firebase.auth().currentUser.uid;
    return firebase.database().ref('/users/' + userID).once('value').then(function(snapshot) {
        var username = (snapshot.val() && snapshot.val.username) || 'Anonymous';
    })
}
*/


//This is to reads all information from database 

function ReturnDatabase(){
    db.collection('users').get()
    .then((snapshot) => {

        
     snapshot.forEach((doc) => {
          return doc.data()
     });
     })
     .catch((err) => {
      console.log('Error getting documents', err);
     });

};

//Returns one user and all their respective data.
function ReturnOneUser(User_name){
    var usersRef = db.collection('users').doc(User_name);
    var getDoc = usersRef.get()
        .then(doc => {
            if (!doc.exists) {
            console.log('No such document!');
            } else {
            console.log('Document data:', doc.data());
            console.log('Document address:', doc.get('Address'));
            Name = doc.get(Name)
            Package_Description = doc.get(Package_Description)
            Address = doc.get(Address)
            Latitude = doc.get(Latitude)
            Longitude = doc.get(Longitude)
        }
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
};



// function ReturnOneData(){
//     // db.collection('users').get()
//     // .then((snapshot) => {
//     //  snapshot.forEach((doc) => {
//     //       console.log(doc.id, '=>', doc.data());
//     //  });
//     //  })
//     //  .catch((err) => {
//     //   console.log('Error getting documents', err);
//     //  });
    
//   exports.myFunctionName = functions.firestore

//   .document('users/').onWrite((change, context) => {

//     console.log(change);

//   });

// };

///////////////////////////////// test ^^^


const express = require('express');
const app = express();

//This is to test
// Use = for int and others
//Use : for strings
const example_request = {
    Name : "Matthew Pham",
    Package_description : "medium size shirts",
    Latitude : 32.4412,
    Longitude : -14.5134,
    Address : "16568 Montedsafdsfgo Lane, Tustin California"
    
}


//This is the route that we want user to request in client app
app.get('/yee', function(req, res){
    req.body = example_request;

    //This unpacks the object
    let Name = req.body.Name
    let Package_description = req.body.Package_description
    let Latitude = req.body.Latitude
    let Longitude = req.body.Longitude
    let Address = req.body.Address

    addUserInfo(Name, Package_description, Address, Latitude, Longitude)

    res.send( 'Request Complete!')
})

app.get('/driver/looking', function (req, res) {
    db.collection('users').get()
        .then((snapshot) => {

            let documents = []
            snapshot.forEach((doc) => {

                documents.push(doc.data())
            });
            res.json(documents)

        })
        .catch((err) => {
            res.send('fail')
            console.log('Error getting documents', err);
        });

})


app.post('/package/deliver', (req, res) => {

})

app.listen(3000, () => {
    console.log('listening to port 3000')
} )