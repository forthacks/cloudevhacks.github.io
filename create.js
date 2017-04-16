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
    window.location.href = "index.html"
  }
})
