document.addEventListener("DOMContentLoaded", function() {

    const limitlessLinks = document.getElementById("limitlessLinks");
    const linkMenuBox = document.getElementById("linkMenuBox");
    const contentBlocker = document.getElementById("contentBlocker");
    let linksExpanded = false;

    limitlessLinks.addEventListener("click", function() {
        if (linksExpanded === false) {
            linkMenuBox.style.height = "75vh";
            linkMenuBox.style.width = "75vw";
            linkMenuBox.style.top = "12.5vh";
            linkMenuBox.style.left = "12.5vw";
            contentBlocker.style.backgroundColor = "rgba(0, 0, 0, 50%)";
            contentBlocker.style.opacity = "100%";
            linksExpanded = true;
        } else {
            linkMenuBox.style.height = "0px";
            linkMenuBox.style.width = "10vw";
            linkMenuBox.style.top = "0px";
            linkMenuBox.style.left = "45vw";
            contentBlocker.style.backgroundColor = "rgba(0, 0, 0, 0%)";
            contentBlocker.style.opacity = "0%";
            linksExpanded = false;
        }
    });
});