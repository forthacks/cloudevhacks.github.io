firebase.database().ref('users/' + user.uid + "/" + window.location.hash).once('value').then(function(snapshot) {
  document.getElementById("projects").innerHTML = ""
  for (var i in snapshot.val()) {
    document.getElementById("projects").innerHTML += "<li><a href='project.html#"+i+"'>"+i+"</a></li>"
  }
});
function newfile() {
  window.location.href = "createFile.html"+window.location.hash
}
