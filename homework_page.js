let hamburger = document.querySelector('.hamburger');
let gnb = document.querySelector('.gnb');

hamburger.addEventListener('click', function(){
  gnb.classList.toggle('active');
});