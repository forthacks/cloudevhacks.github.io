function newproject() {
  window.location.href = "createProject.html"
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    firebase.database().ref('users/' + user.uid).once('value').then(function(snapshot) {
      document.getElementById("projects").innerHTML = ""
      for (var i in snapshot.val()) {
        document.getElementById("projects").innerHTML += "<a class='project' href='project.html#"+i+"'><input type='text' value='"+i+"' readonly></a><br>"
      }
      document.getElementById("projects").removeChild(document.getElementById("projects").lastChild)
    });
  } else {
    window.location.href = "index.html";
  }
});
