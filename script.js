// AUTHENTICATION BUTTON SWITCHING BEGIN

let submit_btn = document.querySelector('#submit_btn');
submit_btn.style.display = "none";
let otpbox = document.querySelector('#otpbox');
otpbox.style.display = "none";
let request_btn = document.querySelector('#request_btn');
let signin = document.querySelector('.signin');
request_btn.addEventListener('click', () => {
  let mob = document.querySelector('#phone').value;
  console.log(mob);
  if(mob.length!=10){
    signin.classList.add('invalid');
  }
  else{
    request_btn.style.display = "none";
    otpbox.style.display = "block";
    submit_btn.style.display = "block";
  }
});



// AUTHENTICATION BUTTON SWITCHING END

//SWIPER BEGIN

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'cube',
    grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

    pagination: {
        el: '.swiper-pagination',
    },
    
});

//SWIPER END