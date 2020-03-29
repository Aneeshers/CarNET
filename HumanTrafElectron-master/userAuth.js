//firebase API config/key
var mainApp = {};
let organization;
var address;
let userAccess = "law";

firebaseConfig = {
    apiKey: "AIzaSyDQm4jUuneS38vvPSjwhCP7JnT4IxQUtT8",
    databaseURL: "https://carnet-e1efe.firebaseio.com",
    projectId: "carnet-e1efe",
    storageBucket: "carnet-e1efe.appspot.com",
    messagingSenderId: "1002956662880",
    appId: "1:1002956662880:web:5f2597bf17eaa7319e3b05",
    measurementId: "G-FSHPMG9M89"
};

//starts firebase


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

db = firebase.firestore();


//stores signIn and signUp buttons in respective vars to listen for click
var signIn = document.getElementById('signIn');
var signUp = document.getElementById('signUp');
var logoutB = document.getElementById('logout');
var signUp2 = document.getElementById('signUp2');

//When user clicks signUP button


function createUser(email,password) {
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
}

signUp.addEventListener('click', e  => {
    var checkBox = document.getElementById('checkBox');
    if(checkBox.checked===true) {
        var nonLawEnforcement = document.getElementById('nonLawEnforcement');
        const email = document.getElementById('user').value;
        const password = document.getElementById('password').value;
        createUser(email,password);
        // Add a new document in collection "users"
        db.collection("users").doc(email).set({
            userAuth: "law"
        })
            .then(function() {
                console.log("User successfully entered!");
            })
            .catch(function(error) {
                console.error("Error writing user: ", error);
            });



        /*var fs = require('fs');
        let rawdata = fs.readFileSync('marketData.json');
        let data = JSON.parse(rawdata);
        console.log(data);
        marketData = data;
        var loc = [-73.822990,42.846260];
        var tempMarket = {
            company: "organization",
            location: loc
        };
        marketData.push(tempMarket);

        var json = JSON.stringify(marketData);
        fs.writeFile('marketData.json', json, function(err, result) {
            if(err) console.log('error', err);
        }); */

    }   else {
        var nonLawEnforcement = document.getElementById('nonLawEnforcement');
        const email = document.getElementById('user').value;
        const password = document.getElementById('password').value;
        organization = document.getElementById('organization').value;
        createUser(email,password);

// Add a new document in collection "users"

        db.collection("users").doc(email).set({
            userAuth: "normal"
        })
            .then(function() {
                console.log("User successfully entered!");
            })
            .catch(function(error) {
                console.error("Error writing user: ", error);
            });

        db.collection("markers").doc(email).set({
            company: organization,
            location: address
        })
            .then(function() {
                console.log("Marker successfully entered!");
            })
            .catch(function(error) {
                console.error("Error writing marker: ", error);
            });


    }
});

//When user clicks signIn button
signIn.addEventListener('click', e => {
    const email = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch(e => console.log(e.message));
});

(function () {
    logOut();
    var uid = null;
    firebase.auth().onAuthStateChanged(firebaseUser => {

        if(firebaseUser) {

            window.location.href='mainWindow.html';
        } else {
            console.log('not logged in');
        }
    });

    function logOut(){
        firebase.auth().signOut();
    }

    mainApp.logOut = logOut;
})();


