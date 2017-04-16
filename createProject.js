var database = firebase.database();
var storage = firebase.storage();
var storageRef = firebase.storage().ref();
function validateform() {
    var name = document.getElementById("name").value
    var ext = document.getElementById("ext").value

    var regex = new RegExp("^[a-zA-Z0-9-_]+$")
    var regex2 = new RegExp("^[a-zA-Z]+$")
    if (!regex.test(name) || !regex2.test(ext)) {
      window.location.href = "#error"
      window.location.reload()
      return
    }

    database.ref("users/"+firebase.auth().currentUser.uid+"/"+name+" "+ext).set(true)
    window.location.href = "project.html#"+name
    return false
}
