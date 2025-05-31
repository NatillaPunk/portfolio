//Sticky Profile Summary
const nav_size = document.querySelector('.layout-navbar').offsetHeight;
const profile_summary = document.querySelector('.layout-profile-summary');

profile_summary.style.position = 'sticky';
profile_summary.style.top = `${nav_size}px`;



profile_summary.addEventListener('click', test)
function test() {
    console.log("Test",nav_size);
}