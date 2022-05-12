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
  
//Bubbly- Gradient1  
  
  if (e.keyCode == 66) {
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
    document.getElementById('audio3').play();
    document.getElementById('image-3').style.opacity = 1;
    document.getElementById('mood-3').style.opacity = 1;
  }
  else{
    document.getElementById('audio3').pause();
    document.getElementById('image-3').style.opacity = 0;
    document.getElementById('mood-3').style.opacity = 0;
  }


  if (e.keyCode == 87) {
    document.getElementById('audio2').play();
    document.getElementById('image-2').style.opacity = 1;
    document.getElementById('mood-2').style.opacity = 1;
  }
  else{
    document.getElementById('audio2').pause();
    document.getElementById('image-2').style.opacity = 0;
    document.getElementById('mood-2').style.opacity = 0;
  }


  if (e.keyCode == 77) {
    //document.getElementById('').play();
    document.getElementById('image-4').style.opacity = 1;
    document.getElementById('mood-4').style.opacity = 1;
  }
  else{
    //document.getElementById('').pause();
    document.getElementById('image-4').style.opacity = 0;
    document.getElementById('mood-4').style.opacity = 0;
  }


  // if (e.keyCode == 80) {
  //   document.getElementById('').play();
  //   document.getElementById('image-5').style.opacity = 1;
  //   document.getElementById('mood-5').style.opacity = 1;
  // }
  // else{
  //   document.getElementById('').pause();
  //   document.getElementById('image-5').style.opacity = 0;
  //   document.getElementById('mood-5').style.opacity = 0;
  // }


  // if (e.keyCode == 76) {
  //   document.getElementById('').play();
  //   document.getElementById('image-6').style.opacity = 1;
  //   document.getElementById('mood-6').style.opacity = 1;
  // }
  // else{
  //   document.getElementById('').pause();
  //   document.getElementById('image-6').style.opacity = 0;
  //   document.getElementById('mood-6').style.opacity = 0;
  // }


  // if (e.keyCode == 70) {
  //   document.getElementById('').play();
  //   document.getElementById('image-7').style.opacity = 1;
  //   document.getElementById('mood-7').style.opacity = 1;
  // }
  // else{
  //   document.getElementById('').pause();
  //   document.getElementById('image-7').style.opacity = 0;
  //   document.getElementById('mood-7').style.opacity = 0;
  // }


  // if (e.keyCode == 84) {
  //   document.getElementById('').play();
  //   document.getElementById('image-8').style.opacity = 1;
  //   document.getElementById('mood-8').style.opacity = 1;
  // }
  // else{
  //   document.getElementById('').pause();
  //   document.getElementById('image-8').style.opacity = 0;
  //   document.getElementById('mood-8').style.opacity = 0;
  // }


  // if (e.keyCode == 78) {
  //   document.getElementById('').play();
  //   document.getElementById('image-9').style.opacity = 1;
  //   document.getElementById('mood-9').style.opacity = 1;
  // }
  // else{
  //   document.getElementById('').pause();
  //   document.getElementById('image-9').style.opacity = 0;
  //   document.getElementById('mood-9').style.opacity = 0;
  // }


  // if (e.keyCode == 65) {
  //   document.getElementById('').play();
  //   document.getElementById('image-11').style.opacity = 1;
  //   document.getElementById('mood-11').style.opacity = 1;
  // }
  // else{
  //   document.getElementById('').pause();
  //   document.getElementById('image-11').style.opacity = 0;
  //   document.getElementById('mood-11').style.opacity = 0;
  // }


  // if (e.keyCode == 71) {
  //   document.getElementById('').play();
  //   document.getElementById('image-12').style.opacity = 1;
  //   document.getElementById('mood-12').style.opacity = 1;
  // }
  // else{
  //   document.getElementById('').pause();
  //   document.getElementById('image-12').style.opacity = 0;
  //   document.getElementById('mood-12').style.opacity = 0;
  // }


  // if (e.keyCode == 83) {
  //   document.getElementById('').play();
  //   document.getElementById('image-13').style.opacity = 1;
  //   document.getElementById('mood-13').style.opacity = 1;
  // }
  // else{
  //   document.getElementById('').pause();
  //   document.getElementById('image-13').style.opacity = 0;
  //   document.getElementById('mood-13').style.opacity = 0;
  // }


  // if (e.keyCode == 82) {
  //   document.getElementById('').play();
  //   document.getElementById('image-14').style.opacity = 1;
  //   document.getElementById('mood-14').style.opacity = 1;
  // }
  // else{
  //   document.getElementById('').pause();
  //   document.getElementById('image-14').style.opacity = 0;
  //   document.getElementById('mood-14').style.opacity = 0;
  // }


  // if (e.keyCode == 69) {
  //   document.getElementById('').play();
  //   document.getElementById('image-15').style.opacity = 1;
  //   document.getElementById('mood-15').style.opacity = 1;
  // }
  // else{
  //   document.getElementById('').pause();
  //   document.getElementById('image-15').style.opacity = 0;
  //   document.getElementById('mood-15').style.opacity = 0;
  // }


  // if (e.keyCode == 68) {
  //   document.getElementById('').play();
  //   document.getElementById('image-16').style.opacity = 1;
  //   document.getElementById('mood-16').style.opacity = 1;
  // }
  // else{
  //   document.getElementById('').pause();
  //   document.getElementById('image-16').style.opacity = 0;
  //   document.getElementById('mood-16').style.opacity = 0;
  // }



});
