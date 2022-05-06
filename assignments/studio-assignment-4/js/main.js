let elements = {
    'a': {
        'video': '',
        'audio': 'audio',
        name: '',
    },

    'b': {
        'video': '',
        'audio': 'audio2',
        name: '',
    },

    'c': {
        'video': '',
        'audio': 'audio3',
        name: '',
    },
    
    'd': {
        'video': '',
        'audio': '',
        name: '',
    },
};

console.log(elements[0]);

let videoContainer = document.querySelector('video-container');
// this will loop through each `key` of your elements object e.g. a, b, c
    //const just means you can reassign the variable, which you wouldn’t want to do in a loop anyway
    for(let key in elements) {
        let vid = document.createElement('video');
        vid.loop = true;
        vid.autoplay = true;
        vid.muted = true;
        // access info from your object by using the key to access the values object
  vid.src = elements[key].video;
  // maybe assign the key as a data attribute so that later you can
  // filter your videos and find the video that represents each key (to add a class to expand it)
  vid.dataset.key = key;
    // elements[event.key].dataset.key = key;
    // key.dataset.key = event.key;
  videoContainer.append(vid);
}

let input = document.querySelector('input');
let audio = document.querySelector('audio');
let videos = Array.from(document.querySelectorAll('video'));
let pressDisplay = document.querySelector('.show-pressed');
let catDisplay = document.querySelector('.category');


function keyEvent(event) {
    // see if the key typed is one of the keys in our `elements` object above
    if (event.key in elements) {
      audio.pause();
          // video.play();
          // video.classList.remove("active");
    // first see if there's an active video, pause it and remove active class
      let activeVideo = videos.find(v => v.classList.contains('active'));
        if (activeVideo) {
          activeVideo.pause();
          activeVideo.classList.remove('active');
        }
  
        let video = videos.find(v => v.dataset.key == event.key);
          video.classList.add('active');
          video.play();
  
      let data = elements[event.key];
      audio.src = data.audio;
      audio.play();
  
      nameDisplay.innerText = data.name;
      catDisplay.innerText = data.category;
      pressDisplay.innerText = event.key;
        // pressDisplay.classList.add("press");
  
    }
  }