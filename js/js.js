//Sticky Profile Summary
const nav_size = document.querySelector('.layout-navbar').offsetHeight;
const profile_summary = document.querySelector('.layout-profile-summary');

profile_summary.style.position = 'sticky';
profile_summary.style.top = `${nav_size}px`;



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
        case 'navLinkAbout':
            console.log("About clicked");
            window.scrollTo({
                top: document.getElementById('about-section').offsetTop - nav_size,
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
    

    console.log(window.scrollY); 
});









profile_summary.addEventListener('click', test)
function test() {
    console.log("Test",nav_size);
}





