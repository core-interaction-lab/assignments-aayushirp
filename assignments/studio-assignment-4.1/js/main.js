// document.getElementById('alarm').play();

// var sounds = {
//   88 : 'alarm', // key 'x'
// };

// document.onkeydown = function(e) {
//    var soundId = sounds[e.keyCode];
//    if (soundId) document.getElementById(soundId).play();
//    else console.log("key not mapped : code is", e.keyCode);
// }

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 87) {
    document.getElementById('audio').play();
  }
  else{
    document.getElementById('audio').pause();
  }

  if (e.keyCode == 67) {
    document.getElementById('audio2').play();
  }
  else{
    document.getElementById('audio2').pause();
  }

  if (e.keyCode == 84) {
    document.getElementById('audio3').play();
  }
  else{
    document.getElementById('audio3').pause();
  }
});
