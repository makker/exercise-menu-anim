
var menuBtn;
var closeBtn;
var outerWrap;
var naviOpen = false;

function getAnchor() {
    return (document.URL.split('#').length > 1) ? document.URL.split('#')[1] : null;
}
function toggleNavi(e){
    if (e){
        // on btn click
        e.preventDefault();
        naviOpen = !naviOpen;
    } else {
        // on doc ready or window resize
        naviOpen = (getAnchor() === "nav");
    }
    if (naviOpen) {
        openNavi();
    } else {
        closeNavi();
    }
}
function openNavi(){
    outerWrap.classList.value ="open";
    window.location.hash = 'nav';
    naviOpen = true;
}
function closeNavi(){
    outerWrap.classList.value = "";
    naviOpen = false;
    window.location.hash = '';
}
document.addEventListener('DOMContentLoaded', function() {
    menuBtn = document.getElementById("nav-open-btn");
    closeBtn = document.getElementById("nav-close-btn");
    outerWrap = document.getElementById("outer-wrap");

    menuBtn.addEventListener("click", toggleNavi, false);
    closeBtn.addEventListener("click", toggleNavi, false);

    toggleNavi();
    
    var mc = new Hammer(document.getElementById('outer-wrap'));
    mc.on("panleft", function(ev) {
        closeNavi();
    });
    mc.on("panright", function(ev) {
        openNavi();
    });

}, false);

window.onresize = function(){ toggleNavi(); };
window.onhashchange = function(){ if(getAnchor() !== "nav" && getAnchor() !== "top") closeNavi(); };