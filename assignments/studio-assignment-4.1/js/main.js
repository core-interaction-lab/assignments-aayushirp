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
    document.getElementById('image-1').style.opacity = 1;
    document.getElementById('mood-1').style.opacity = 1;
  }
  else{
    document.getElementById('audio').pause();
    document.getElementById('image-1').style.opacity = 0;
    document.getElementById('mood-1').style.opacity = 0;
  }

  if (e.keyCode == 67) {
    document.getElementById('audio2').play();
    document.getElementById('image-2').style.opacity = 1;
  }
  else{
    document.getElementById('audio2').pause();
    document.getElementById('image-2').style.opacity = 0;
  }

  if (e.keyCode == 84) {
    document.getElementById('audio3').play();
    document.getElementById('image-3').style.opacity = 1;
  }
  else{
    document.getElementById('audio3').pause();
    document.getElementById('image-3').style.opacity = 0;
  }
});
