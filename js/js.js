
//1234
const nav_size = document.querySelector('.layout-navbar').offsetHeight;
const profile_summary = document.querySelector('.layout-profile-summary');


//Sticky Profile Summary

function setSticky(){
const window_width = window.innerWidth;
if (window_width > 768) {
    
    profile_summary.style.position = 'sticky';
    profile_summary.style.top = `${nav_size}px`;
}
else{
    profile_summary.style.position = '';
    profile_summary.style.top = ``;
}

console.log("Window Size",window_width)
}







//Nav Button Click Event

document.querySelector('.layout-navbar').addEventListener('click', function(Event) {
    let target = Event.target;
    console.log("Clicked on: ", target.id);
    switch (target.id) {
        case 'navLinkHome':
            console.log("Home clicked");
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            break;
        case 'navLinkSkills':
            console.log("Skills clicked");
            window.scrollTo({
                top: document.getElementById('skills-section').offsetTop - nav_size,
                behavior: 'smooth'
            });
            break;
        case 'navLinkExperience':
            console.log("Experience clicked");
            window.scrollTo({
                top: document.getElementById('experience-section').offsetTop - nav_size,
                behavior: 'smooth'
            });
            break;
        case 'navLinkContact':
            console.log("Contact clicked");
            window.scrollTo({
                top: document.getElementById('contact-section').offsetTop - nav_size,
                behavior: 'smooth'
            });
            break;
    }
    
    
});




document.addEventListener('DOMContentLoaded', setSticky)
window.addEventListener('resize', setSticky)








