let effect = document.querySelector('.effect');

 function musicPlay(music){
    let music = null;
    switch (music) {
        case 'click':
            music = './img/click.png';
            break;
    
        default:
            return;
    }
   effect.setAttribute("src", music);
    effect.play();
     
     
 }




