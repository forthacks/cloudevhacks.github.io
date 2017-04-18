var database = firebase.database();
var storage = firebase.storage();
var storageRef = firebase.storage().ref();
function validateform() {
    var name = document.getElementById("name").value

    var regex = new RegExp("^[a-zA-Z0-9-_]+$")
    if (!regex.test(name) || name == "sharedprojects") {
      window.location.href = "#error"
      window.location.reload()
      return
    }

    database.ref("users/"+firebase.auth().currentUser.uid+"/"+name).set(true)
    window.location.href = "project.html#"+name
    return false
}
