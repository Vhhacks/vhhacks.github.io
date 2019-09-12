var current= new Date()
var day_night=current.getHours()
if (day_night>=8 && day_night <= 16){
    document.getElementsByClassName("header-area")[0].setAttribute('style', "background: #0e2946 url('images/vhhacksbackgroundday.png') no-repeat scroll center bottom / cover");
} else{
    document.getElementsByClassName("header-area")[0].setAttribute('style', 'background: #0e2946 url(\'images/vhhacksbackgrounddusk.png\') no-repeat scroll center bottom / cover');
}
