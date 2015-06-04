var gui = require('nw.gui');
//console.log(gui.App.argv);
//initiate video
var video = navigator.webkitGetUserMedia({audio : false, video : true},function(stream){
    var video = document.querySelector('#main');
    video.src=window.URL.createObjectURL(stream);
    video.play();
},function(err){
    console.log(err);
});
document.querySelector('.exiticon').addEventListener('click',function(){
    console.log('hello');
    gui.App.quit();
})
