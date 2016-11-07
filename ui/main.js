console.log('Loaded!');
//change the text of main-
var element=document.getElementById('main-text');
element.innerHTML='New value';

//move the image
var img=document.getElementById('madi');
img.onclick=function(){
    var interval=setInterval(moveRight,50);

};