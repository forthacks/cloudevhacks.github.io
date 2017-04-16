var database = firebase.database();
var storage = firebase.storage();
var storageRef = firebase.storage().ref();
function validateform() {
    var name = document.getElementById("name").value
    database.ref("users/"+firebase.auth().currentUser.uid+"/"+(window.location.hash.substring(1))+"/"+name).set(true)
    var fileRef = storage.ref("Files/"+name+".txt")
    var blob = new Blob(["Lit Fam", "So lit"], {'type':"text/plain"});
    fileRef.put(blob).then(function(snapshot) {
      console.log('Uploaded a blob!');
    });
    window.location.href = "ide.html"+window.location.hash+"#"+name
    return false
    //storage.ref(name+"/welcome.txt") // i dont know how to do the file someone else do it
    // storageRef.put(name+"/welcome.txt")
}
//storage.ref(name+"/welcome.txt") // i dont know how to do the file someone else do it
// storageRef.put(name+"/welcome.txt")
