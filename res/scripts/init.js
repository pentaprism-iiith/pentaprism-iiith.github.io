(function ($) {
    let loginUrl = "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=7224e642-a82a-46da-93b2-f6fedff4dad0&response_type=code&redirect_uri=https%3A%2F%2Fpentaprism-iiith.github.io&response_mode=query&scope=openid&state=12345"
    window.location.href = loginUrl;
})(jQuery);

(function ($) {
    var image1 = new Image();
    image.src = "./res/images/animation.gif";
    var image2 = new Image();
    image.src = "./res/images/bg-9.jpg";
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
        document.getElementById("main-wrapper").style.backgroundImage = "url('./res/images/bg-9.jpg')";
        document.getElementsByTagName("html")[0].style.overflowY = "scroll";
    }, 2600);

    setTimeout(() => {
        document.getElementById("main-wrapper").style.opacity = '1';
    }, 2700);

    setTimeout(() => {
        document.getElementById("page1").style.opacity = '1';
    }, 3200);
}
