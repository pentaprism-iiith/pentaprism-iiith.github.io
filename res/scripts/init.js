
(function ($) {
    var image = new Image();
    image.src = "./res/images/animation.gif";
})(jQuery);

function init() {
    // document.getElementById("logo-figure").style.opacity = '0';
    $("#camera-gif-figure").animate({
        // width and max-width have to be changed accordingly in index.css > #camera-gif
        top: String(0.5 * $(window).height() - (Math.min(0.15 * $(window).width(), 150))) + "px",
        opacity: "1",
    });

    setTimeout(() => {
        $("#camera-gif").attr('src', "./res/images/animation.gif");
    }, 500);
    
    setTimeout(() => {
        document.getElementById("camera-gif-figure").style.opacity = '0';
    }, 2500);

    setTimeout(() => {
        document.location.href = "./home.html"
    }, 3000);
}
