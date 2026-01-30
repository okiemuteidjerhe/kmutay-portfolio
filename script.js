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

//The Year
   const currentYear = document.querySelector('time')

   const yearNow = () => {
      const dateNow = new Date().getFullYear();
      currentYear.textContent = dateNow;
   }
   yearNow();

//Send Email
   const cEmail = document.querySelector('.cust-email')
   const form = document.querySelector('.email-ctn')
   const dialog = document.querySelector('.message')
   const title = document.querySelector('.status-title')
   const message = document.querySelector('.status-message')
   const dialogBtn = document.querySelector('#dialogBtn')

   const sendMail = (e) => {
      e.preventDefault();

      const params = {
         cust_email: cEmail.value
      }

      emailjs.send('service_tn848ze', 'template_tpnmi34', params).then(
         (response) => {
            title.textContent = 'Email Sent'
            message.textContent = 'We wil get back to you shortly!'
            cEmail.value = ''
            dialog.showModal();
         },
         (error) => {
            title.textContent = 'Message Failed'
            message.textContent = 'Something went wrong. Please retry.'
            cEmail.value = ''
            dialog.showModal();
         },
      );
   }

   form.addEventListener("submit", sendMail)
   dialogBtn.addEventListener('click', () => dialog.close())
