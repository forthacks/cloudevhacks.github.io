function newproject() {
  window.location.href = "createProject.html"
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("uid").innerHTML = user.uid;
    firebase.database().ref('users/' + user.uid).once('value').then(function(snapshot) {
      document.getElementById("projects").innerHTML = ""
      document.getElementById("shared").innerHTML = ""
      for (var i in snapshot.val()) {
        if (i == "sharedprojects") {
          for (var j in snapshot.val()[i]) {
            document.getElementById("shared").innerHTML += "<a class='project' href='sharedproject.html#"+j+"'><input type='text' value='"+j+"' readonly></a><br>"
          }
        } else {
          document.getElementById("projects").innerHTML += "<a class='project' href='project.html#"+i+"'><input type='text' value='"+i+"' readonly></a><br>"
        }
      }
      document.getElementById("projects").removeChild(document.getElementById("projects").lastChild)
    });
  } else {
    window.location.href = "index.html";
  }
});
