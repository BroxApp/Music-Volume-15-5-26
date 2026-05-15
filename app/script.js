const music = document.getElementById('music');
const volumeSlider = document.getElementById('volumeSlider');

volumeSlider.addEventListener('input', ()=>{

const volumeValue = volumeSlider.value/100;
music.volume = volumeValue;
})