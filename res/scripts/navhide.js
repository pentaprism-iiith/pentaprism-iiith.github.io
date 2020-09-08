var prevScroll = window.pageYOffset;
window.onscroll = function () {
    var currScroll = window.pageYOffset;
    // if (prevScroll > currScroll) {
    if (currScroll <= 100) {
        document.getElementById("navbar").style.top = "0";
    } else if (currScroll > 100) {
        document.getElementById("navbar").style.top = "-150px";
    }
    // prevScroll = currScroll;
}