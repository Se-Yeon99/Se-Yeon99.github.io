const audioContainer = document.querySelector("#audioContainer");
const playBtn = document.querySelector('.playBtn');
const stopBtn = document.querySelector('.stopBtn');
const audioNextBtn = document.querySelector('.NextBtn');

const MUSIC_COUNT = 3;

let currentAudio = 1;

function playAudio() {
  audioContainer.volume = 0.5;
  audioContainer.loop = true;
  audioContainer.play();
}

function stopAudio() {
  audioContainer.pause();   // 오디오 중단
}

function loadAudio() {
  const source = document.querySelector('#audioSource');
  source.src = `audio/${currentAudio}.mp3`;
  audioContainer.load();
  playAudio();
}

function handleNextButtonClick() {
  if(currentAudio < MUSIC_COUNT){
    currentAudio += 1;
  }else {
    currentAudio = 1;
  }

  audioContainer.pause();
  loadAudio();
}

playBtn.addEventListener('click', loadAudio);
stopBtn.addEventListener('click',stopAudio);
audioNextBtn.addEventListener('click', handleNextButtonClick);