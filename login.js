function validateform() {
  var username = document.getElementById("username")
  var password = document.getElementById("password")
  firebase.auth().signInWithEmailAndPassword(username.value, password.value).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Error " + errorCode + ": " + errorMessage);
  });
  return false;
}
