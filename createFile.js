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
    // database.ref("users/"+firebase.auth().currentUser.uid+"/"+(window.location.hash.substring(1))+"/"+name+"|"+ext+"/chain").set([0, 1])
    // database.ref("users/"+firebase.auth().currentUser.uid+"/"+(window.location.hash.substring(1))+"/"+name+"|"+ext+"/dict").set({0: "H", 1: "i"})
    /*var fileRef = storage.ref("Files/"+name+"|"+ext)
    var blob = new Blob([" "], {'type':"text/plain"});
    fileRef.put(blob)*/
    window.location.href = "ide.html"+window.location.hash+"#"+name+"|"+ext
    return false
    //storage.ref(name+"/welcome.txt") // i dont know how to do the file someone else do it
    // storageRef.put(name+"/welcome.txt")
}
//storage.ref(name+"/welcome.txt") // i dont know how to do the file someone else do it
// storageRef.put(name+"/welcome.txt")
