//The hamburger
let mobileNav = document.querySelector('.mobile-view');
let hamburger = document.querySelector('.hideOnMain');

const toggleMobileNav = () => {
    hamburger.classList.toggle('close');
    mobileNav.classList.toggle('reveal-nav');
}

hamburger.addEventListener('click', toggleMobileNav);
mobileNav.addEventListener('click', toggleMobileNav);

//The works button
let toggleBtn = document.getElementById("see");
let hiddenImages = document.getElementsByClassName("hide-img");

toggleBtn.addEventListener(
    "click",
     ()=>{
        for(image of hiddenImages){
            image.classList.toggle("not-hidden");
        };
     
     if (hiddenImages[0].classList.contains('not-hidden')){
        toggleBtn.textContent = "See Less";
     }else{
        toggleBtn.textContent = "See More";
     }
    }
    )