
//1234
var nav_size = document.querySelector('.layout-navbar').offsetHeight;
const profile_summary = document.querySelector('.layout-profile-summary');


function getNavSize(){
   nav_size = document.querySelector('.layout-navbar').offsetHeight;
}




//Sticky Profile Summary

function setSticky(){
const window_width = window.innerWidth;

if (window_width >= 768) {
    
    profile_summary.style.position = 'sticky';
    profile_summary.style.top = `${nav_size}px`;
    document.querySelector('.menu-toggler').style.display = 'none';
    
}
else{
    profile_summary.style.position = '';
    profile_summary.style.top = ``;
    document.querySelector('.menu-toggler').style.display = 'flex';
    
    

}

}



document.querySelector('.menu-toggler').addEventListener('click',function hamburguer_menu() {
    document.querySelector('.menu').classList.toggle('menu-container');
    document.querySelector('.menu-container').style.top = 0;

})




document.addEventListener('click',function close_menu(Event){
    let nav = document.querySelector('.layout-navbar');

    if (!nav.contains(event.target)) {
        document.querySelector('.menu').classList.remove('menu-container');
  }

    

})



//Nav Button Click Event

document.querySelector('.layout-navbar').addEventListener('click', function(Event) {
    let target = Event.target;
    switch (target.id) {
        case 'navLinkHome':
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            break;
        case 'navLinkSkills':
            window.scrollTo({
                top: document.getElementById('skills-section').offsetTop - nav_size,
                behavior: 'smooth'
            });
            break;
        case 'navLinkExperience':
            window.scrollTo({
                top: document.getElementById('experience-section').offsetTop - nav_size,
                behavior: 'smooth'
            });
            break;
        case 'navLinkContact':
            window.scrollTo({
                top: document.getElementById('contact-section').offsetTop - nav_size,
                behavior: 'smooth'
            });
            break;
    }
    
    
});


function test(){
    console.log("test");
}


document.addEventListener('DOMContentLoaded', setSticky, getNavSize)

window.addEventListener('resize', setSticky)
window.addEventListener('resize', getNavSize)







