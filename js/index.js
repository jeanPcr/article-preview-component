const btn = document.querySelector('.share_btn')
const popUp = document.querySelector('.share_icons')
const triangle = document.querySelector('.bottomTriangle')


const showShareIcons = () => {
    if (popUp.style.display === "none" && triangle.style.display === "none") {
        popUp.style.display = 'flex';
        triangle.style.display = 'block';
        btn.classList.add("clicked");
    } else {
        triangle.style.display = "none";
        popUp.style.display = "none";
    }

}