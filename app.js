
//initiate video
var video = navigator.webkitGetUserMedia({audio : false, video : true},function(stream){
    var video = document.querySelector('#main');
    video.src=window.URL.createObjectURL(stream);
    video.play();
},function(err){
    console.log(err);
});
//move to the corner
window.moveTo(1000,700);
console.log(window.screen);
