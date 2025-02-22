

const navbar = document.querySelector('#navbar');
const navbar_offset = navbar.offsetTop;

window.onscroll = function()
{
    let distance_to_top = navbar_offset - document.documentElement.scrollTop;

    // console.log(distance_to_top);

    if (distance_to_top < 0 && !navbar.classList.contains('stuck'))
    {
        navbar.classList.add('stuck');
    }
    else if (distance_to_top >= 0 && navbar.classList.contains('stuck'))
    {
        navbar.classList.remove('stuck');
    }
}

const path = window.location.pathname;
const page = path.split("/").pop();

// const home_link = document.querySelector('#navbar-link-home');
// const art_link = document.querySelector('#navbar-link-art');

// if (page == 'index.html') { home_link.style = 'display:none;'; }
// if (page == 'gallery.html') { art_link.style = 'display:none;'; }
