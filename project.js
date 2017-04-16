firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("heading").innerHTML = "Project Files of " + window.location.hash.substring(1)
    firebase.database().ref('users/' + firebase.auth().currentUser.uid + "/" + window.location.hash.substring(1)).once('value').then(function(snapshot) {
      document.getElementById("files").innerHTML = ""
      for (var i in snapshot.val()) {
        document.getElementById("files").innerHTML += "<a class='file' href='ide.html"+window.location.hash+"#"+i+"'><input type='text' value='"+i+"' readonly></a><br>"
      }
      document.getElementById("files").removeChild(document.getElementById("files").lastChild)
    });
  } else {
    window.location.href = "index.html";
  }
});
function newfile() {
  window.location.href = "createFile.html"+window.location.hash
}
function share() {
  window.location.href = "shareProject.html"+window.location.hash
}
