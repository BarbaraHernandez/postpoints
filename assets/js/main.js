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

    //get current point values
    var pointsRef = database.ref();
    pointsRef.on('value', function(snapshot) {
        console.log(snapshot.val());
        $("#red-points").text(snapshot.val().redHousePoints);
        redPoints = snapshot.val().redHousePoints;
        $("#blue-points").text(snapshot.val().blueHousePoints);
        bluePoints = snapshot.val().blueHousePoints;
        $("#green-points").text(snapshot.val().greenHousePoints);
        greenPoints = snapshot.val().greenHousePoints;
        $("#yellow-points").text(snapshot.val().yellowHousePoints);
        yellowPoints= snapshot.val().yellowHousePoints;
    }, function(errorObject) {
    console.log("Read House Points failed: " + errorObject.code);
    });
 

    //event listeners
    //Red House
    //award
    $(document).on("click", "#award-red", function awardRed(){
        event.preventDefault();
        var redNumeric = parseInt(redPoints);
        redNumeric += 5;
        database.ref().set({
            redHousePoints: redNumeric
        });
    });

    //deduct
    $(document).on("click", "#deduct-red", function deductRed(){
        event.preventDefault();
        var redNumeric = parseInt(redPoints);
        redNumeric -= 5;
        database.ref().set({
            redHousePoints: redNumeric
        });
    });

    //Blue House
    //award
    $(document).on("click", "#award-blue", function awardBlue(){
        event.preventDefault();
        var blueNumeric = parseInt(bluePoints);
        blueNumeric += 5;
        database.ref().set({
            blueHousePoints: blueNumeric
        });
    });

    //deduct
    $(document).on("click", "#deduct-blue", function deductBlue(){
        event.preventDefault();
        var blueNumeric = parseInt(bluePoints);
        blueNumeric -= 5;
        database.ref().set({
            blueHousePoints: blueNumeric
        });
    });

    //Green House
    //award
    $(document).on("click", "#award-green", function awardGreen(){
        event.preventDefault();
        var greenNumeric = parseInt(greenPoints);
        greenNumeric += 5;
        database.ref().set({
            greenHousePoints: greenNumeric
        });
    });

    //deduct
    $(document).on("click", "#deduct-green", function deductGreen(){
        event.preventDefault();
        var greenNumeric = parseInt(greenPoints);
        greenNumeric -= 5;
        database.ref().set({
            greenHousePoints: greenNumeric
        });
    });

    //Yellow House
    //award
    $(document).on("click", "#award-yellow", function awardYellow(){
        event.preventDefault();
        var yellowNumeric = parseInt(yellowPoints);
        yellowNumeric += 5;
        database.ref().set({
            yellowHousePoints: yellowNumeric
        });
    });

    //deduct
    $(document).on("click", "#deduct-yellow", function deductYellow(){
        event.preventDefault();
        var yellowNumeric = parseInt(yellowPoints);
        yellowNumeric -= 5;
        database.ref().set({
            yellowHousePoints: yellowNumeric
        });
    });
  });