function newproject() {
  window.location.href = "createProject.html"
}

var chain = undefined;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var hashes = window.location.hash.substring(1).split("#");
    firebase.database().ref('users/' + user.uid + '/' + hashes[0] + "/" + hashes[1]).on('value', function(snapshot) {
      var content = ""
      chain = snapshot.val()["chain"]
      console.log(chain)
      for (var i in snapshot.val()["chain"]) {
        content += snapshot.val()["dict"][snapshot.val()["chain"][i]]
      }
      document.getElementById("editor").innerHTML = content;
    });
  } else {
    window.location.href = "index.html";
  }
});

function ups(e) {
  var hashes = window.location.hash.substring(1).split("#");
  var keycode = e.keyCode;
  var valid =
      (keycode > 47 && keycode < 58)   || // number keys
      keycode == 32 || keycode == 13   || // spacebar & return key(s) (if you want to allow carriage returns)
      (keycode > 64 && keycode < 91)   || // letter keys
      (keycode > 95 && keycode < 112)  || // numpad keys
      (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
      (keycode > 218 && keycode < 223);   // [\]' (in order)

  if (valid) {
    var selstart = document.getElementById("editor").selectionStart
    console.log(selstart)
    firebase.database().ref("users/"+firebase.auth().currentUser.uid + "/"+hashes[0]+"/"+hashes[1]+"/history").set(JSON.parse('{"()add'+chain[selstart-2]+' '+chain[selstart]+' '+e.key+'": true}'));
  }
}
