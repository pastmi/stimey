let play = true,
  soundBlock = document.querySelector(".sound"),
  song = document.querySelector(".toggleSong");
let toggleSound = () => {
  musicPlay('click');
  if (play) {
   
    soundBlock.pause();
    play=false;
    song.children[0].setAttribute("src", "./img/song2.png");
    return;
  }
  if (!play) {
    
    soundBlock.play();
    play = true;
    song.children[0].setAttribute("src", "./img/song1.png");
    return;
  }
  soundBlock.stop();
};

song.addEventListener("click", toggleSound);
