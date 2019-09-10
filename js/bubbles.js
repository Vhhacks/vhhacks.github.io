var elem = document.getElementById("bubble");
var pos = 0;
var currentScrollPos = window.pageYOffset;
if(currentScrollPos > window.innerHeight){
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}