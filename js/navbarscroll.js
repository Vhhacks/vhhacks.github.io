var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if(currentScrollPos > 200){
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.opacity = "1";
        } else {
            document.getElementById("navbar").style.opacity = "0";
        }
        prevScrollpos = currentScrollPos;
    }
}