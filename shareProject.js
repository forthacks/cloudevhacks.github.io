var database = firebase.database();
var storage = firebase.storage();
var storageRef = firebase.storage().ref();
function validateform() {
    var name = document.getElementById("name").value

    database.ref("users/"+name+"/sharedprojects/"+window.location.hash.substring(1)).set(firebase.auth().currentUser.uid)
    window.location.href = "project.html"+window.location.hash
    return false
}
