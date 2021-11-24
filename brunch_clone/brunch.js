/**
 * @filename : brunch.js
 * @author : 문태호 (mun05170@gmail.com)
 * @description : 브런치 자바스크립트 기능 구현.
 */

/** 사이드바 기능 구현 */
const sidebar = document.querySelector(".sidebar");
const slideAnchor = document.querySelectorAll(".slide a");
const menuBtns = document.querySelectorAll(".menu_btn a");

// 햄버거 버튼 클릭시 사이드바 출현
document.getElementById("ham").addEventListener("click", () => {
  if (!sidebar.classList.contains("sidebar-hide")) {
    sidebar.classList.add("sidebar-hide");
  }
});
// 사이드바 영역을 제외한 다른 곳을 클릭시 숨김
document.querySelector("html").addEventListener("click", (e) => {
  if (e.clientX > 260) {
    sidebar.classList.remove("sidebar-hide");
  }
});

// 사이드바 메뉴 마우스오버시 동작 기능
for (let i = 1; i < menuBtns.length; i++) {
  menuBtns[i].addEventListener("mouseover", (e) => {
    const remove = e.currentTarget.querySelectorAll("span");
    for (let item of remove) {
      item.classList.remove("bar_blind");
    }
  });
  menuBtns[i].addEventListener("mouseout", (e) => {
    const remove = e.currentTarget.querySelectorAll("span");
    for (let item of remove) {
      item.classList.add("bar_blind");
    }
  });
}

/** 인트로 영역 notice 인터벌 기능 구현 */
const notiLi = document.querySelectorAll(".notice_li");
let currentIndex = 0;
setInterval(() => {
  for (let i of notiLi) {
    i.classList = "notice_li blind";
  }
  currentIndex = (currentIndex + 1) % notiLi.length;
  notiLi[currentIndex].classList.remove("blind");
}, 5000);

/** 페이지 하단 이동시 헤더영역 fix */
window.addEventListener("scroll", (e) => {
  const nav = document.querySelector("nav");
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  if (scrollY >= 280) {
    nav.classList.add("fix");
  } else {
    nav.classList.remove("fix");
  }
});

/** 슬라이드 기능 구현 */
let pageNum = 0;
let articlePage = 0;
const slide = document.querySelector(".list_slide");
const slides = document.querySelectorAll(".slide");
const left = document.querySelector(".slide_ctrl_left");
const right = document.querySelector(".slide_ctrl_right");
const slideBtns = document.querySelectorAll(".slide_nav_btn");

// 슬라이드 마우스 오버 => 이미지 확대 & 명암 조절
for (let item of slideAnchor) {
  item.addEventListener("mouseover", (e) => {
    e.currentTarget.querySelector(".slide_txt_box").style.backgroundColor =
      "rgba(0,0,0,0.4)";
    e.currentTarget.querySelector("img").style.transform = "scale(1.1)";
  });
  item.addEventListener("mouseout", (e) => {
    e.currentTarget.querySelector(".slide_txt_box").style.backgroundColor =
      "rgba(0,0,0,0.2)";
    e.currentTarget.querySelector("img").style.transform = "scale(1.0)";
  });
}

// 슬라이드 화살표 양쪽 끝 이동시 숨겨지는 기능
function arrowHide() {
  left.style.display = "block";
  right.style.display = "block";
  if (pageNum == 0) {
    left.style.display = "none";
  } else if (pageNum == slides.length - 1) {
    right.style.display = "none";
  }
}

// 페이지 넘버값에 따른 슬라이드 이동
function slidePosition() {
  slide.style.left = pageNum * -960 + "px";
  arrowHide();
}

// 페이지 넘버 값에 따라 페이지 버튼 활성화
function slidePageNumber() {
  for (let btns of slideBtns) {
    btns.classList = "slide_nav_btn";
  }
  document.getElementById("page" + pageNum).classList.add("active" + pageNum);
  slidePosition();
}

// 화살표버튼 클릭 시 페이지 넘버값 변화
function pageNumberCtrl(num) {
  pageNum += num;
  if (pageNum < 0) {
    pageNum = 0;
  } else if (pageNum >= slides.length - 1) {
    pageNum = slides.length - 1;
  }
  slidePageNumber();
}

// 슬라이드 페이지 버튼 클릭 시 페이지 넘버값 지정
for (let btns of slideBtns) {
  btns.addEventListener("click", (e) => {
    for (let btns of slideBtns) {
      btns.classList = "slide_nav_btn";
    }
    e.currentTarget.classList.add(`active${e.currentTarget.dataset.page}`);
    pageNum = parseInt(e.currentTarget.dataset.page);
    slidePageNumber();
  });
}

// 슬라이드 이벤트 모음
left.addEventListener("click", () => pageNumberCtrl(-1));
right.addEventListener("click", () => pageNumberCtrl(1));

// 최초 페이지 진입 시 페이지 값 초기화
slidePageNumber();

/** 내용(글) 영역 기능 구현 */
const article = document.querySelector(".article_list");
const articleLeft = document.querySelector(".article_ctrl_left");
const articleRight = document.querySelector(".article_ctrl_right");

// 페이지 값에 따른 article 슬라이드
function articlePosition() {
  article.style.left = -articlePage * 960 + "px";
}

// article 영역 화살표 클릭 시 페이지 넘버값 변화
function articlePositionCtrl(num) {
  articlePage += num;
  if (articlePage < 0) {
    articlePage = 0;
  } else if (articlePage >= 2) {
    articlePage = 2;
  }
  articlePosition();
}

// article 이벤트 모음
articleLeft.addEventListener("click", () => articlePositionCtrl(-1));
articleRight.addEventListener("click", () => articlePositionCtrl(1));

/** 작가 패널 교체 기능 구현 */
const ulBtns = document.querySelectorAll(".writers_pannel_btn");

// 작가 패널 교체 버튼 클릭시 버튼 활성화 및 패널 교체
for (let btns of ulBtns) {
  btns.addEventListener("click", (e) => {
    for (let btnss of ulBtns) {
      btnss.classList = "writers_pannel_btn";
    }
    e.currentTarget.classList.add("active");
    let changeUl = e.currentTarget.dataset.ul;
    const allUl = document.querySelectorAll(".list_writers");
    for (let ul of allUl) {
      ul.style.display = "none";
    }
    document.querySelector(".writer_" + changeUl).style.display = "flex";
  });
}

// 최초 페이지 진입 시 첫 번째 패널 버튼 활성화
document.querySelector(".writers_pannel_btn").click();
