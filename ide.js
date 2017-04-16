function newproject() {
  window.location.href = "createProject.html"
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var hashes = window.location.hash.substring(1).split("#");
    firebase.database().ref('users/' + user.uid + '/' + hashes[0] + "/" + hashes[1]).on('value', function(snapshot) {
      var content = ""
      for (var i in snapshot.val()["chain"]) {
        content += snapshot.val()["dict"][snapshot.val()["chain"][i]]
      }
      document.getElementById("editor").innerHTML = content;
    });
  } else {
    window.location.href = "index.html";
  }
});
