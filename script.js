let mobileNav = document.querySelector('.mobile-view');
let hamburger = document.querySelector('.hideOnMain');

const toggleMobileNav = () => {
    hamburger.classList.toggle('close');
    
    if(hamburger.classList.contains('close')){
        mobileNav.style.display = 'block';
    }else{
        mobileNav.style.display = 'none';
    }
}

hamburger.addEventListener('click', toggleMobileNav);
mobileNav.addEventListener('click', toggleMobileNav);