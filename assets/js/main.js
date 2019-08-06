$(document).ready(function(){

    //Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyDCdS0fp4d437OnhJqqs4xLWBM-dDusZgo",
        authDomain: "post-points.firebaseapp.com",
        databaseURL: "https://post-points.firebaseio.com",
        projectId: "post-points",
        storageBucket: "",
        messagingSenderId: "112557521327",
        appId: "1:112557521327:web:74e1a7b494c884d9"
      };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    //Reference to database
    var database = firebase.database();

    //global variables
    var redPoints = 0;
    var bluePoints = 0;
    var greenPoints = 0;
    var yellowPoints = 0;
    var redDB = database.ref('redHouse');
    var blueDB = database.ref('blueHouse');
    var greenDB = database.ref('greenHouse');
    var yellowDB = database.ref('yellowHouse');

    //get current point values
    //red
    redDB.on('value', function(snapshot) {
        $("#red-points").text(snapshot.val().redHousePoints);
        redPoints = snapshot.val().redHousePoints;
    }, function (errorObject) {
    console.log("Read House Points failed: " + errorObject.code);
    });
    //blue
    blueDB.on('value', function(snapshot) {
        $("#blue-points").text(snapshot.val().blueHousePoints);
        bluePoints = snapshot.val().blueHousePoints;
    }, function (errorObject) {
    console.log("Read House Points failed: " + errorObject.code);
    });
    //green
    greenDB.on('value', function(snapshot) {
        $("#green-points").text(snapshot.val().greenHousePoints);
        greenPoints = snapshot.val().greenHousePoints;
    }, function (errorObject) {
    console.log("Read House Points failed: " + errorObject.code);
    });
    //yellow
    yellowDB.on('value', function(snapshot) {
        $("#yellow-points").text(snapshot.val().yellowHousePoints);
        yellowPoints = snapshot.val().yellowHousePoints;
    }, function (errorObject) {
    console.log("Read House Points failed: " + errorObject.code);
    }); 

    //event listeners
    //Red House
    //award
    $(document).on("click", "#award-red", function awardRed(){
        event.preventDefault();
        var redNumeric = parseInt(redPoints);
        redNumeric += 5;
        redDB.set({
            redHousePoints: redNumeric
        });
    });

    //deduct
    $(document).on("click", "#deduct-red", function deductRed(){
        event.preventDefault();
        var redNumeric = parseInt(redPoints);
        redNumeric -= 5;
        redDB.set({
            redHousePoints: redNumeric
        });
    });

    //Blue House
    //award
    $(document).on("click", "#award-blue", function awardBlue(){
        event.preventDefault();
        var blueNumeric = parseInt(bluePoints);
        blueNumeric += 5;
        blueDB.set({
            blueHousePoints: blueNumeric
        });
    });

    //deduct
    $(document).on("click", "#deduct-blue", function deductBlue(){
        event.preventDefault();
        var blueNumeric = parseInt(bluePoints);
        blueNumeric -= 5;
        blueDB.set({
            blueHousePoints: blueNumeric
        });
    });

    //Green House
    //award
    $(document).on("click", "#award-green", function awardGreen(){
        event.preventDefault();
        var greenNumeric = parseInt(greenPoints);
        greenNumeric += 5;
        greenDB.set({
            greenHousePoints: greenNumeric
        });
    });

    //deduct
    $(document).on("click", "#deduct-green", function deductGreen(){
        event.preventDefault();
        var greenNumeric = parseInt(greenPoints);
        greenNumeric -= 5;
        greenDB.set({
            greenHousePoints: greenNumeric
        });
    });

    //Yellow House
    //award
    $(document).on("click", "#award-yellow", function awardYellow(){
        event.preventDefault();
        var yellowNumeric = parseInt(yellowPoints);
        yellowNumeric += 5;
        yellowDB.set({
            yellowHousePoints: yellowNumeric
        });
    });

    //deduct
    $(document).on("click", "#deduct-yellow", function deductYellow(){
        event.preventDefault();
        var yellowNumeric = parseInt(yellowPoints);
        yellowNumeric -= 5;
        yellowDB.set({
            yellowHousePoints: yellowNumeric
        });
    });
  });