let effect = document.querySelector('.effect');

 function musicPlay(name){
    let music = null;
    switch (name) {
        case 'click':
            music = './sound/click.mp3';
            break;
    
        default:
            return;
    }
   effect.setAttribute("src", music);
    effect.play();
     
     
 }




