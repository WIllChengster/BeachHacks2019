  //https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.7386669,-117.8399826&radius=500&keyword=clothes+donation+place&key=AIzaSyBwjclPeS40gutkt8N4-TbrISt1qFJJzeA
 // var key = 'AIzaSyBwjclPeS40gutkt8N4-TbrISt1qFJJzeA';

 
var axios = require('axios')
var bodyParser = require('body-parser')
var firebase = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://beachhackstim.firebaseio.com"
});


const db = firebase.firestore();

function addUserInfo(User_name, pkg_desc, addy, lat, long){

    var docRef = db.collection('packages').doc();

    var setUser = docRef.set({
        Name: User_name,
        Package_Description : pkg_desc,
        Address: addy,
        Latitude: lat,
        Longitude: long
    })

}



//This is to reads all information from database 

function ReturnDatabase(){
    db.collection('packages').get()
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
    var usersRef = db.collection('packages').doc(User_name);
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



///////////////////////////////// test ^^^


const express = require('express');
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
//This is to test
// Use = for int and others
//Use : for strings
const example_request = {
    Name : "Chanel Mendoza",
    Package_description : "Small size shirts",
    Latitude : 83.1234,
    Longitude : 0.5134,
    Address : "10091 Calgate Road, Tustin California"
    
}


//This occurs when the client puts in a request for their donation to be picked up
app.get('/client/request', function(req, res){
    // req.body = example_request;

    //This unpacks the object
    let Name = req.body.Name
    let Package_description = req.body.Package_description
    let Latitude = req.body.Latitude
    let Longitude = req.body.Longitude
    let Address = req.body.Address

    addUserInfo(Name, Package_description, Address, Latitude, Longitude)

    res.send( {success: true} )
})

//This adds all current clients to the queue so drivers can choose which donation to pick up
app.get('/driver/looking', function (req, res) {
    db.collection('packages').get()
        .then((snapshot) => {
            let documents = []
            snapshot.forEach((doc) => {
                documents.push({id:doc.id ,data:doc.data()})
            });
            res.json(documents)

        })
        .catch((err) => {
            res.send('fail')
            console.log('Error getting documents', err);
        });

})

//This occurs when a driver accepts a request to donate.  This takes the donation's address and finds the closest
//donation center
app.post('/package/deliver', (req, res) => {
    //req.body.lat req.body.long
    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.body.lat + "," + req.body.long}&rankby=distance&keyword=clothes+donation&key=AIzaSyBwjclPeS40gutkt8N4-TbrISt1qFJJzeA`)
    .then(function(axRes){
        console.log(axRes.data)
        res.json({
            destinations: [
                axRes.data.results[0],
                axRes.data.results[1],
                axRes.data.results[2],
        ]})
    })
})


app.listen(3000, () => {
    console.log('listening to port 3000')
} )
/*
// Geocode an address.
googleMapsClient.geocode({
    address: '16568 Montego Way, Tustin, CA'
  }, function(err, response) {
    if (!err) {
      console.log(response.json.results);
    }
  });
*/