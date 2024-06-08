var mobile = window.matchMedia("(max-width: 768px)");

var rest = window.matchMedia("(min-width: 769px)");


var nav = document.getElementById('nav2');

var thumb = document.getElementById('thumb');

var button = document.getElementById('res-btn');

var svg = document.getElementById('res-svg');

function toggleNav() {
    

    if (mobile.matches) {
        if(nav.style.visibility === 'hidden') {
            nav.style.display = 'flex';
            nav.style.visibility = 'visible';
            nav.style.opacity = '100';
            nav.style.position = 'fixed';
            nav.style.left = '80px';
            nav.style.width = '40vh';
            thumb.style.left = 'calc(80px + 40vh)';
            button.style.left = 'calc(80px + 37vh)';
            svg.style.transition = 'transform 0.5s';
            svg.style.transform = 'rotate(0deg)';
        } else {
            nav.style.visibility = 'hidden';
            nav.style.opacity = '0';
            nav.style.width = '0';
            thumb.style.left = '80px';
            button.style.left = '60px';
            svg.style.transition = 'transform 0.5s';
            svg.style.transform = 'rotate(180deg)';
        }
    } else if(rest.matches) {
        if(nav.style.visibility === 'hidden') {
            nav.style.display = 'flex';
            nav.style.visibility = 'visible';
            nav.style.opacity = '100';
            nav.style.width = '382px';
            svg.style.transition = 'transform 0.5s';
            svg.style.transform = 'rotate(0deg)';
        } else {
            nav.style.visibility = 'hidden';
            nav.style.opacity = '0';
            nav.style.width = '0';
            svg.style.transition = 'transform 0.5s';
            svg.style.transform = 'rotate(180deg)';
        }
    }
}

function mobileRes() {
    if (mobile.matches) {
        nav.style.visibility = 'hidden';
        nav.style.opacity = '0';
        nav.style.width = '0';
        thumb.style.left = '80px';
        button.style.left = '60px';
        svg.style.transition = 'transform 0.5s';
        svg.style.transform = 'rotate(180deg)';
    } else {
        return;
    }
}

mobileRes();

mobile.addEventListener("change", function() {
    mobileRes();
  });
