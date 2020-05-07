$('#main-button').hover(function () {
    animeTarget = this;
    anime({
        targets: animeTarget,
        translateY: -5,
        scale: 1.1
    });
}, function () {
    animeTarget = this;
    anime({
        targets: animeTarget,
        translateY: 0,
        scale: 1
    });
});

$(document).ready(function () {
    console.log(0.05 * $(window).height());
    anime.set('.navbar',{
        translateY: 0.05 * $(window).height()
    });
    correctElements()
});

function closeBanner(){
    anime({
        targets: '.navbar',
        translateY: 0,
        easing: 'easeInOutExpo'
    });
    // .classList.remove("warningShown")
}

function openBanner(){
    anime({
        targets: '.navbar',
        translateY: 0.05 * $(window).height(),
        easing: 'easeInOutExpo'
    });
    // .classList.remove("warningShown")
}

window.onresize = function(event) {
    correctElements()
};

function correctElements(){

    if($(window).width() < 1400){
        closeBanner()
    }else{
        openBanner()
    }

    if($(window).width()/1.5 > $(window).height()){
        console.log("thick");
        document.getElementById("background").classList.add("thick")
        document.getElementById("background").classList.remove("thin")
    }else{
        console.log("thin");
        document.getElementById("background").classList.remove("thick")
        document.getElementById("background").classList.add("thin")
    }


}

$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
});
