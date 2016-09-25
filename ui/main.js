console.log('Loaded!');

var element = document.getElementById('main-text');
element.innetHTML = 'New Value';
var img = document.getElementByClass('img-medium');
img.onclick = function(){
    img.style.marginLeft = '100px';
}