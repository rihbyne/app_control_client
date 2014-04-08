var contextClass = (window.AudioContext ||
                   window.webkitAudioContext ||
                   window.mozAudioContext ||
                   window.oAudioContext ||
                   window.msAudioContext);
if (contextClass) {
    //webAudio Api is accessible
    var context =  new contextClass();
}
