document.getElementById('alarm').play();

var sounds = {
  88 : 'alarm', // key 'x'

};

document.onkeydown = function(e) {
   var soundId = sounds[e.keyCode];
   if (soundId) document.getElementById(soundId).play();
   else console.log("key not mapped : code is", e.keyCode);
}