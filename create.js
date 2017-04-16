function aasubmit(){
  var sEmail = document.getElementById("email");
  var sPass = document.getElementById("pass");
  firebase.auth().createUserWithEmailAndPassword(sEmail.value, sPass.value).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Error " + errorCode + ": " + errorMessage)
  });
}

firebase.auth().onAuthStateChanged(function(user){
  if (user) {
    var users = firebase.database().ref().child("users").push()
    users.child(firebase.auth().currentUser.uid).push()
    firebase.auth().signOut();
    window.location.href += "#created";
    window.location.reload()
  }
})
