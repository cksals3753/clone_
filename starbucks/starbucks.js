/**
* @filename : starbucks.js
* @author : 전찬민 (cksals37530@gmail.com)
* @description : 스타벅스 전 영역 js
*/

/* 공지사항 텍스트 회전 */
const notiLi = document.querySelectorAll("#notiContainer span:nth-child(2) p");
let currentIndex = 0;

setInterval(() => {
  for (let i of notiLi) {
    i.style.display = "none";
  }
  currentIndex = (currentIndex + 1) % notiLi.length;
  notiLi[currentIndex].style.display = "block";
}, 5000);

/* 프로모션 화살표 다운 & 업 */ 
const eventBox = document.querySelector("#promBtn img");
var promotionBtn = "true";
const page = document.querySelector("#slide_border");

eventBox.addEventListener("click", function(e) {

  if(promotionBtn == "false") {
    promotionBtn = "true";
    e.currentTarget.innerHTML = '<img src="img/btn_prom_down.png"/>';
    page.style.display = "block";
                
    } else if (promotionBtn == "true") {
      promotionBtn = "false";
      e.currentTarget.innerHTML = '<img src="img/btn_prom_up.png"/>';
      page.style.display = "none";
    }
});

/* 페이지 실행 후 자동 실행 */
$(document).ready(function() {
  slide();
});

// 슬라이드 
function slide() {
  var wid = 0;
  var now_num = 0;
  var slide_length = 0;
  var auto = null;
  var $dotli = $('.dot>li');
  var $panel = $('.panel');
  var $panelLi = $panel.children('li');

  // 변수 초기화
  function init() {
    wid = $('.slide').width();
    now_num = $('.dot>li.on').index();
    slide_length = $dotli.length;
  }

  // 이벤트 묶음
  function slideEvent() {

    // 슬라이드 하단 dot버튼 클릭했을때
    $dotli.click(function() {
      now_num = $(this).index();
      slideMove();
    });

    // 이후 버튼 클릭했을때
    $('.next').click(function() {
      nextChkPlay();
    });

    // 이전 버튼 클릭했을때
    $('.prev').click(function() {
      prevChkPlay();
    });

    // 오토플레이
    autoPlay();

    // 오토플레이 멈춤
    autoPlayStop();

    // 오토플레이 재시작
    autoPlayRestart();

    // 화면크기 재설정 되었을때
    resize();
  }

  // 자동실행 함수
  function autoPlay() {
    auto = setInterval(function() {
      nextChkPlay();
    }, 3000);
  }

  // 자동실행 멈춤
  function autoPlayStop() {
    $panelLi.mouseenter(function() {
      clearInterval(auto);
    });
  }


  // 자동실행 멈췄다가 재실행
  function autoPlayRestart() {
    $panelLi.mouseleave(function() {
      auto = setInterval(function() {
        nextChkPlay();
      }, 3000);
    });
  }

  // 이전 버튼 클릭시 조건 검사후 슬라이드 무브
  function prevChkPlay() {
    if (now_num == 0) {
      now_num = slide_length - 1;
    } else {
      now_num--;
    }
    slideMove();
  }

  // 이후 버튼 클릭시 조건 검사후 슬라이드 무브
  function nextChkPlay() {
    if (now_num == slide_length - 1) {
      now_num = 0;
    } else {
      now_num++;
    }
    slideMove();
  }

  // 슬라이드 무브
  function slideMove() {
    $panel.stop().animate({
      'margin-left': -wid * now_num
    });
    $dotli.removeClass('on');
    $dotli.eq(now_num).addClass('on');
  }

  // 화면크기 조정시 화면 재설정
  function resize() {
    $(window).resize(function() {
      init();
      $panel.css({
        'margin-left': -wid * now_num
      });
    });
  }
  init();
  slideEvent();
}




