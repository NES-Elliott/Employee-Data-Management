// ========================================== START CODING BELOW!!

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCQZuBojph7bYmNnxDGqg-Vr7dn4MvI0Xc",
        authDomain: "class-b241f.firebaseapp.com",
        databaseURL: "https://class-b241f.firebaseio.com",
        projectId: "class-b241f",
        storageBucket: "class-b241f.appspot.com",
        messagingSenderId: "721576404382"
      };
      firebase.initializeApp(config);
  
      // Create a variable to reference the database.
      var database = firebase.database();
  
      // Initial Values
      var name = "";
      var role = "";
      var startDate = 0;
      var rate = "";
  
      // Capture Button Click
      $("#submit").on("click", function(event) {
        event.preventDefault();
  
        // Grabbed values from text boxes
        name = $("#name-input").val().trim();
        role = $("#role-input").val().trim();
        startDate = $("#date-input").val().trim();
        rate = $("#rate-input").val().trim();
  
        // Code for handling the push
        database.ref().push({
          name: name,
          role: role,
          startDate: startDate,
          rate: rate,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
  
      });
  
      // Firebase watcher + initial loader + order/limit HINT: .on("child_added"
      database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
        // storing the snapshot.val() in a variable for convenience
        var sv = snapshot.val();
  
        // Console.loging the last user's data
        console.log(sv.name);
        console.log(sv.role);
        console.log(sv.startDate);
        console.log(sv.rate);
  
        // Change the HTML to reflect
        $("#name-display").html(sv.name);
        $("#role-display").html(sv.role);
        $("#startDate-display").html(sv.startDate);
        $("#rate-display").html(sv.rate);
  
        // Handle the errors
      }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });