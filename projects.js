function newproject() {
  window.location.href = "createProject.html"
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    firebase.database().ref('users/' + user.uid).once('value').then(function(snapshot) {
      document.getElementById("projects").innerHTML = ""
      for (var i in snapshot.val()) {
        document.getElementById("projects").innerHTML += "<li><a href='project.html#"+i+"'>"+i+"</a></li>"
      }
    });
  } else {
    window.location.href = "index.html";
  }
});
