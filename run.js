const shell = require("shelljs")
const util = require('util')
const child_process = require('child_process')
const exec = require('child_process').exec
const spawn = require('child_process').spawn;
const fs = require('fs');
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

function dwl() {
  var stream = fs.createWriteStream("/Files/"+window.location.hash.substring(1).split("#")[1].replace("|","."));
  stream.once('open', function(fd) {
    stream.write(firepad.getText());
    stream.end();
  });
  // fs.writeFile("")
  // spawn('echo', [firepad.getText()+'" > Files/'+window.location.hash.substring(1).split("#")[1].replace("|",".")])
  // exec('echo "'+firepad.getText()+'" > Files/'+window.location.hash.substring(1).split("#")[1].replace("|","."), function(error, stdout, stderr) {console.log(error+stderr+stdout)})
}
