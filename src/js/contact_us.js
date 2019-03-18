function textdown(e) {
    textevent = e;
    if (textevent.keyCode == 8) {
        return;
    }
    if (document.getElementById('textarea').value.length >= 300) {
        alert("大侠，手下留情，此处限字300")
        if (!document.all) {
            textevent.preventDefault();
        } else {
            textevent.returnValue = false;
        }
    }
}
function textup() {
    var s = document.getElementById('textarea').value;
    //判断ID为text的文本区域字数是否超过300个 
    if (s.length > 300) {
        document.getElementById('textarea').value = s.substring(0, 300);
    }
}
