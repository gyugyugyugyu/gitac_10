/* 
여기부터 버거버튼
*/
let hamburger = document.querySelector(".hamburger");
let gnb = document.querySelector(".gnb");

hamburger.addEventListener("click", function () {
  gnb.classList.toggle("active");
});

/* 
여기부터 슬라이드
*/ 

let carousel = document.querySelectorAll('.carousel');
const play = document.querySelector('.btn-play');
const pause = document.querySelector('.btn-pause');

let current = 0; 
let next = 1;
let prev = 2;

let intervalNumber = 0;

function move(){
/* 
prev 변수 값이 carousel 개수 범위를 벗어났는지 체크하는 부분
*/ 
  if(prev > carousel.length-1){
    prev = 0;
  }
  
/* 
html element에 불필요한 class 제거
*/
  for(let i = 0; i < carousel.length; i++){
    carousel[i].classList.remove('current', 'prev', 'next');
  }

/* 
carousel 아이템별로 올바른 class를 추가 => carousel 동작 
*/
  carousel[current].classList.add('prev');
  carousel[next].classList.add('current');
  carousel[prev].classList.add('next');

/* 
carousel 아이템 번호별로 rolling
*/
  current = next;
  next = prev;
  prev++;

};

intervalNumber = setInterval(function(){
  move();
}, 2000);

pause.addEventListener('click', function(){
  clearInterval(intervalNumber);
});

play.addEventListener('click', function(){
  intervalNumber = setInterval(function(){
    move();
  }, 2000);
});
