function validateform() {
  var username = document.getElementById("email")
  var password = document.getElementById("password")
  firebase.auth().signInWithEmailAndPassword(username.value, password.value).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.location.href = "#error"
    window.location.reload()
  });
  return false;
}
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.href = "ide.html"
  }
});
