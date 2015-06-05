var gui = require('nw.gui');
//console.log(gui.App.argv);
//video Sizes, maybe someday it will be dynamic
var sizes = [
    {width:320,height:240},
    {width:640,height:480}
];
//initiate video
var video = navigator.webkitGetUserMedia({audio : false, video : true},function(stream){
    var video = document.querySelector('#main');
    video.src=window.URL.createObjectURL(stream);
    video.play();
},function(err){
    console.log(err);
});
document.querySelector('.exiticon').addEventListener('click',function(){
    gui.App.quit();
});
document.querySelector('.sizeicon').addEventListener('click',function(){   document.querySelector('.settings').style.display="block";
});
document.querySelector('.ok').addEventListener('click',function(){
    var newSize = +document.querySelector('#size').value;
    window.resizeTo(sizes[newSize].width,sizes[newSize].height);
    document.querySelector('.settings').style.display="none";
});
//tray icon
var tray = new gui.Tray({ title: 'PiP Boom!', icon: 'res/tray.png',tooltip:'PiP Boom!'});

// tray icon menu
var menu = new gui.Menu();
menu.append(new gui.MenuItem({label: 'About',click:function(){
    //license and stuff maybe
    console.log('anam');
}}));
menu.append(new gui.MenuItem({label: 'Exit',click:function(){
    gui.App.quit();
}}));
tray.menu = menu
