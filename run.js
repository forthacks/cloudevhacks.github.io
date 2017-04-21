const util = require('util')
const child_process = require('child_process')
const exec = require('child_process').exec
const spawn = require('child_process').spawn;
const fs = require('fs');
const mkdirp = require('mkdirp');
const filename = window.location.hash.substring(1).split("#")[1].replace("|",".")
function run(){
  switch(language){
    case "python":
      break;
    case "javascript":
      break;
    case "java":
      break;
    case "ruby":
      break;
    case "c++":
      break;
    case "perl":
      break;
    default:
      language = "javascript"
  }
}
$(document).ready(function(){
    $("#download").click(function(){
        console.log(fs.realpathSync('.'))
        console.log("clicked")
        exec("cat > tmp/"+filename+"\n", function(error, stdout, stderr) {
          // command output is in stdout
          console.log(error+" "+stdout+" "+stderr)
        });
        // mkdirp("./tmp/", function (err) {
        //   if (err) console.error(err)
        // })
        // fs.writeFile("./tmp/"+filename, firepad.getText(), function (err) {
        //   if (err) throw err;
        //   console.log("It's saved!");
        // });
        // var stream = fs.createWriteStream("randomness"+filename);
        // stream.once('open', function(fd) {
        //   console.log("begin")
        //   stream.write(firepad.getText());
        //   stream.end();
        //   console.log("done")
        // });
    });
});
/*
function dwl() {

    mkdirp("tmp/cloudev", function (err) {
      if (err) console.error(err)
    })
    var stream = fs.createWriteStream("tmp/cloudev/"+window.location.hash.substring(1).split("#")[1].replace("|","."));
    stream.once('open', function(fd) {
      stream.write(firepad.getText());
      stream.end();
    });
  // fs.writeFile("")
  // spawn('echo', [firepad.getText()+'" > Files/'+window.location.hash.substring(1).split("#")[1].replace("|",".")])
  // exec('echo "'+firepad.getText()+'" > Files/'+window.location.hash.substring(1).split("#")[1].replace("|","."), function(error, stdout, stderr) {console.log(error+stderr+stdout)})
}
*/
