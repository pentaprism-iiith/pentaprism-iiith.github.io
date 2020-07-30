(function ($) {
    var image1 = new Image();
    image.src = "./res/images/animation.gif";
})(jQuery);

function init() {
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
    }, 2600);

    setTimeout(() => {
        const formLink = "https://forms.gle/LAnKh3azJoBJm2TUA";
        window.location.href = formLink; 
    }, 2700);
}
