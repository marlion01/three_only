'use strict'
function init(){
    const canvas = document.getElementById('webgl_canvas');
    if (!canvas){
        console.log('Failed to retrieve the <canvas> element');
        return false;
    }
    const gl = canvas.getContext('webgl');
    const message = gl ? 'Your browser supports WebGL' : 'Your browser does not support WebGL';
    alert(message);
}
window.onload = init;
