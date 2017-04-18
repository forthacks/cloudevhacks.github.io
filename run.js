const shell = require("shelljs")
const sys = require('sys')
const exec = require('child_process').exec;
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
  exec("echo "+firepad.getText()+'">Files/'+window.location.hash.substring(1).split("#")[1], function(error, stdout, stderr) {console.log(error+stderr+stdout})
}
