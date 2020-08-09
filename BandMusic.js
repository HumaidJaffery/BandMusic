var instruments = [a, s, d, f, g, h, j, k, l];
var btn = [btna, btns, btnd, btnf, btng, btnh, btnj, btnk, btnl];
var chosen = [];

//listens to key being pressed
window.addEventListener('keydown', function(e){
    play(e.key)

})


//plays sound
function play(blank){
    //are keys are pressed too quickly
       for(i=0;i<instruments.length;i++){
        //is the key playable
        if(blank == instruments[i].id){
            instruments[i].currentTime = '0'
            instruments[i].play()
            animation(i)
            }
        }
    }

//plays animation
function animation(blank){
    btn[i].className = 'picked'
 setTimeout(function(){btn[blank].className = 'button'}, 70)
 chosen = []
}
