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
    var redRef = database.ref('housePoints');
    redRef.on('value', function(snapshot) {
        $("#red-points").text(snapshot.val().redHousePoints);
        redPoints = snapshot.val().redHousePoints;
    }, function(errorObject) {
        console.log("Read House Points failed: " + errorObject.code);
    });

    //event listeners for red house
    //award
    $(document).on("click", "#award-red", function awardRed(){
        event.preventDefault();
        var redNumeric = parseInt(redPoints);
        redNumeric += 5;
        database.ref('housePoints').set({
            redHousePoints: redNumeric
        });
    });

    //deduct
    $(document).on("click", "#deduct-red", function awardRed(){
        event.preventDefault();
        var redNumeric = parseInt(redPoints);
        redNumeric -= 5;
        database.ref('housePoints').set({
            redHousePoints: redNumeric
        });
    });

    
  });